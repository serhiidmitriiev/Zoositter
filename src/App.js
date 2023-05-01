import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sitters from "./pages/Sitters";
import Owners from "./pages/Owners";
import Forum from "./pages/Forum";
import News from "./pages/News";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitters" element={<Sitters />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
