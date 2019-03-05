import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import bountyReducer from './bountyReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    bounty: bountyReducer
});
