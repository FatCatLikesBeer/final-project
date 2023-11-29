import './App.css';
import './Dish.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Dish from "./components/Dish";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Dish />
      <Reviews />
      <p>Make another about us section component here</p>
      <Footer />
    </div>
  );
};

export default App;
