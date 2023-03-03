import "./scss/Hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Perfect <span className="hero-title-highlighted">Plants</span> for your
        space
      </h1>
      <p>
        Get healthy house plants, succulents and air plants shipped directly
        from our greenhouse to your door
      </p>
      <button type="button">FIND YOUR PLANT</button>
    </div>
  );
}

export default Hero;
