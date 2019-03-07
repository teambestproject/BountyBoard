import React, {Component} from "react";
import "./style.css";



class BountyRewardForm extends Component {
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
                placeholder="Bounty Reward goes here"
                onChange={this.handleChange}
            />
        </div>
        );
    }
}

export default BountyRewardForm;
