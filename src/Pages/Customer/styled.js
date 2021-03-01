import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  background: #ffffff;
  padding: 30px;
  border-top: 3px solid rgb(59, 141, 188);
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border-radius: 3px;
  align-content:center;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(59, 141, 188);
  text-transform: uppercase;
  text-align: center;
  
`;
export const Form = styled.form`
  width: 80%;
  align-items:center;
  align-content:center;
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
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
