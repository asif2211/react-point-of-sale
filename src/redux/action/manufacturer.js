import * as constant from '../constant'

const getManu = () => ({
  type: constant.GET_MANU,
});
const AddManu = (manuObj) => ({
  type:constant.ADD_MANU,
  payload:manuObj
});
const DeleteManu = (id) => ({
  type: constant.DELETE_MANU,
  payload: id,
});
const UpdateManu = (data) => ({
 type:constant.UPDATE_MANU,
 payload:data
});
const data = {
  getManu,
  AddManu,
  DeleteManu,
  UpdateManu,
};

export default data