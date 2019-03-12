import { visabilityFilters, SET_BOUNTY_VISABILITY, GET_BOUNTIES } from "../actions/types";

const initialState = {
    visablityFilter: visabilityFilters.SHOW_ALL,
    bounties: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_BOUNTY_VISABILITY:
            return Object.assign({}, state, {
                visabilityFilter: action.filter
            });
        case GET_BOUNTIES:
            return action.payload
        default:
            return state;
    };
}
