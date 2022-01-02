import React from "react";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="headerContainer">
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT MY TASTE</p>
        <Link to="menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
