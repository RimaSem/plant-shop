import "./scss/Hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Perfect <span className="hero-title-highlighted">Plants</span> for Your
        Space
      </h1>
      <p>
        Get healthy house plants, succulents and air plants shipped directly
        from our plant shop to your door.
      </p>
      <button type="button">FIND YOUR PLANT</button>
    </div>
  );
}

export default Hero;
