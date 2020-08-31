import React from "react";
import Home from "./Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import io from 'socket.io-client'
import Category from "./Category";
import Login from "./login/Login";
import { API_URL } from './config'
import './App.css'
import ProductDetail from "./product/ProductDetail.js";


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/category/:catId" component={Category}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route path="/signin" component={Login}/>   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
