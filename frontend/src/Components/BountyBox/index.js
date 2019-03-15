import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAllBounties, getMyClaimedBounties, getMyPostedBounties } from '../../Redux-JS/actions/bounty';
import Bounty from '../Bounty';
import './style.css';
import { firebaseApp } from '../../App';

class BountyBox extends Component {
    constructor() {
        super()
        this.state = {
            toggled: 'All'
        }
        this.handleToggleChange = this.handleToggleChange.bind(this);
    }
    handleToggleChange(e) {
        this.setState({ toggled: e.target.name })
        const user = {
            uid: firebaseApp.auth().currentUser.uid
        }
        switch (e.target.name) {
            case 'All':
                this.setState({ bounty: this.props.getAllBounties() })
                break;
            case 'Posted': 
                this.setState({ bounty: this.props.getMyPostedBounties(user) })
                break;
            case 'Claimed':
                this.setState({ bounty: this.props.getMyClaimedBounties(user) })
                break;
            default:
                this.setState({ bounty: this.props.getAllBounties() })
                break;
        }
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
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={this.state.toggled === 'All' ? "btn btn-secondary active" : "btn btn-secondary"}>
                            <input type="radio" name="All" onClick={this.handleToggleChange} /> All
                        </label>
                        <label className={this.state.toggled === 'Posted' ? "btn btn-secondary active" : "btn btn-secondary"}>
                            <input type="radio" name="Posted" onClick={this.handleToggleChange} /> Posted
                        </label>
                        <label className={this.state.toggled === 'Claimed' ? "btn btn-secondary active" : "btn btn-secondary"}>
                            <input type="radio" name="Claimed" onClick={this.handleToggleChange} /> Claimed
                        </label>
                    </div>
                </div>
                <div className="row">
                    {console.log(firebaseApp.auth().currentUser.uid)}
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

const actions = {
    getAllBounties,
    getMyClaimedBounties,
    getMyPostedBounties
}

export default connect(mapStateToProps,  actions)(BountyBox);