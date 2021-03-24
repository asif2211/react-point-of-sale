import * as constant from "../constant";
const initialstate = {
  category:[]
};

const category = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_CATEGORY:
      return {...state,
        category:state.category
      };
    case constant.ADD_CATEGORY:
      return {
        ...state,
        category:[...state.category, action.payload],
      };
    case constant.DELETE_CATEGORY:
     
      return {
        ...state,
        category:state.category.filter((item) => item.id !== action.payload),
      };
    case constant.UPDATE_CATEGORY:
      let categorys = [...state.category]
      let category = categorys.find(cat => cat.id === action.payload.id);
      let categoryIndex = categorys.indexOf(category)
      categorys[categoryIndex] = action.payload // It will update whole object
  
      return {
        ...state,
        category:categorys
      };
    default:
      return state;
  }
};

export default category;
