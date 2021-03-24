import {GET_SUPPLIER,ADD_SUPPLIER,DELETE_SUPPLIER,UPDATE_SUPPLIER} from '../constant'

const getSupplier = () => ({
  type: GET_SUPPLIER,
});
const AddSupplier = (SupplierObj) => ({
  type:ADD_SUPPLIER,
  payload:SupplierObj
});
const DeleteSupplier = (id) => ({
  type: DELETE_SUPPLIER,
  payload: id,
});
const UpdateSupplier = (data) => ({
 type:UPDATE_SUPPLIER,
 payload:data
});
const data = {
  getSupplier,
  AddSupplier,
  DeleteSupplier,
  UpdateSupplier,
};

export default data