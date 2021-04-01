import * as constant from "../constant";
const initialstate = {
  manufacturers:[]
};

const manufacturer = (state = {data : []}, action) => {
  switch (action.type) {
    case constant.GET_MANU:
      return {...state,
        data:state.data
      };
    case constant.ADD_MANU:
      return {
        ...state,
        data:[...state.data, action.payload],
      };
        default:
      return state;
  }
};

export default manufacturer;
