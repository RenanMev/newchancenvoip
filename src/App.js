import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Painel from './Pages/Painel';
import { useEffect, useState } from 'react';



function App() {
 
 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Painel" element={<Painel />} />
    </Routes>
    </div>
  );
}

export default App;
