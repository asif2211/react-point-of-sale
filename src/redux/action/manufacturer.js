import * as constant from '../constant'

const getManu = () => ({
  type: constant.GET_MANU,
});
const AddManu = (data) => ({
  type:constant.ADD_MANU,
  payload:data
});

const data = {
  getManu,
  AddManu
};

export default data