import React, { Component } from "react";
import * as customer from "./Customer.style";
import ButtonText from '../../components/ButtonText/ButtonText'
export default class Customer extends Component {
  render() {
    return (
      <customer.Container>
        <customer.Title>Customer Information</customer.Title>
        <customer.Form>
          <customer.InputContainer>
            <customer.Label>First Name :</customer.Label>
            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Last Name :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Email :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Phone :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Address :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>City :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>State :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Zip Code :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Country :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Company :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Comments :</customer.Label>

            <customer.Input />
          </customer.InputContainer>
          <customer.Button>
          <ButtonText children="Submit">Submit</ButtonText>
          </customer.Button>
         
        </customer.Form>
      </customer.Container>
    );
  }
}
