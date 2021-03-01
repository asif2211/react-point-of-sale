import React, { Component } from "react";
import {Wrapper,Title,Form,Label,Input,Comments,InputContainer,Button} from "./styled";
import allActions  from "../../redux/action";
import { connect } from "react-redux";
import { generateId } from "../../utils/generateId";
import { useParams } from "react-router-dom";

import ButtonText from "../../components/ButtonText/ButtonText";
class Customer extends Component {
  state = {
    id: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    company: "",
    comments: "",
    store: "",
    credit: "",
    error: "",
    data: this.props.customers.filter(
      (c) => c.id == this.props.match.params.id
    ),
  };
  componentDidMount() {
    this.props.allActions.getCustomer();
  }
  componentWillMount() {
    if (this.props.match.params.id) {
      this.setState({
        id: this.state.data[0] && this.state.data[0].id,
        fname: this.state.data[0] && this.state.data[0].fname,
        lname: this.state.data[0] && this.state.data[0].lname,
        email: this.state.data[0] && this.state.data[0].email,
        phone: this.state.data[0] && this.state.data[0].phone,
        address: this.state.data[0] && this.state.data[0].address,
        city: this.state.data[0] && this.state.data[0].city,
        state: this.state.data[0] && this.state.data[0].state,
        zip: this.state.data[0] && this.state.data[0].zip,
        country: this.state.data[0] && this.state.data[0].country,
        company: this.state.data[0] && this.state.data[0].company,
        comments: this.state.data[0] && this.state.data[0].comments,
        store: this.state.data[0] && this.state.data[0].store,
        credit: this.state.data[0] && this.state.data[0].credit,
      });
    }
  }
  handleInput = (e) => {
    this.setState({
      error: "please enter number",
    });

    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.id) {
      const NewData = {
        id: generateId(),
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        country: this.state.country,
        company: this.state.company,
        comments: this.state.comments,
        store: this.state.store,
        credit: this.state.credit,
      };
      if (NewData) {
        this.props.allActions.AddCustomer(NewData);
        this.clearData();
      }
    } else {
      alert(this.state.id);
      alert(this.state.fname);

      const updatedData = {
        id: this.state.id,
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        country: this.state.country,
        company: this.state.company,
        comments: this.state.comments,
        store: this.state.store,
        credit: this.state.credit,
      };
      this.props.allActions.UpdateCutomer(updatedData);
      this.clearData();
    }
  };
  clearData = () => {
    this.setState({
      id: 0,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      city: "",
      zip: "",
      country: "",
      company: "",
      comments: "",
      store: "",
      credit: "",
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Customer Information</Title>
        <Form>
          <InputContainer>
            <Label>First Name :</Label>
            <Input
              name="fname"
              value={this.state.fname}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Last Name :</Label>

            <Input
              name="lname"
              value={this.state.lname}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Email :</Label>

            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Phone :</Label>

            <Input
              placeholder="12345678"
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Address :</Label>

            <Input
              name="address"
              value={this.state.address}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>City :</Label>

            <Input
              name="city"
              value={this.state.city}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>State :</Label>

            <Input
              name="state"
              value={this.state.state}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Zip Code :</Label>

            <Input
              name="zip"
              value={this.state.zip}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Country :</Label>

            <Input
              name="country"
              value={this.state.country}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Company :</Label>

            <Input
              name="company"
              value={this.state.company}
              onChange={this.handleInput}
            />
          </InputContainer>
          <InputContainer>
            <Label>Store Account Balance :</Label>

            <Input
              type="number"
              name="store"
              value={this.state.store}
              onChange={this.handleInput}
              placeholder="0.00"
            />
          </InputContainer>
          <InputContainer>
            <Label>Credit Limit :</Label>

            <Input
              type="number"
              name="credit"
              value={this.state.credit}
              onChange={this.handleInput}
              placeholder="10000.00"
            />
          </InputContainer>
          <InputContainer>
            <Label>Comments :</Label>

            <Comments
              rows="5"
              name="comments"
              value={this.state.comments}
              onChange={this.handleInput}
            />
          </InputContainer>
          <Button>
            <ButtonText
              disabled={this.state.fname === "" || this.state.lname === ""}
              children="Submit"
              onClick={this.handleSubmit}
            >
              Submit
            </ButtonText>
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default Customer;
