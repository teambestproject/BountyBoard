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
            BountyDefaultReq: false
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
                <label>
                    Bounty Title
              <input
                        name="bountyTitle"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Bounty Info
                    <input
                        name="bountyInfo"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Bounty Reward
                    <input
                        name="bountyReward"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>Bounty Location
                <select value={this.state.bountyLocation} onChange={this.handleInputChange}>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Meeting Room 1">Meeting Room 1</option>
                    <option value="Meeting Room 2">Meeting Room 2</option>
                    <option value="Server Room">Server Room</option>
                    <option value="Hallway">Hallway</option>
                </select>
                </label>
                <br />
                <div className="BountyReqsContainer">
                    <label>
                        BountyDefaultReq
                        <input
                            name="BountyDefaultReq"
                            type="checkbox"
                            checked={this.state.BountyDefaultReq}
                            onChange={this.handleInputChange} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default CreateUpdateBounty;
