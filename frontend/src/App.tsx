import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProfile from "./pages/CreateProfile";
import MyProfile from "./pages/MyProfile";
import Hotels from "./pages/Hotels";
import Safety from "./pages/Safety";
import Compatibility from "./pages/Compatibility";
import Matches from "./pages/Matches";
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/hostels" element={<Hotels />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compatibility" element={<Compatibility />} />
      </Routes>
    </BrowserRouter>
  );
}


