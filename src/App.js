import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Collection from './Collection/Collection';
import Dashboard from './Dashboard/Dashboard';
import Error from './Error/Error';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Reviews from './Reviews/Reviews';

export const ReviewContext = createContext();


function App() {

  const [review, setReview] = useState([]);
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection></Collection>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/Reviews" element={<Reviews> </Reviews>} />
        <Route path="*" element={<Error></Error>} />


      </Routes>

      <Footer></Footer>

    </>
  );
}

export default App;
