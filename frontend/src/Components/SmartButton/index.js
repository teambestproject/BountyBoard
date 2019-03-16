import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from './../../App';
import { completeBounty, claimBounty, checkBounty } from '../../Redux-JS/actions/bounty';

class SmartButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: firebaseApp.auth().currentUser.uid,
            id: this.props.id,
            myBounty: this.props.myBounty,
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { myBounty } = this.state;
        if(myBounty.claimedBy === null) {
            this.props.claimBounty(myBounty._id, this.state.user, this.props.history);
        } else if (myBounty.claimedBy !== null && myBounty.isComplete === false) {
            this.props.completeBounty(myBounty._id, this.props.history);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
        if(nextProps.myBounty) {
            this.setState({ myBounty: nextProps.myBounty })
        }
    }

    render() {
        const { myBounty } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <button type='submit' onClick={this.props.action} className={myBounty.isComplete ? 'btn btn-primary disabled' : 'btn btn-primary'} disabled={myBounty.isComplete ? true : false}>{myBounty.isComplete ? 'Completed' : myBounty.claimedBy === null ? 'Claim' : 'Complete'}</button>
            </form>
        )
    }
}

SmartButton.propTypes = {
    claimBounty: PropTypes.func.isRequired,
    completeBounty: PropTypes.func.isRequired,
    bounty: PropTypes.any.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    bounty: state.bounty,
    errors: state.errors
});

const actions = {
    completeBounty,
    claimBounty,
    checkBounty
}

export default connect(mapStateToProps, actions)(withRouter(SmartButton));