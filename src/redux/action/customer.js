import * as constant from '../constant'

const getCustomer = () => ({
  type: constant.GET_CUSTOMER,
});
const AddCustomer = (customerObj) => ({
  type:constant.ADD_CUSTOMER,
  payload:customerObj
});
const DeleteCustomer = (id) => ({
  type: constant.DELETE_CUSTOMER,
  payload: id,
});
const UpdateCutomer = (data) => ({
 type:constant.UPDATE_CUSTOMER,
 payload:data
});
const data = {
  getCustomer,
  AddCustomer,
  DeleteCustomer,
  UpdateCutomer,
};

export default data