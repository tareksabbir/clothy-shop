import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Collection from './Collection/Collection';
import Error from './Error/Error';
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
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="*" element={<Error></Error>} />


      </Routes>

      <Footer></Footer>

    </>
  );
}

export default App;
