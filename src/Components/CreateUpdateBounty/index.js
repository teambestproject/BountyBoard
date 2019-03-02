import React, { Component } from 'react';
import "./style.css";

// Main component for the Create/Update Bounty page. Belongs in Main Display
class CreateUpdateBounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bountyTitle: 'Please Write the Bounty Title',
            bountyInfo: 'Please write the Bounty Info',
            bountyReward: 'Please write the Bounty Rewards',
            bountyLocation: 'Please enter the location of the bounty',
            NeedsCar: false,
            NeedsCoding: false
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        console.log(this.state);
        alert('Bounty Info Received:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="bountyTitle">Bounty Title</label>
                    <br />
                    <textarea
                        type="textarea"
                        name="bountyTitle"
                        id="bountyTitle"
                        class="titletext"
                        placeholder="Bounty Title goes here"
                        onChange={this.handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label for="bountyInfo">Bounty Info</label>
                    <br />
                    <textarea
                        type="textarea"
                        name="bountyInfo"
                        id="bountyInfo"
                        className="bountytext"
                        placeholder="Bounty Info goes here"
                        onChange={this.handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label for="bountyReward">Bounty Reward</label>
                    <br />
                    <textarea
                        type="textarea"
                        name="bountyReward"
                        id="bountyReward"
                        className="rewardtext"
                        placeholder="Bounty Reward goes here"
                        onChange={this.handleChange}
                    />
                </div>
                <br />
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

                <br />
                <div className="BountyReqsContainer">
                    <label>Needs Car</label>
                    <input
                        name="needsCar"
                        type="checkbox"
                        checked={this.state.NeedsCar}
                        onChange={this.handleInputChange} />

                    <label>Needs Coding</label>
                    <input
                        name="needsCoding"
                        type="checkbox"
                        checked={this.state.NeedsCoding}
                        onChange={this.handleInputChange} />

                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default CreateUpdateBounty;
