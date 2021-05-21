import React, { useEffect, useState } from "react";
import {
  GridContainer,
  Main,
  Content,
  SubMain,
  Ul,
  Li,
  Productinfo,
  Images,
  ProductName,
  Price,
  Cart,
  CartList,
  CartListItem,
  CartListdata,
  CartItemHeading,
  TotalAmount,
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import axios from "axios";
import allActions from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../redux/selector";
import { formatCurrency } from "../../utils/helper";

const POS = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const fetchProductList = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log("err", error));
    dispatch(allActions.product.getProduct(res.data));
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const getProductData = useSelector(Product);

  console.log(getProductData.product);

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
    alert(item);
    const cartData = cart.slice();
    setCart(cartData.filter((remove) => remove.id !== item));
  };
  return getProductData.product ? (
    <GridContainer>
      <Main>
        <Cart>
          <CartList>
            <CartListItem>
              <CartItemHeading>Sr No</CartItemHeading>
              <CartItemHeading>Image</CartItemHeading>
              <CartItemHeading>Name</CartItemHeading>
              <CartItemHeading>Price</CartItemHeading>
              <CartItemHeading>Qty</CartItemHeading>
              <CartItemHeading>Action</CartItemHeading>
            </CartListItem>
            {cart &&
              cart.map((item, index) => (
                <CartListItem>
                  <CartListdata>{index + 1}</CartListdata>
                  <CartListdata>
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "50px", height: "30px" }}
                    />
                  </CartListdata>
                  <CartListdata>{item.title.substr(0, 20)}</CartListdata>
                  <CartListdata>
                    ${item.price} x {item.count}
                  </CartListdata>
                  <CartListdata>12</CartListdata>
                  <CartListdata>
                    <ButtonText
                      onClick={() => removeFromCart(item.id)}
                      style={{ backgroundColor: "#F32013" }}
                    >
                      Remove
                    </ButtonText>
                  </CartListdata>
                </CartListItem>
              ))}
          </CartList>
          <CartListItem>
            <CartItemHeading></CartItemHeading>
            <CartItemHeading></CartItemHeading>
            {cart.length > 0 ? (
              <>
                <TotalAmount>Total</TotalAmount>
                <CartItemHeading>
                  {formatCurrency(
                    cart &&
                      cart.reduce(
                        (prv, current) => prv + current.price * current.count,
                        0
                      )
                  )}
                </CartItemHeading>
              </>
            ) : (
              <div></div>
            )}

            <CartItemHeading></CartItemHeading>
            <CartItemHeading></CartItemHeading>
          </CartListItem>
          <CartItemHeading></CartItemHeading>
        </Cart>

        <Content>
          <SubMain>
            <Ul>
              {getProductData.product &&
                getProductData.product.map((product, index) => (
                  <Li>
                    <Productinfo>
                      <Images src={product.image} />
                      <ProductName>{product.title}</ProductName>
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
          </SubMain>
        </Content>
      </Main>
    </GridContainer>
  ) : (
    <div style={{ marginTop: 30 }}>Loading...</div>
  );
};

export default POS;
