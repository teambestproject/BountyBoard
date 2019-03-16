import axios from 'axios';
import { GET_ERRORS, GET_BOUNTIES, GET_BOUNTY } from './types';

export const createBounty = (bounty, history) => dispatch => {
    axios.post('/api/bounty/create', bounty)
        .then(res => history.push('/bounties'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const getAllBounties = () => dispatch => {
    axios.get('/api/bounty/allBounty')
        .then( res => {
            dispatch({
                type: GET_BOUNTIES,
                payload: res.data
            });
        });
}

export const completeBounty = (bountyID, history) => dispatch => {
    const completeInfo = {
        _id: bountyID 
    }
    axios.post('/api/bounty/complete', completeInfo)
        .then(res => history.push('/bounties'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const checkBounty = (bountyID) => dispatch => {
    const bountyInfo = {
        _id: bountyID
    }
    axios.post('/api/bounty/check', bountyInfo)
        .then(res => {
            dispatch({
                type: GET_BOUNTY,
                payload: res.data
            })
        });
}

export const claimBounty = (bountyID, userID, history) => dispatch => {
    const claimInfo = {
        _id: bountyID,
        user: userID
    }
    axios.post('/api/bounty/claim', claimInfo)
        .then(res => history.push('/bounties'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const getMyPostedBounties = (userID) => dispatch => {
    axios.post('/api/bounty/myPostedBounty', userID)
        .then(res => {
            dispatch({
                type: GET_BOUNTIES,
                payload: res.data
            });
        });
}    

export const getMyClaimedBounties = (userID) => dispatch => {
    axios.post('/api/bounty/myClaimedBounty', userID)
        .then(res => {
            dispatch({
                type: GET_BOUNTIES,
                payload: res.data
            });
        });
}
