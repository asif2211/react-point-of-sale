import {GET_CUSTOMER,ADD_CUSTOMER,DELETE_CUSTOMER,UPDATE_CUSTOMER} from '../constant'

const getCustomer = () => ({
  type: GET_CUSTOMER,
});
const AddCustomer = (customerObj) => ({
  type:ADD_CUSTOMER,
  payload:customerObj
});
const DeleteCustomer = (id) => ({
  type: DELETE_CUSTOMER,
  payload: id,
});
const UpdateCutomer = (data) => ({
 type:UPDATE_CUSTOMER,
 payload:data
});
const data = {
  getCustomer,
  AddCustomer,
  DeleteCustomer,
  UpdateCutomer,
};

export default data