import * as constant from '../constant'

const getProduct = () => ({
  type: constant.GET_PRODUCT,
});
const AddProduct = (productObj) => ({
  type:constant.ADD_PRODUCT ,
  payload:productObj
});
const DeleteProduct = (id) => ({
  type: constant.DELETE_PRODUCT,
  payload: id,
});
const UpdateProduct = (data) => ({
 type:constant.UPDATE_PRODUCT,
 payload:data
});
const data = {
  getProduct,
  AddProduct,
  DeleteProduct,
  UpdateProduct,
};

export default data