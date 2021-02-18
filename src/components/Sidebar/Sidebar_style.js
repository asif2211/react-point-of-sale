import styled from "styled-components";
import { Link as link } from "react-router-dom";

export const Container = styled.div`
  grid-area: sidebar;
 height:100%;
 background:#F8F8F8;
 border-radius:3px;
 
`;
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  background: #F8F8F8;
  color: #fff;
`;
export const NavMenu = styled.div`
  background: #373942;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  left:${(p) => (p.sidebar ? '-100%' : "")}; ;
  transition: 850ms;
  border-radius:0px 5px;
  @media (max-width: 800px) {
    font-size:10px;
    width: 100px;
   grid-area:""
  }
  @media (max-width: 400px) {
    font-size:10px;
    width: 100px;
   grid-area:""
  }
`;
export const MenuItem = styled.li`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  padding: 8px 10px 10px 0px;
  list-style: none;

  &:hover {
    
    background: #000;
    border-radius: 10px;
    color: #fff;
  }

 
  
`;
export const MenuLink = styled(link)`
  list-style:none;
  color:transparent;
  text-decoration:none;
  padding:0px 0px 10px 0px;
  
`;

export const Link = styled(link)`
  margin-left: 2rem;
  
  background: none;
  
`;
export const NavMenuItem = styled.ul`
  width: 100%;
  margin-right: 57px;
  @media (max-width: 800px) {
    font-size:10px;
    
  }
`;

export const TooglLink = styled(link)`
  text-align: center;
  color: white;
  padding-left: 20px;
`;

export const menuContainer = styled.div``;
export const iconText = styled.i`
  color: ${(p) => (p.isselected ? "rgb(26, 118, 210)" : "#fff")};
  &:hover {
    color: #fff;
  }
`;
export const Icon = styled.span`
  text-decoration: none;
  color: #fff;
  width: 23%;
  border-radius: 10px;
  padding: 0 10px;
  @media (max-width: 800px) {
    font-size:10px;
    width: 9%;
  }
`;

export const Text = styled.span`
  color: ${(p) => (p.isselected ? "rgb(26, 118, 210)" : "#fff")};
  text-decoration: none;
  font-size:1rem;
  box-sizing:border-box;
  position: relative;
  font-weight:300;
  
  &:hover {
    color: #fff;
  }
  @media (max-width: 800px) {
    font-size:10px;
    width: 20%;
  }
`;
