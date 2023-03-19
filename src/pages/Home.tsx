import "./scss/Home.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ItemCarousel from "../components/ItemCarousel";
import Img1 from "../img/quality_svg.svg";
import Img2 from "../img/convenience_svg.svg";
import Img3 from "../img/care_svg.svg";
import Img4 from "../img/beginner-plants.jpg";
import Img5 from "../img/pet-friendly-plants.jpg";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="home-container">
      <Hero />
      <h2>Best-Selling Houseplants</h2>
      <ItemCarousel />
      <div className="why-us-container">
        <h2>Why GetPlants?</h2>
        <div className="promise-wrapper">
          <div className="promise">
            <img src={Img1} alt="Unbeatable quality image"></img>
            <p>
              <b>Unbeatable quality</b> We source directly from top-rated
              growers, so we can sell the finest quality plants at the very best
              prices.
            </p>
          </div>
          <div className="promise">
            <img src={Img2} alt="Delivery image" />
            <p>
              <b>Delivery to your door</b> We’ll bring your plants to your door,
              anywhere in LT. If you’re not 100% happy, tell us within 30 days
              and we’ll sort it.
            </p>
          </div>
          <div className="promise">
            <img src={Img3} alt="Help image"></img>
            <p>
              <b>All the help you need</b> We’ll send you a free plant-parenting
              course and our plant doctors are always on call.
            </p>
          </div>
        </div>
      </div>
      <div className="unkillable-plants-intro">
        <img src={Img4} alt="Almost unkillable houseplants"></img>
        <div className="intro-wrapper">
          <h2>(Almost) unkillable houseplants</h2>
          <p>
            We know what it’s like to be guilty of plant murder, we've pulled
            together a collection of plants who are low maintenance enough to
            forgive you for the odd missed watering.
          </p>
          <Link
            to="./shop/?forBeginners=true"
            aria-label="Shop for beginner plants"
          >
            <button type="button">Shop the collection</button>
          </Link>
        </div>
      </div>
      <div className="petsafe-plants-intro">
        <img src={Img5} alt="Pet-safe houseplants"></img>
        <div className="intro-wrapper">
          <h2>Pet-safe houseplants</h2>
          <p>
            It is possible for pets and plants to coexist in the same home. Keep
            your four-legged friends happy, healthy and out of harm’s way with
            cat and dog-safe houseplants.
          </p>
          <Link
            to="./shop/?isPetSafe=true"
            aria-label="Shop for pet-safe plants"
          >
            <button type="button">Shop the collection</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
