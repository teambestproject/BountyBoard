import React from "react";
import "./style.css";

//Main component for User Profile page. Belongs in main display

const UserProfile = () => (
    <div className="userprofile">
        <div className="column">
        <h3> My Info </h3>
        <br />
            <ul className="list">
                <li> Years of experience: <input type="text" id="text"/><input type="button" value="Edit" id="button"/>​</li>
                <li> Areas of expertise: <input type="text" id="text"/><input type="button" value="Edit" id="button"/>​</li>
                <li> Academic degree: <input type="text" id="text"/><input type="button" value="Edit" id="button"/>​</li>
            </ul>            
        </div>
        <br />
        <div className="column">
        <h3> Projects </h3>
        <br />
            <ul className="list">
                <li> Project 1: <input type="text" id="text"/>​</li>
                <li> Project 2: <input type="text" id="text"/>​</li>
                <li> Project 3: <input type="text" id="text"/>​</li>
            </ul>
        </div>
        <br />
        <div className="column">
        <h3> Rewards </h3>
        <br />
            <ul className="list">
                <li> Points Earned: <input type="text" id="text"/>​</li>
                <li> Projects Completed: <input type="text" id="text"/></li>
                <li> Performance Score: <input type="text" id="text"/>​</li>
            </ul>
        </div>
    </div>
);

export default UserProfile;
