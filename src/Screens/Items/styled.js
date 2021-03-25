import styled from "styled-components";
import { Link as link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
export const WrapperList = styled.div`
  margin-left: 1px;
  margin-top: 20px;
  border-left: 1px solid #d5dbd9;
  border-right: 1px solid #d5dbd9;
  padding-right: 10px;
`;
export const Searchbar = styled.div`
  border-left: 1px solid #d5dbd9;
  border-right: 1px solid #d5dbd9;
  padding-right: 10px;
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
  width: 97%;
  background-color: #fff;
  border-top: 3px solid rgb(59, 141, 188);
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
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
    width:75px;
    height:46px;

  }
  
`;
export const FormList = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchIcon = styled.span`
  margin: 0px;
  width: 50px;
  height:47px;
  background:rgb(22, 47, 127);
  position: relative;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  display: table-cell;
  line-height: 50px;
  border: 1px solid transparent;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin-right: 10px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  width: 98%;
  margin: 10px;
  border-top: 3px solid rgb(59, 141, 188);
  border-radius: 5px;
  @media (max-width: 800px) {
    grid-template-columns: auto;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
    height: 100vh;
  }
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
`;
// Customer Styled
export const Wrapper = styled.div`

margin:20px;
  background: #ffffff;
  border-top: 3px solid rgb(59, 141, 188);
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border-radius: 3px;
  align-content: center;
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
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:20px;
`;
export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
