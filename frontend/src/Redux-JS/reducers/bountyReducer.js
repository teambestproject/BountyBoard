import { GET_BOUNTIES, GET_BOUNTY } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOUNTIES:
            return action.payload
        case GET_BOUNTY:
            return action.payload
        default:
            return state;
    };
}
