import React, { useEffect, useState } from "react";
import {
  Main,
  Content,
  SubMain,
  Ul,
  Li,
  Productinfo,
  Images,
  ProductName,
  Price,
  // Cart,
  // CartList,
  // CartListItem,
  // CartListdata,
  // CartItemHeading,
  // TotalAmount,
  // CounterSection,
  // CartLength,
} from "./styled";
import "./style.scss";
import ButtonText from "../../components/ButtonText/ButtonText";
import axios from "axios";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import allActions from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../redux/selector";
import Items from "./item";
import { formatCurrency } from "../../utils/helper";
import { Scrollbars } from "react-custom-scrollbars-2";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const POS = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const fetchProductList = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log("err", error));
    dispatch(allActions.product.getProduct(res.data));
  };
  useEffect(
    () => {
      const data = () => {
        fetchProductList();
      };
      data();
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const getProductData = useSelector(Product);
  console.log(getProductData.product);
  const counter = useSelector((state) => state.counter);
  const AddToCart = (product) => {
    let isAlreadyInCart = false;
    const cartData = cart.slice();
    cartData.forEach((cart) => {
      if (cart.id === product.id) {
        cart.count++;
        isAlreadyInCart = true;
      }
    });
    if (!isAlreadyInCart) {
      cartData.push({ ...product, count: 1 });
    }
    setCart(cartData);
    window.scrollTo(0, 0);
  };
  const removeFromCart = (item) => {
    const cartData = cart.slice();
    setCart(cartData.filter((remove) => remove.id !== item));
  };
  return getProductData.product ? (
    <>
      <header>
        <div className="continue-shopping">
          <FaArrowAltCircleLeft color="red" size="30" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>7</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{cart.length}</span>{" "}
          items in shopping cart
        </p>
        {cart.length > 0 ? (
          <>
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars>
                  {cart &&
                    cart.map((curItem) => {
                      return (
                        <Items
                          key={curItem.id}
                          data={curItem}
                          remove={removeFromCart}
                        />
                      );
                    })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                Cart Total :{" "}
                {cart.length > 0 ? (
                  <span>
                    {formatCurrency(
                      cart &&
                        cart.reduce(
                          (prv, current) =>
                            prv + current.price * current.count * counter,
                          0
                        )
                    )}
                  </span>
                ) : (
                  ""
                )}
              </h3>
              <button>checkout</button>
            </div>
          </>
        ) : (
          <div>
            <h1>Cart is Empty</h1>
          </div>
        )}
      </section>
      <Main>
        <Content>
          <Zoom>
            <SubMain>
              <Fade bottom cascade>
                <Ul>
                  {getProductData.product &&
                    getProductData.product.map((product, index) => (
                      <Li>
                        <Productinfo>
                          <Images
                            src={product.image}
                            width="200px"
                            height="100px"
                          />
                          <ProductName>
                            {product.title.substr(0, 20)}
                          </ProductName>
                          <Price>{formatCurrency(product.price)}</Price>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "20px",
                            }}
                          >
                            <ButtonText
                              children="Add To Cart"
                              style={{
                                width: "300px",
                              }}
                              onClick={() => AddToCart(product)}
                            ></ButtonText>
                          </div>
                        </Productinfo>
                      </Li>
                    ))}
                </Ul>
              </Fade>
            </SubMain>
          </Zoom>
        </Content>
      </Main>
    </>
  ) : (
    <div style={{ marginTop: 30 }}>Loading...</div>
  );
};

export default POS;
