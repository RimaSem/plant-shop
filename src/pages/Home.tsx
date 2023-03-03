import "./scss/Home.scss";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Img1 from "../img/quality_svg.svg";
import Img2 from "../img/convenience_svg.svg";
import Img3 from "../img/care_svg.svg";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <div className="why-us-container">
        <h3>Why GetPlants?</h3>
        <div className="promise-wrapper">
          <div className="promise">
            <img src={Img1}></img>
            <p>
              <b>Unbeatable quality</b> We source directly from top-rated
              growers, so we can sell the finest quality plants at the very best
              prices.
            </p>
          </div>
          <div className="promise">
            <img src={Img2}></img>
            <p>
              <b>Delivery to your door</b> We’ll bring your plants to your door,
              anywhere in LT. If you’re not 100% happy, tell us within 30 days
              and we’ll sort it.
            </p>
          </div>
          <div className="promise">
            <img src={Img3}></img>
            <p>
              <b>All the help you need</b> We’ll send you a free plant-parenting
              course and our plant doctors are always on call.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
