import React from "react";
import Modal from "./home/Modal";
import Hero from "./home/Hero";
import ShopSidebar from "./shop/ShopSidebar";
import ShopList from "./shop/ShopList";
import Header from "./Header";
import Footer from "./Footer";

function Category(props) {
  return (
    <>
      <Header />
      <Modal />
      <div className="container">
        <Hero />
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <ShopSidebar />
              <ShopList catId={props.match.params.catId} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Category;
