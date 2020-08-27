import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Home from "./Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Modal from "./home/Modal.js";
import Hero from "./home/Hero";
import Categories from "./home/Categories";
import Trending from "./home/Trending";
import Services from "./home/Services";
import Newsletter from "./home/Newsletter";
import Footer from "./Footer";
import ShopSidebar from "./shop/ShopSidebar";
import ShopList from "./shop/ShopList";
import Category from "./Category";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/category/:catId" component={Category}/>   
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
