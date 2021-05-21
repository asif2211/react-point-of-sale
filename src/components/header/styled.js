import styled from "styled-components";
import { Link as link } from "react-router-dom";
export const Wrapper = styled.div`
  grid-area: header;
  background: rgb(59, 141, 188);
  border-radius: 0px 0px 5px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media (max-width: 800px) {
    flex-direction: row;
    border-bottom: none;
    width: 100%;
  }
`;
export const Link = styled(link)`
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  margin: 10px;
  flex: 0.5;
  color: white;
`;
export const MenuIcon = styled.div`
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  margin: 10px;
  flex: 0.5;
  color: white;
`;
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  background: #373942;
  color: #fff;
`;
export const Logo = styled.h1`
  flex: 2;
  display: flex;
  font-family: cursive;
  justify-content: start;
  color: white;
  font-size: 50px;
  letter-spacing: 4px;
  z-index: -1;
`;
export const Gap = styled.div`
  flex: 3;
  width: 80%;
  text-align: center;
`;
export const Profile = styled.div`
  flex: 2;
  width: 80%;
  text-align: center;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  justify-content: start;
  color: white;
`;
export const Span = styled.span`
  cursor: pointer;
`;
