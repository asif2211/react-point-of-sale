import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "main" "main" "main";
  grid-template-rows: 1.5rem 1fr 1.5rem;
  grid-template-columns: 1fr;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
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
  background-color: #fff;
  flex: 0 1 20rem;
  height: 30rem;
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
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  border: 0.1rem dashed #ccc;
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
export const Button = styled.button`
  text-align: center;
  padding: 0.5rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0c041;
  cursor: pointer;
  flex: 1;
  font-size: 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
