import React from "react";
import styles from "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="mainContainer">
      <div class='logoContainer'>
        <Link to="./">KE Web App</Link>
      </div>
      <div class='linksContainer'>
        <Link to="./">Home</Link>
        <Link to="./">Services</Link>
        <Link to="./">Contact Us</Link>
      </div>
    </div>
  );
};

export default NavBar;
