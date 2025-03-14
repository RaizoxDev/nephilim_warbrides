import React from "react";
import Main from "./pages/home/home";
import News from "./pages/news/news";
import Forum from "./pages/forum/forum";
import Menu from "./components/menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

function App(){
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}
export default App;