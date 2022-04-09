import logo from './logo.svg';
import './App.css';

import Mounting from './Componants/Mounting';
import Updating from './Componants/Updating';
import Unmounting from './Componants/Unmounting';
import Navbar from './Componants/Navbar';
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Mounting/>} />
      <Route path="/Updating" element={<Updating/>} />
      <Route path="/Unmounting" element={<Unmounting/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

