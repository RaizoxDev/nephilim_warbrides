import React from "react";
import Main from "./pages/home/home";
import Installer from "./pages/installer/installer";
import News from "./pages/news/news";
import Forum from "./pages/forum/forum";
import Support from "./pages/support/support";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/installer/prérequis" element={<Installer />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
export default App;