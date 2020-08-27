import React from "react";
import Hero from "./home/Hero";
import Categories from "./home/Categories";
import Trending from "./home/Trending";
import Services from "./home/Services";
import Newsletter from "./home/Newsletter";
import Modal from "./home/Modal";

function Home() {
  return (
    <>
      <Modal />
      <div className="container">
        <Hero />
        <Categories />
        <Trending />
        <Services />
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
