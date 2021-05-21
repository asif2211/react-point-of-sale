import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "main" "main" "main";
  grid-template-rows: 1.5rem 1fr 1.5rem;
  grid-template-columns: 1fr;
  position: absolute;
  left: 0;
  z-index: -3;
  margin-top: 5rem;
`;
export const Cart = styled.div`
  width: 100%;
`;
export const CartList = styled.ul`
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  background-color: #fff;
  border-top: 3px solid rgb(59, 141, 188);
  border-bottom: 3px solid rgb(59, 141, 188);
  border-radius: 3px;
  margin-left: 2rem;
  margin-right: 2rem;
`;
export const CartListItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.2rem;
  padding: 0.2rem;
  width: 100%;
`;
export const CartListdata = styled.div`
  font-size: 14px;
  color: #757575;
  width: 80px;
  text-align: center;
`;
export const CartItemHeading = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 70px;
  text-align: center;
`;
export const TotalAmount = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 70px;
  text-align: center;
  margin-left: 40px;
`;
export const Title = styled.p`
  color: #54565a;
  &:hover {
    color: #ff8000;
  }
`;
export const Main = styled.div`
  grid-area: Main;
  margin-bottom: auto;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
export const SubMain = styled.div`
  flex: 2 30rem;
  flex-wrap: wrap;
`;
export const Sidebar = styled.div`
  flex: 1 10rem;
`;

export const Linkstyle = styled(Link)`
  color: #000;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    color: #ff8000;
    opacity: 0.5px;
  }
`;

// product style

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;
export const Li = styled.li`
  margin-top: 80px;
  background-color: #fff;
  flex: 0 1 20rem;
  height: 34rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #c0c0c0;
`;
export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const Images = styled.img`
  max-height: 24rem;
  width: 24rem;
  max-width: 24rem;
  height: 24rem;
`;
export const Productinfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  border: 0.1rem dashed #ccc;
  gap: 0.1rem;
`;

export const PriceMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  text-align: center;
  font-size: 1.2rem;
  flex: 1;
  font-size: 1.2rem;
  color: #54565a;
`;
export const ProductName = styled(Link)`
  text-align: center;
  font-size: 1.2rem;
  flex: 1;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: #ff8000;
  }
`;
export const Button = styled.button`
  text-align: center;
  padding: 0.5rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0c041;
  cursor: pointer;
  flex: 1;
  font-size: 1rem;
  &:hover {
    transition: all 0.4s ease-in-out;
  }
`;
