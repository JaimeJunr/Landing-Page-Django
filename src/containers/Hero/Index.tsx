const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero__background"
        src="src/assets/Background.png"
        alt=""
      />
      <div className="hero__content">
        <img
          className="hero__content__logo"
          src="src/assets/Django Livre.png"
          alt="Django Livre"
        />
      </div>
    </section>
  );
};

export default Hero;
