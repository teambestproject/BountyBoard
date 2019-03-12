import React from "react";
import { connect } from 'react-redux';


export class Bounties extends React.Component {
    render() {
        var { bounties, showCompleted, searchText } = this.props;
        var filteredBounties = BountyAPI.filterBounties(bounties, showCompleted, searchText);

        var renderBounties = () => {
            if (filteredBounties.length === 0) {
                return (
                    <p className="container__message">No bounties present!</p>
                );
            }
            return filteredBounties.map((bounty) => {
                return (
                    <Bounties key={bounty.id} {...bounty} />
                )
            });
        };

        return (
            <div>
                {renderBounties()}
            </div>
        )
    }
};

export default connect(
    (state) => {
        return state;
    }
)(BountyList);