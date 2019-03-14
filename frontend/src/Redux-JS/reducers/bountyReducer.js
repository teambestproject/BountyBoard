import { GET_BOUNTIES } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOUNTIES:
            return action.payload
        default:
            return state;
    };
}
