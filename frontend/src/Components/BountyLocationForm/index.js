import React, {Component} from "react";
import "./style.css";



class BountyLocationForm extends Component {
    render() {
        return (
            <div classname="form-group bountylocation">
            <label>Bounty Location</label>
            <br />
            <select
                value={this.state.bountyLocation}
                onChange={this.handleInputChange}
                classname="locationselect">
                <option value="Kitchen">Kitchen</option>
                <option value="Meeting Room 1">Meeting Room 1</option>
                <option value="Meeting Room 2">Meeting Room 2</option>
                <option value="Server Room">Server Room</option>
                <option value="Hallway">Hallway</option>
            </select>
            </div>
        );
    }
}

export default BountyLocationForm;
