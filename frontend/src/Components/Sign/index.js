import React from "react";
import {firebaseApp} from '../../App';
import "./style.css";

function Sign () {
    return (
      <nav className="signout">
        <div className="sign">
          <button className="btn btn-outline-light" onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
        </div>
      </nav>
    );
  }

export default Sign;