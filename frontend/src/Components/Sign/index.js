import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import "./style.css";

function Sign () {
    return (
      <nav className="signout">
        <div class="sign">
          <button onClick={() => firebase.auth().signOut()}>--Sign out--</button>
        </div>
      </nav>
    );
  }

export default Sign;