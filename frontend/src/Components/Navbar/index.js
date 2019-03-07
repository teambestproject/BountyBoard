import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
<<<<<<< HEAD:frontend/src/Components/Navbar/index.js
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/user">
      <img
              alt="profile"
              src={firebase.auth().currentUser.photoURL}
            />
      </Link>
      <span>Welcome {firebase.auth().currentUser.displayName}</span>
=======
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
>>>>>>> 8ac37be9a200893647ef0eccc43e4bcb2abc149a:src/Components/Navbar/index.js
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
<<<<<<< HEAD:frontend/src/Components/Navbar/index.js
            >Home</Link>
=======
            ><h1 id="title">Bounty Bonus</h1></Link>
>>>>>>> 8ac37be9a200893647ef0eccc43e4bcb2abc149a:src/Components/Navbar/index.js
          </li>
          
          <li className="nav-item">
            <Link
              to="/bounties"
              className={window.location.pathname === "/bounties" ? "nav-link active" : "nav-link"}
            >Your Bounties</Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/updates"
              className={window.location.pathname === "/updates" ? "nav-link active" : "nav-link"}
            >Bounty Updates</Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/user"
              className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}
            >User Profile Info</Link>
          </li>
        </ul>
      </div>
      <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
    </nav>
  );
}

export default Navbar;
