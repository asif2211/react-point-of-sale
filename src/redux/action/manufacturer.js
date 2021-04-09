import * as constant from '../constant'

const getManu = () => ({
  type: constant.GET_MANU,
});
const AddManu = (data) => ({
  type:constant.ADD_MANU,
  payload:data
});
const DeleteManu = (id) => ({
  type: constant.DELETE_MANU,
  payload: id,
});

const data = {
  getManu,
  AddManu,
  DeleteManu
};

export default data