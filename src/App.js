import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;