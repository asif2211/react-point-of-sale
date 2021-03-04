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
  const [inputList, setInputList] = useState();
  const hanleChange  = (e)=>{
    setInputList({
      [e.target.name]:e.target.value
    })
  }

  return (
    <Wrapper>
      <Title>Customer Information</Title>
     
      {InputData.map((x, i) => (
        <InputContainer key={Math.random()}>
         
          <Label> {x.label  }:</Label>
         <Input
         name={x.name}
         value={inputList}
         onChange={hanleChange}/>
         
        </InputContainer>)
      )}

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
