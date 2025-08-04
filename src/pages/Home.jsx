import React, { Fragment } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

import { hero } from "../mockData";

function Home() {
  return (
    <>
      <Header />
      <Hero data={hero} />
    </>
  );
}

export default Home;
