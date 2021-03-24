import * as constant from '../constant'

const getSupplier = () => ({
  type: constant.GET_SUPPLIER,
});
const AddSupplier = (supplierObj) => ({
  type:constant.ADD_SUPPLIER,
  payload:supplierObj
});
const DeleteSupplier = (id) => ({
  type: constant.DELETE_SUPPLIER,
  payload: id,
});
const UpdateSupplier = (data) => ({
 type:constant.UPDATE_SUPPLIER,
 payload:data
});
const data = {
  getSupplier,
  AddSupplier,
  DeleteSupplier,
  UpdateSupplier,
};

export default data