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
import UnderConstruction from "./components/UnderConstruction.js"
import CantFindPage from "./components/CantFindPage.js"
import CandyBar from "./components/CandyBar.js";
import { useReducer } from "react";
import { Routes, Route } from 'react-router-dom';

function App() {
  const Main = () => {
    return (
      <>
        <Hero />
        <Dish />
        <Reviews />
        <AboutUs />
      </>
    )
  }

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/login' element={ <UnderConstruction /> } />
        <Route path='/menu' element={ <UnderConstruction /> } />
        <Route path='/order' element={ <UnderConstruction /> } />
        <Route path='/reserve' element={ <BookingPage /> } />
        <Route path='/test' element={ <CandyBar /> } />
        <Route path='/*' element={ <CantFindPage /> } />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
