import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import bountyReducer from './bountyReducer';

export default combineReducers({
    errors: errorReducer,
    bounty: bountyReducer
});
