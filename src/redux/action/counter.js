import * as constant from "../constant";
const increment = () => {
  return {
    type: constant.INCREMENT,
  };
};
const decrement = () => {
  return {
    type: constant.DECREMENT,
  };
};
const data = {
  increment,
  decrement,
};

export default data;
