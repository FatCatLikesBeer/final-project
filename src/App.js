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

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Dish />
      <Reviews />
      <AboutUs />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
