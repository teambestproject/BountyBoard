import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { createBounty } from '../../Redux-JS/actions/bounty';
import './style.css';

class BountyForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            reward: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const bounty = {
            title: this.state.title,
            description: this.state.description,
            reward: this.state.reward,
            createdBy: this.props.firebase.auth().currentUser.uid
        }
        this.props.createBounty(bounty, this.props.history)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className='container mt-4'>
                <h2 className='mb-2'>Create Bounty:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Title'
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.title
                            })}
                            name='title'
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />
                        {errors.title && (<div className='invalid-feedback'>{errors.title}</div>)}
                    </div>
                    <div className='form-group'>
                        <textarea
                            type='textarea'
                            placeholder='Description'
                            rows='6'
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.description
                            })}
                            name='description'
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                        {errors.description && (<div className='invalid-feedback'>{errors.description}</div>)}
                    </div>
                    <div className='form-group'>
                        <textarea
                            type='textarea'
                            placeholder='Reward Info'
                            rows='6'
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.reward
                            })}
                            name='reward'
                            onChange={this.handleInputChange}
                            value={this.state.reward}
                        />
                        {errors.reward && (<div className='invalid-feedback'>{errors.reward}</div>)}
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>
                            Submit Bounty
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

BountyForm.propTypes = {
    createBounty: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
});

export default connect(mapStateToProps, { createBounty })(withRouter(BountyForm));
