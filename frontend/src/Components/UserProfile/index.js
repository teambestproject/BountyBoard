import React from "react";
import "./style.css";
import firebase from "firebase";

//Main component for User Profile page. Belongs in main display

const UserProfile = () => (
    <div className="userprofile">

    <img className="profpic" src={firebase.auth().currentUser.photoURL} alt="profile"/>

        <div className="column info">
            <h3> My Info </h3>
            <br />
            <div> Years of experience: <input type="text" id="text" /><input type="button" value="Edit" id="button" />​</div>
            <div> Areas of expertise:  <input type="text" id="text" /><input type="button" value="Edit" id="button" />​</div>
            <div> Academic degree:     <input type="text" id="text" /><input type="button" value="Edit" id="button" />​</div>
        </div>
        <br />

        <div className="column projects">
            <h3> Projects </h3>
            <br />
            <div> Project 1: <input type="text" id="text" />​</div>
            <div> Project 2: <input type="text" id="text" />​</div>
            <div> Project 3: <input type="text" id="text" />​</div>
        </div>
        <br />

        <div className="column rewards">
            <h3> Rewards </h3>
            <br />
            <div> Points Earned:      <input type="text" id="text" />​</div>
            <div> Projects Completed: <input type="text" id="text" /></div>
            <div> Performance Score:  <input type="text" id="text" />​</div>
        </div>
    </div>
);

export default UserProfile;
