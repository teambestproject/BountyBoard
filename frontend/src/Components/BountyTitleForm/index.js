import React, {Component} from "react";
import "./style.css";



class BountyTitleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bountyTitle: 'Please Write the Bounty Title',
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
                <label for="bountyTitle">Bounty Title</label>
                <br />
                <textarea
                    type="textarea"
                    name="bountyTitle"
                    id="bountyTitle"
                    class="titletext"
                    placeholder="Bounty Title goes here"
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default BountyTitleForm;
