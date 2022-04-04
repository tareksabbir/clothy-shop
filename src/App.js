import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" />
      </Routes>
    </>
  );
}

export default App;
