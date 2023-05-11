import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sitters from "./pages/Sitters";
import Owners from "./pages/Owners";
import Forum from "./pages/Forum";
import News from "./pages/News";
import Login from "./pages/Login";
import Account from "./pages/Account";
import "./App.css";
import useToken from "./useToken";
import Users from "./pages/Users";

// import { useState } from "react";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitters" element={<Sitters />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:id" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
