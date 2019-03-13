import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAllBounties } from '../../Redux-JS/actions/bounty';
import Bounty from '../Bounty';
import './style.css';

class BountyBox extends Component {
    constructor() {
        super()
        this.state = {
            bounty: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bounty) {
            this.setState({ bounty: nextProps.bounty })
        }
    }

    render() {
        const { bounty } = this.state;
        return (
            <ul className='bounty-group'>
                <div>
                    {JSON.stringify(bounty)}
                </div>
            </ul>
        )
    }
}

BountyBox.propTypes = {
    bounty: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    bounty: state.bounty
});

export default connect(mapStateToProps, { getAllBounties })(BountyBox);