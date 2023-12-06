import './App.css';
import './Dish.css';
import './AboutUs.css';
import './Reviews.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Dish from "./components/Dish";
import Reviews from "./components/Reviews";
import Copyright from "./components/Copyright";
import AboutUs from "./components/AboutUs.js";
import BookingPage from "./components/BookingPage.js"
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Dish />
            <Reviews />
            <AboutUs />
          </>
        } 
        />
        <Route path='/reserve' element={ <BookingPage /> } />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
