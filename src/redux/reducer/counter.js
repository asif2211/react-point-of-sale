import * as constant from "../constant";
const counter = (state = 1, action) => {
  switch (action.type) {
    case constant.INCREMENT:
      return state + 1;
    case constant.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export default counter;
