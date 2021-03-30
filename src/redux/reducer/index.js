import {combineReducers} from 'redux';
import users from './users';
import customer from './customer';
import category from './category';
import supplier from './supplier';
import manufacturer from './manufacturer';

const rootReducer = combineReducers({
users,
customer,
category,
supplier,
manufacturer
})
export default rootReducer