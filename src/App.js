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
import Review from './Review/Review';
import Reviews from './Reviews/Reviews';

export const ReviewContext = createContext();


function App() {

  const [reviews, setReviews] = useState([]);

  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection></Collection>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/Reviews" element={<Reviews> </Reviews>} />
        <Route path="/Review" element={<Review></Review>} />
        <Route path="*" element={<Error></Error>} />


      </Routes>

      <Footer></Footer>

    </ReviewContext.Provider>
  );
}

export default App;
