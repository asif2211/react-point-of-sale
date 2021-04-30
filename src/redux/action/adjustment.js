import * as constant from '../constant'

const getAdjustment = () => ({
  type: constant.GET_ADJUSTMENT,
});
const AddAdjustment = (ajustmentObj) => ({
  type:constant.ADD_ADJUSTMENT ,
  payload:ajustmentObj
});
const DeleteAdjustment = (id) => ({
  type: constant.DELETE_ADJUSTMENT,
  payload: id,
});
const UpdateAdjustment = (data) => ({
 type:constant.UPDATE_ADJUSTMENT,
 payload:data
});
const data = {
  getAdjustment,
  AddAdjustment,
  DeleteAdjustment,
  UpdateAdjustment,
};

export default data