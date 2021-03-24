import * as constant from '../constant'

const getCategory = () => ({
  type: constant.GET_CATEGORY,
});
const AddCategory = (categoryObj) => ({
  type:constant.ADD_CATEGORY,
  payload:categoryObj
});
const DeleteCategory = (id) => ({
  type: constant.DELETE_CATEGORY,
  payload: id,
});
const UpdateCategory = (data) => ({
 type:constant.UPDATE_CATEGORY,
 payload:data
});
const data = {
  getCategory,
  AddCategory,
  DeleteCategory,
  UpdateCategory,
};

export default data