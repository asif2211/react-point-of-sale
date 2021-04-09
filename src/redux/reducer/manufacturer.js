import * as constant from "../constant";
const initialstate = {
  manufacturer:[
    {id:1,name:'asif'}
    
]
};

const manufacturer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_MANU:
      return {...state,
        manufacturer:state.manufacturer
      };
    case constant.ADD_MANU:
      return {
        ...state,
        manufacturer:[...state.manufacturer, action.payload],
      };
    case constant.DELETE_MANU:
      return {
        ...state,
        manufacturer:state.manufacturer.filter((item) => item.id !== action.payload),
      };
        default:
      return state;
  }
};

export default manufacturer;
