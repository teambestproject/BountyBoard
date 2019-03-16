import React, { Component } from "react";
import SmartButton from '../SmartButton';
import "./style.css";

const MAX_CHAR = 100;
const shadowStyle = {
  paddingBottom: '10px',
  boxShadow: 'inset 0 -40px 25px -40px grey'
}

class Bounty extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descriptionIsOpen: false,
      rewardIsOpen: false,
      myBounty: this.props.myBounty,
      action: this.props.action
    }
  }

  toggleDesc = () => {
    this.setState({ descriptionIsOpen: !this.state.descriptionIsOpen })
  }

  toggleRew = () => {
    this.setState({ rewardIsOpen: !this.state.rewardIsOpen })
  }

  getRenderedDesc(string) {
    if (this.state.descriptionIsOpen) {
      return string
    }
    return string.slice(0, MAX_CHAR) + '...';
  }

  getRenderedRew(string) {
    if (this.state.rewardIsOpen) {
      return string
    }
    return string.slice(0, MAX_CHAR) + '...';
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isComplete) {
      this.setState({ isComplete: nextProps.isComplete })
    }
    if (nextProps.claimedBy) {
      this.setState({ claimedBy: nextProps.claimedBy })
    }
  }

  render() {
    return (
      <div className="card bountyouter my-2 col-md-4">
        <div className="card-body">
          <h5 className="card-title bounty-title">{this.props.title}</h5>
          <strong>Description:</strong>
          <p className="card-text bounty-description" style={this.state.descriptionIsOpen ? null : shadowStyle}>{this.getRenderedDesc(this.props.description)}</p>
          <p><button className="astext" onClick={this.toggleDesc}>
            {this.state.descriptionIsOpen ? 'Show less' : 'Show more'}
          </button></p>
          <strong>Reward:</strong>
          <p className="card-text bounty-reward" style={this.state.rewardIsOpen ? null : shadowStyle}>{this.getRenderedRew(this.props.reward)}</p>
          <p><button className="astext" onClick={this.toggleRew}>
            {this.state.rewardIsOpen ? 'Show less' : 'Show more'}
          </button></p>
          <SmartButton id={this.state.id} myBounty={this.state.myBounty} action={this.state.action}/>
        </div>
      </div>
    );
  }
}

export default Bounty;
