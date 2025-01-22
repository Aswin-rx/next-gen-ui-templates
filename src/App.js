import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pageComponents/Login/Login'; // Assuming Login is in 'pageComponents/Login'
import Registration from './pageComponents/Registration/Registration';
import Videos from './pageComponents/videos/videos';
import "./App.css";
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <Routes>
        <Route path ="/" element={<HomePage/>} />
        <Route path ="/Login" element={<Login/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path ="/videos" element={<Videos/>} />
      </Routes>
  );
};

export default App;