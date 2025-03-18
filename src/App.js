import React from "react";
import Main from "./pages/home/home";
import Installer from "./pages/installer/installer";
import News from "./pages/news/news";
import Forum from "./pages/forum/forum";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Prérequis from "./components/installer/prerequis";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/installer/prérequis" element={<Installer />} />
      </Routes>
    </Router>
  );
}
export default App;