import React, { Component } from "react";
import "./style.css";



class BountyInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bountyInfo: 'Please Write the Bounty Title',
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
                <label for="bountyInfo">Bounty Info</label>
                <br />
                <textarea
                    type="textarea"
                    name="bountyInfo"
                    id="bountyInfo"
                    className="bountytext"
                    placeholder={this.state.bountyInfo}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default BountyInfoForm;
