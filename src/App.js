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
import CandyBar from "./components/CandyBar.js";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

function App() {

  const [availableTimes, setAvailableTimes] = useState([
    ["0500", "5:00 PM"],
    ["0530", "5:30 PM"],
    ["0600", "6:00 PM"],
    ["0630", "6:30 PM"],
    ["0700", "7:00 PM"],
    ["0730", "7:30 PM"],
    ["0800", "8:00 PM"],
    ["0830", "8:30 PM"],
    ["0900", "9:00 PM"],
    ["0930", "9:30 PM"],
    ["1000", "10:00 PM"],
    ["1030", "10:30 PM"],
    ["1100", "11:00 PM"],
    ["1130", "11:30 PM"],
  ]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "monday":
        return {}
      case "tuesday":
        return {}
      case "wednesday":
        return {}
      case "thrusday":
        return {}
      case "friday":
        return {}
      case "saturday":
        return {}
      case "sunday":
        return {}
      default:
        return {}
    }
  }

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
        <Route path='/reserve' element={ <BookingPage availableTimes={availableTimes} /> } />
        <Route path='/test' element={ <CandyBar /> } />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
