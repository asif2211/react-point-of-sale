import {combineReducers} from 'redux';
import users from './users';
import customer from './customer';
import category from './category';
import supplier from './supplier';
import manufacturer from './manufacturer';
import parent from './parent';
import product from './product';
import adjustment from './adjustment';

const rootReducer = combineReducers({
users,
customer,
category,
supplier,
manufacturer,
parent,
product,
adjustment
})
export default rootReducer