import React from "react";

const Header = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="h-5/6 w-5/6 flex flex-col justify-center items-center blurry-bg-img">
        <div>
          <p className="text-glow text-5xl md:text-7xl font-bold leading-tight text-center md:text-left">
            Hello there,
          </p>
          <p className="text-glow text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            I'm Fayolle Alexandre
          </p>
          <h1 className="text-gradient text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
            Full-Stack Developer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
