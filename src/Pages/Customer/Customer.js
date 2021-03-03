import React, { useState } from "react";
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  InputContainer,
  Button,
} from "./styled";

import { InputData } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
const Customer = () => {
  const [inputFields, setInputFields] = useState([
    { firstName:'' },
  ]);
  const handleChangeInput = (index, event) => {
    alert(index)
    event.preventDefault();
    const newInputFields = [...inputFields];
    newInputFields[index][event.target.name] = event.target.values;
    setInputFields(newInputFields);
  }

  console.log(inputFields)
  return (
    <Wrapper>
      <Title>Customer Information</Title>
      
        {inputFields.map((inputFiled,index) => (
          <InputContainer key={Math.random()}>
            <Label> :</Label>
            <Input
              name="name"
              value={inputFiled.firstName}
              onChange={(event) => handleChangeInput(index,event)}
            />
           
          </InputContainer>
          
        ))}

        <Button>
          <ButtonText
            // disabled={this.state.fname === "" || this.state.lname === ""}
            children="Submit"
            // onClick={this.handleSubmit}
          >
            Submit
          </ButtonText>
        </Button>
     
    </Wrapper>
  );
};

export default Customer;
