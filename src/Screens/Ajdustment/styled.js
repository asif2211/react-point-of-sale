import styled from "styled-components";
import Modal from "react-modal";
import { Link as link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
export const WrapperCat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 5%;
  position: absolute;
  z-index: -10;
  height: 100%;
`;

export const WrapperList = styled.div`
  margin-left: 1px;
  margin-top: 20px;
  padding-right: 10px;
  width: 70%;
`;

export const Buttons = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:row;
 
`;
export const Printbutton = styled.div`
 flex:1;
 justify-content:center;
 margin:1rem;
`;
export const CrossButton = styled.div`
  
  justify-content:center;
`;
export const ModalPopup = styled(Modal)`
  width: 200px;
  background: #fff;
  border-radius: 5px;
  min-width: 500px;
  position: relative;
  top:10%;
  left:20%;
  bottom:10%;
  height:300px;
  background-color:#f5f5f5;
  outline: none;
`;
export const InputField = styled.input`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
export const TextArea = styled.textarea`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  height:100px;
`;
export const Select = styled.select`
   width: 60%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  height:40px;
  border:1px solid #BFBFBF;
  background-color:#fff;
  box-sizing: border-box;
`;
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  font-size: 12px;
  

`;
export const ProductImage = styled.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  flex:0 1 20rem;
  width:40rem;
  
`;
export const Img = styled.img`
  width: 100px;
  height: 10vh;
  
  

`;
export const DetailSection = styled.div`
  width: 60%;
  margin-left: 30%;
  min-height: 100vh;
  background-image: url("../images/dots.svg");
  display: grid;
  position: relative;
  margin-top:.5rem;
  flex:2;
  width:40rem;
`;
export const Details = styled.div`
  display: flex;
  justify-content:center;
`;
export const Cross = styled.div`
  flex:2;
  justify-content:center;
 margin:1rem;
`;
export const ProductInfo = styled.div`
  margin-left:2rem;
  display:flex;
  flex-direction:row;

`;
export const ProductHeadingSection = styled.div`
  margin-right:4rem;
  flex:1;
  width:5rem;
  
`;
export const ProductValueSection = styled.div`
  margin-left:4rem;
  flex:2;
  width:30rem;
`;
export const PragraphHeading = styled.div`
  font-size:14px;
  font-weight:bold;
  margin-bottom:1rem;
  color:#757575;
  width:150px;
`;
export const PragraphValue = styled.div`
  font-size:14px;
  margin-bottom:1rem;
  color:#757575;
  width:100%;
`;
export const ProductContent = styled.div`
  margin-left:2rem;
  display:flex;
  flex-direction:row;
  justify-content:center;

`;
export const Searchbar = styled.div`
  
`;
export const AddButtonLink = styled(link)`
  text-decoration: none;
`;
export const Span = styled.span`
  background: #489ee7;
  border-radius: 0.25em;
  padding: 5px;
  color: #fff;
  font-size: 14px;
  margin: 10px;
  width: 20px;
  display: flex;
  justify-content: center;
`;
export const Total = styled.div`
  
  width: 98%;
  margin: 10px;
  @media (max-width: 800px) {
    font-size: 10px;
    display: flex;
    justify-content: center;
  }
`;
export const Heading = styled.h1`
  background-color: #fff;
  border-top: 3px solid rgb(59, 141, 188);
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border-radius: 3px;
  padding: 10px;
  font-size: 20px;
  text-align: left;
  outline: none;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: all 0.3s ease;
  color: #757575;
  height: 5vh;
  width: 98%;
`;
export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 25px;
  height: 10vh;
  border-radius: 3px;
  @media (max-width: 800px) {
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;
export const InputList = styled(TextField)`
  @media (max-width: 400px) {
    width: 75px;
    height: 46px;
  }
`;
export const FormList = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const SearchIcon = styled.span`
  margin: 0px;
  width: 50px;
  height: 48px;
  background: rgb(22, 47, 127);
  position: relative;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  display: table-cell;
  line-height: 50px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin-right: 10px;
`;
export const Container = styled.div`
  width: 98%;
  margin: 10px;
`;
export const ItemHeading = styled.div`
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
  line-height: 30px;
  width: 100%;
`;
export const ItemData = styled.div`
  outline: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: rgb(77, 114, 127);
  border-top: 0.1px solid #d5dbd9;
  border-left: none;
  border-right: none;
  border-bottom: 0.1px solid #d5dbd9;
  width: 91%;
`;