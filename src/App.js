import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
