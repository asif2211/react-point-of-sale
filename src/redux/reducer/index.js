import {combineReducers} from 'redux';
import users from './users';
import customer from './customer';
import category from './category';

const rootReducer = combineReducers({
users,
customer,
category
})
export default rootReducer