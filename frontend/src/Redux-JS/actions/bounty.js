import axios from 'axios';
import { GET_ERRORS, GET_BOUNTIES } from './types';

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
            dispatch ({
                type: GET_BOUNTIES,
                payload: res.data
            });
        });
}

export const claimBounty = (updateID, history) => dispatch => {
   axios.post('/api/bounty/claim', updateID)
        .then(res => history.push('/user'))
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

export const showBounty = {
    getAllBounties,
    getMyClaimedBounties,
    getMyPostedBounties
}
