import * as constant from "../constant";
const initialstate = {
  manufacturer: [],
};
const manufacturer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_MANU:
      return { ...state, manufacturer: state.manu };
    case constant.ADD_MANU:
      return {
        ...state,
        manufacturer: [...state.manufacturer, action.payload],
      };
    case constant.DELETE_MANU:
      return {
        ...state,
        manufacturer: state.manufacturer.filter((item) => item.id !== action.payload),
      };
    case constant.UPDATE_MANU:
      let manus = [...state.manufacturer];
      let category = manus.find((cat) => cat.id === action.payload.id);
      let categoryIndex = manus.indexOf(category);
      manus[categoryIndex] = action.payload; // It will update whole object

      return {
        ...state,
        manus: manus,
      };
    default:
      return state;
  }
};

export default manufacturer;
