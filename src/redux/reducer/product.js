import * as constant from "../constant";
const initialstate = {
  product:[
    {pro_name:'Toys',code:'123455',brand:'HP',category:'toy',quantity:'100',product_unit:'piece',price:'1000'},
    {pro_name:'Electronic',code:'123455',brand:'HP',category:'toy',quantity:'100',product_unit:'piece',price:'1000'}
  ]
};

const product = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_PRODUCT:
      return {...state,
        product:state.product
      };
    case constant.ADD_PRODUCT:
      return {
        ...state,
        product:[...state.product, action.payload],
      };
    case constant.DELETE_PRODUCT:
     
      return {
        ...state,
        product:state.product.filter((item) => item.id !== action.payload),
      };
    case constant.UPDATE_PRODUCT:
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

export default product;
