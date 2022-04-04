import { Route, Routes } from 'react-router-dom';
import './App.css';
import Collection from './Collection/Collection';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection></Collection>} />

      </Routes>

      <Footer></Footer>

    </>
  );
}

export default App;
