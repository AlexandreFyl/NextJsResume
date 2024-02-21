import React from "react";

const Header = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div>
        <p className="text-glow text-7xl font-bold leading-tight">
          Hello there,
        </p>
        <p className="text-glow text-5xl font-bold leading-tight">
          I'm Fayolle Alexandre
        </p>
        <h1 className="text-gradient text-5xl font-bold leading-tight">
          Full-Stack Developer
        </h1>
      </div>
    </section>
  );
};

export default Header;
