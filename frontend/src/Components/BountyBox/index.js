import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAllBounties } from '../../Redux-JS/actions/bounty';
import Bounty from '../Bounty';
import './style.css';

class BountyBox extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        const bounties = this.props.getAllBounties();
        this.setState({ bounty: bounties });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.bounty) {
            this.setState({ bounty: nextProps.bounty })
        }
    }

    render() {
        const { bounty } = this.state;
        return (
            <div className="container">
                <div className="row">
                    {console.log(bounty)}
                    {bounty ? bounty.map((bounty) => (
                        <Bounty
                            key={bounty._id}
                            title={bounty.title}
                            description={bounty.description}
                            reward={bounty.reward}
                        />
                    )) : <div></div>}
                </div>
            </div>
        )
    }
}

BountyBox.propTypes = {
    bounty: PropTypes.any.isRequired
}

const mapStateToProps = (state) => ({
    bounty: state.bounty
});

export default connect(mapStateToProps, { getAllBounties })(BountyBox);