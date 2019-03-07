import React, {Component} from "react";
import "./style.css";



class BountyInfoForm extends Component {
    render() {
        return (
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
        );
    }
}

export default BountyInfoForm;
