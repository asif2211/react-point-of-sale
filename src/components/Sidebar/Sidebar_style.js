import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  grid-area:sidebar;
  background-image: url(${(props) => props.backgroundImage});
  color: white;
  border-radius:0px 5px;
  @media (max-width: 800px) {
    flex-direction: column;
    border-bottom: none;
    max-width: 280px;
    min-width: 80px;
  }
`;
export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
`;
export const sidebarHeader = styled.h3`
  margin:20px;
`;
export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  margin-left: 30px;
  margin-bottom: 10px;
  font-family: "Pappins", "san-serif";
  font-size: 12px;
  width:8rem;
  &:hover {
  padding:5px 0px 0px 5px;
  background-color: rgb(21, 41, 132);
  transition: transform .2s; /* Animation */
    
  }
   @media (max-width: 850px) {
    flex-direction: column;
    width: 50%;
    border-bottom: none;
    font-size: 10px;
  }
`;
export const menuContainer = styled.div``;
export const Icon = styled.div`
  flex: .8;
  justify-content:center;
  align-items:center;
  margin-bottom: 10px;
  color: ${(p) => (p.isselected ? "rgba(225,225,225)" : "rgba(135, 152, 219)")};
`;
export const Text = styled.div`
  color: ${(p) => (p.isselected ? "rgba(225,225,225)" : "rgba(135, 152, 219)")};
  text-align: left;
  flex: 4;
  justify-content:center;
  align-items:center;
  margin-bottom: 10px;
  
`;
