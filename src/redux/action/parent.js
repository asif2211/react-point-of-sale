import * as constant from '../constant'

const getParents = () => ({
  type: constant.GET_PARENTS,
});
const AddParents = (parentsObj) => ({
  type:constant.ADD_PARENTS,
  payload:parentsObj
});
const DeleteParents = (id) => ({
  type: constant.DELETE_PARENTS,
  payload: id,
});
const UpdateParents = (data) => ({
 type:constant.UPDATE_PARENTS,
 payload:data
});
const data = {
  getParents,
  AddParents,
  DeleteParents,
  UpdateParents,
};

export default data