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

export const getAllBounties = () => dispatch => {
    axios.get('/api/bounty/allBounty')
        .then( res => {
            dispatch ({
                type: GET_BOUNTIES,
                payload: res.data
            });
        })
}
