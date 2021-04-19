import * as constant from "../constant";
const initialstate = {
  parent:[{id:1,parentName:'parents'}]
};

const parent = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_PARENTS:
      return {...state,
        parent:state.parent
      };
    case constant.ADD_PARENTS:
      return {
        ...state,
        parent:[...state.parent, action.payload],
      };
    case constant.DELETE_PARENTS:
     
      return {
        ...state,
        parent:state.parent.filter((item) => item.id !== action.payload),
      };
    case constant.UPDATE_PARENTS:
      let parents = [...state.parent]
      let category = parents.find(cat => cat.id === action.payload.id);
      let categoryIndex = parents.indexOf(category)
      parents[categoryIndex] = action.payload // It will update whole object
  
      return {
        ...state,
        parents:parents
      };
    default:
      return state;
  }
};

export default parent;
