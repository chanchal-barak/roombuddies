from pymongo import MongoClient

MONGO_URL = "mongodb+srv://<roomuser>:<roomuser@1417>@cluster0.jd9r7ld.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)

db = client["room_buddies"]

users_collection = db["users"]
profiles_collection = db["profiles"]
