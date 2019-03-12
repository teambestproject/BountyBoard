import React, { Component } from "react";
import "./style.css";



class BountyRewardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bountyReward: 'Please Write the Bounty Title',
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="form-group">
                <label for="bountyReward">Bounty Reward</label>
                <br />
                <textarea
                    type="textarea"
                    name="bountyReward"
                    id="bountyReward"
                    className="rewardtext"
                    placeholder={this.state.bountyReward}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default BountyRewardForm;
