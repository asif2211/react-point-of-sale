import {combineReducers} from 'redux';
import users from './users';
import customer from './customer'
const rootReducer = combineReducers({
users,
customer
})
export default rootReducer