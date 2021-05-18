import styled from "styled-components";
import { Link as link } from "react-router-dom";
import Modal from "react-modal";
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
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const RefreshButton = styled.div`
  width: 10%;
  height: 41px;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  box-sizing: border-box;
  margin-left: 0.2rem;
  text-align: center;
  line-height: 3.5rem;
  border-radius: 0.2rem 0.2rem;
  &:hover {
    background-color: #f5f5f5;
  }
`;
export const Printbutton = styled.div`
  flex: 1;
  justify-content: center;
  margin: 1rem;
`;
export const Cross = styled.div`
  flex: 1;
  justify-content: center;
  margin: 1rem;
`;

export const ModalPopup = styled(Modal)`
  width: 90%;
  border-radius: 5px;
  min-width: 500px;
  margin-top: 6rem;
  margin-left: 6rem;
  margin-bottom: 10rem;
  margin-right: 6rem;
  height: 560px;
  background-color: #f5f5f5;
  border: 1px solid #757575;
  outline: none;
`;

export const WrapperList = styled.div`
  margin-left: 1px;
  margin-top: 20px;
  padding-right: 10px;
  width: 70%;
`;
export const InputField = styled.input`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  border-radius: 0.2rem 0.2rem;
`;
export const TextArea = styled.textarea`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  border-radius: 0.2rem 0.2rem;
  height: 100px;
`;
export const Select = styled.select`
  width: 60%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  height: 50px;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  box-sizing: border-box;
`;
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  width: 100%;
`;
export const ProductImage = styled.div`
  width: 30%;
  margin-top: 1rem;
`;
export const Img = styled.img`
  float: left;
  width: 200px;
  height: 200px;
`;
export const DetailSection = styled.div`
  width: 80%;
`;
export const Details = styled.div`
  display: flex;
`;

export const ProductInfo = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
`;
export const ProductHeadingSection = styled.div`
  margin-right: 4rem;
  width: 5rem;
`;
export const ProductValueSection = styled.div`
  margin-left: 4rem;
  width: 10rem;
`;
export const PragraphHeading = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #757575;
  width: 150px;
`;
export const PragraphValue = styled.div`
  font-size: 14px;
  margin-bottom: 1rem;
  color: #757575;
  width: 100%;
`;
export const ProductContent = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  margin-top: 1rem;
`;
export const Searchbar = styled.div``;
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

// Product Styled
export const Wrapper = styled.div`
  margin-top: 23rem;
  height: 177vh;
  background: #ffffff;
  border-top: 3px solid rgb(59, 141, 188);
  box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
  border-radius: 3px;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: -4;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 20px;
  color: rgb(59, 141, 188);
  text-transform: uppercase;
  text-align: center;
`;
export const Form = styled.form`
  width: 100%;
  align-items: center;
  align-content: center;
`;
export const Label = styled.label`
  width: 200px;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
export const Input = styled.input`
  width: 80%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 12px;
  padding: 8px 10px;

  border-radius: 3px;
  transition: all 0.3s ease;
  color: gray;
  background-color: transparent;
`;
export const Comments = styled.textarea`
  width: 82%;
  padding: 10px;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 12px;
  border-radius: 3px;
  transition: all 0.3s ease;
  background-color: transparent;
  color: gray;
`;
export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
