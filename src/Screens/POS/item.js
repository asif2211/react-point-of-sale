import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
const Items = ({ description, title, img, price, amount, data, remove }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={data.image} alt="iamge" />
        </div>

        <div className="title">
          <h2>{data.title.substr(0, 20)}</h2>
        </div>

        <div className="add-minus-quantity">
          <ButtonText
            onClick={() => dispatch(allActions.counter.increment())}
            style={{
              width: 40,
              height: 20,
              backgroundColor: "#3B8DBC",
            }}
          >
            <FaPlus />
          </ButtonText>
          <input type="text" placeholder="2" value={counter} />

          <ButtonText
            onClick={() => dispatch(allActions.counter.decrement())}
            style={{
              width: 40,
              height: 20,
              backgroundColor: "#3B8DBC",
            }}
          >
            <FaMinus />
          </ButtonText>
        </div>

        <div className="price">
          <h3>{formatCurrency(data.price)}</h3>
        </div>
        <div className="price" onClick={() => remove(data.id)}>
          <FaTrashAlt
            color="red"
            style={{ cursor: "cursor", marginRight: 20 }}
            size={20}
          />
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
