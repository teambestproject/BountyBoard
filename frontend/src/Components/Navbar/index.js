import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar() {
  return (
    <nav className="navbar">

        <div>
          <ul className="navbar-nav">
           <li className="nav-item">
            <Link 
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/welcome"
                  ? "nav-link active"
                  : "nav-link"
                        } 
            ><h1 id="title">Bounty Bonus</h1></Link>
            </li>
           
           <li className="nav-item">
            <Link
              to="/bounties"
              className={window.location.pathname === "/bounties" ? "nav-link active" : "nav-link"}
            >Your Bounties</Link>
            </li>
                  
            <li className="nav-item">
            <Link
              to="/user"
              className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}
            >User Profile Info</Link>
            </li>
          </ul>
      </div>
 </nav>
  );
}

export default Navbar;
