import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Bounties
      </Link>
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
            >Welcome</Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/bounties"
              className={window.location.pathname === "/bounties" ? "nav-link active" : "nav-link"}
            >Bounties</Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/updates"
              className={window.location.pathname === "/updates" ? "nav-link active" : "nav-link"}
            >Updates</Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/user"
              className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}
            >User</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
