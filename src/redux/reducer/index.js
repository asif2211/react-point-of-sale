import {combineReducers} from 'redux';
import users from './users';
import customer from './customer';
import category from './category';
import supplier from './supplier';

const rootReducer = combineReducers({
users,
customer,
category,
supplier
})
export default rootReducer