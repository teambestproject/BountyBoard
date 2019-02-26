import React, { Component } from 'react';
import "./style.css";
import findByType from "./../../utils/findByType"

// Main Bounty component, belongs in Main Display

const BountyInfo = () => null;
const BountyReward = () => null;
const BountyTitle = () => null;

class Bounty extends Component {

    renderTitle() {
        const { children } = this.props;
        const bountyTitle = findByType(children, BountyTitle);

        if (!BountyTitle) {
            return null;
        }

        return <div className="bountyTitle">BountyTitle Rendered!{bountyTitle.props.children}</div>;
    }

    renderInfo() {
        const { children } = this.props;
        const bountyInfo = findByType(children, BountyInfo);

        if (!bountyInfo) {
            return null;
        }

        return <div className="bountyInfo">BountyInfo Rendered!{bountyInfo.props.children}</div>;
    }

    renderReward() {
        const { children } = this.props;
        const bountyReward = findByType(children, BountyReward);

        if (!bountyReward) {
            return null;
        }

        return <div className="bountyReward">BountyReward Rendered! {bountyReward.props.children}</div>
    }

    render() {
        return (
            <div className="bountyContainer">Bounty Rendered!
                <div className="bountyTitleContainer">
                    {this.renderTitle()}
                </div>
                <div className="bountyInfoContainer">
                    {this.renderInfo()}
                </div>
                <div className="bountyRewardContainer">
                    {this.renderReward()}
                </div>
            </div>
        )
    }
}

Bounty.BountyTitle = BountyTitle;
Bounty.BountyInfo = BountyInfo;
Bounty.BountyReward = BountyReward;
export default Bounty;
