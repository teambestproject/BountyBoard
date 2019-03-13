import React from "react";
import firebase from "firebase";
import "./style.css";

function Sign () {
    return (
      <nav className="signout">
        <div className="sign">
          <button onClick={() => firebase.auth().signOut()}>--Sign out--</button>
        </div>
      </nav>
    );
  }

export default Sign;