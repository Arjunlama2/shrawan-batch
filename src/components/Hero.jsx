import React from "react";

function Hero(props) {
  const { data } = props;
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1">
        <div>
          <p className="font-[500]">{data.slogan}</p>
          <p className="">{data.description}</p>
        </div>
        <button>Get Started</button>
      </div>
      <img src={data.image} alt="md:flex-1" />
    </div>
  );
}

export default Hero;
