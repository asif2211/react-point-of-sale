import {GET_CATEGORY,ADD_CATEGORY,DELETE_CATEGORY,UPDATE_CATEGORY} from '../constant'

const getCategory = () => ({
  type: GET_CATEGORY,
});
const AddCategory = (categoryObj) => ({
  type:ADD_CATEGORY,
  payload:categoryObj
});
const DeleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});
const UpdateCategory = (data) => ({
 type:UPDATE_CATEGORY,
 payload:data
});
const data = {
  getCategory,
  AddCategory,
  DeleteCategory,
  UpdateCategory,
};

export default data