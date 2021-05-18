import * as constant from "../constant";
const initialstate = {
  adjustment: [
    {
      id: 1,
      date: "24-04-2021 11:14:12",
      reference: "adr-20210424-111412",
      warehouse: "HP",
      product: "toy",
      note: "100",
    },
  ],
};

const adjustment = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_ADJUSTMENT:
      return state;
    case constant.ADD_ADJUSTMENT:
      return {
        ...state,
        ajustment: [...state.ajustment, action.payload],
      };
    case constant.DELETE_ADJUSTMENT:
      return {
        ...state,
        ajustment: state.ajustment.filter((item) => item.id !== action.payload),
      };
    case constant.UPDATE_PRODUCT:
      let categorys = [...state.category];
      let category = categorys.find((cat) => cat.id === action.payload.id);
      let categoryIndex = categorys.indexOf(category);
      categorys[categoryIndex] = action.payload; // It will update whole object

      return {
        ...state,
        category: categorys,
      };
    default:
      return state;
  }
};

export default adjustment;
