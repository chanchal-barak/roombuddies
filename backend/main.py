from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer

from auth import hash_password, verify_password, create_token
from models import UserRegister, UserLogin, Profile

from jose import jwt, JWTError

app = FastAPI()

# ✅ FIX CORS (Allow frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Token extractor
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

# Temporary database
users_db = {}
profiles_db = {}

SECRET_KEY = "ROOMBUDDIES_SECRET"
ALGORITHM = "HS256"


# ✅ REGISTER
@app.post("/auth/register")
def register(user: UserRegister):
    if user.email in users_db:
        raise HTTPException(status_code=400, detail="User already exists")

    users_db[user.email] = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password),
    }

    return {"message": "User registered successfully"}


# ✅ LOGIN
@app.post("/auth/login")
def login(user: UserLogin):
    db_user = users_db.get(user.email)

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token({"sub": user.email})

    return {"access_token": token, "token_type": "bearer"}


# ✅ GET CURRENT USER FROM TOKEN
def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")

        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token payload")

        if email not in users_db:
            raise HTTPException(status_code=401, detail="User not found")

        return users_db[email]

    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ✅ AUTH CHECK
@app.get("/auth/me")
def me(user=Depends(get_current_user)):
    return user


# ✅ CREATE PROFILE
@app.post("/profile/create")
def create_profile(profile: Profile, user=Depends(get_current_user)):
    profiles_db[user["email"]] = profile.dict()
    return {"message": "Profile saved successfully"}


# ✅ GET PROFILE
@app.get("/profile/me")
def my_profile(user=Depends(get_current_user)):
    return profiles_db.get(user["email"], {})
