import "./scss/Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Perfect <span className="hero-title-highlighted">Plants</span> for Your
        Space
      </h1>
      <p>
        Get healthy houseplants, succulents and air plants shipped directly from
        our plant shop to your door.
      </p>
      <Link to="./shop" aria-label="Shop button">
        <button type="button">FIND YOUR PLANT</button>
      </Link>
    </div>
  );
}

export default Hero;
