import { visablityFilters, SET_BOUNTY_VISABILITY } from "../actions/types";

const initialState = {
    visablityFilter: visablityFilters.SHOW_ALL,
    bounties: []
}

const showBounty = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOUNTY_VISABILITY:
            return Object.assign({}, state, {
                visablityFilter: action.filter
            });
        default:
            return state;
    }
}