import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/layout';
import Login from './pageComponents/Login/Login'; // Assuming Login is in 'pageComponents/Login'
import Registration from './pageComponents/Registration/Registration';
import Videos from './pageComponents/videos/videos';
import "./App.css";
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
    {/* Home page route without Layout */}
    <Route path="/" element={<HomePage />} />
    
    {/* All other routes with Layout */}
    <Route element={<Layout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/videos" element={<Videos />} />
    </Route>
  </Routes>
  );
};

export default App;