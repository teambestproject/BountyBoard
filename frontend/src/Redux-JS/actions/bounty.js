import axios from 'axios';
import { GET_ERRORS, GET_BOUNTIES } from './types';

export const createBounty = (bounty, history) => dispatch => {
    axios.post('/api/bounty/create', bounty)
        .then(res => history.push('/allBounty'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const getAllBounties = () => {
    axios.get('/api/bounty/allBounty')
}

export const toggleBounty = index => {
    return { type: TOGGLE_BOUNTY, index };
}

export const setVisabilityFilter = filter => {
    return { type: SET_BOUNTY_VISABILITY, filter };
}
