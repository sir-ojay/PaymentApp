import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login/Login";
import UserDetails from "./pages/user/UserDetails";
// import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
       
            <Route path="/dashboard" element={<Home />} />
            <Route exact path="/userdetails/:id" element={<UserDetails />} />
     
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
