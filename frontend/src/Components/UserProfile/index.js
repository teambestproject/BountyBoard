import React from "react";
import "./style.css";

//Main component for User Profile page. Belongs in main display

const UserProfile = () => (
    <div className="userprofile">
        <div class="column">
        <h3> My Info </h3>
            <ul>
                <li> Years of experience: 15 </li>
                <li> Areas of expertise: back end development, some CSS </li>
                <li> Academic degree: philsophy, coding bootcamp </li>
            </ul>
        </div>
        <div class="column">
        <h3> Projects </h3>
            <ul>
                <li> Project 1: Best Project </li>
                <li> Project 2: Awesome Project </li>
                <li> Project 3: Super Project </li>
            </ul>
        </div>
        <div class="column">
        <h3> Rewards </h3>
            <ul>
                <li> Points Earned: 65 points out of 90 possible </li>
                <li> Projects Completed: 3 </li>
                <li> Performance Score: 87 % </li> 
            </ul>
        </div>
    </div>
);

export default UserProfile;
