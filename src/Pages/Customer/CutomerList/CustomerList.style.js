import styled from "styled-components";
import {Link as link} from 'react-router-dom'
export const wrapper = styled.div`
  margin-left: 1px;
  margin-top: 20px;
  border-left:1px solid #d5dbd9;
  border-right:1px solid #d5dbd9;
  padding-right:10px;
`;
export const Searchbar = styled.div`
  
  border-left:1px solid #d5dbd9;
  border-right:1px solid #d5dbd9;
  padding-right:10px;
`;
export const AddButtonLink = styled(link)`
  text-decoration:none;
`;
export const Span = styled.span`
  background: #489ee7;
  border-radius: 50%;
  padding: 5px;
  color: #fff;
  font-size: 14px;
  margin:10px;
`;
export const Heading = styled.h1`
  background-color: #f9f9f9;
  border: 0.1px solid #d5dbd9;;
  padding: 10px;
  font-size: 20px;
  text-align: left;
  outline: none;
  display:flex;
  justify-content:start;
  align-items:center;
  transition: all 0.3s ease;
  color: #757575;
  height: 5vh;
  margin-top: 0;
`;
export const topBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10px;
  flex-direction:row;
  background-color: #fff;
  padding: 4px;
  font-size: 14px;
  text-align: left;
  outline: none;
  border-left: 0.1px solid #d5dbd9;
  border-right: 0.1px solid #d5dbd9;
  border-bottom: 0.1px solid #d5dbd9;
  transition: all 0.3s ease;
  color: #757575;
  height: 10vh;
  border-radius: 5px;
  @media (max-width: 500px) {
   font-size:10px;
   display:flex;
   justify-content:center;
   flex-direction:row;
   width:100%;
  }
`;
export const Input = styled.input`
  width: 80%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 4px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
  background: #f9f9f9;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  width: 100%;
  border-right:1px solid #d5dbd9;
  @media (max-width: 800px) {
    grid-template-columns: auto;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
    height: 100vh;
  }
`;
export const Grid_item_heading = styled.div`
  background-color: rgba(255, 255, 255, 225);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 4px;
  font-size: 14px;
  text-align: center;
  outline: none;
  border-top: 0.1px solid #d5dbd9;
  border-left: none;
  border-right: none;
  border-bottom: none;
  transition: all 0.3s ease;
  color: #757575;
  height: 5vh;
`;
export const Grid_item = styled.div`
  outline: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: #000;
  border-top: 0.1px solid #d5dbd9;
  border-left: none;
  border-right: none;
  border-bottom: 0.1px solid #d5dbd9;
`;
