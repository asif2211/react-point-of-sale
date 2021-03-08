import React, { Component } from "react";
import * as customer from "./Customer.style";
import { AddCustomer, getCustomer, UpdateCutomer } from "../../action";
import { connect } from "react-redux";
import { generateId } from "../../utils/generateId";


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
    this.props.getCustomer();
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
        this.props.AddCustomer(NewData);
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
      this.props.UpdateCutomer(updatedData);
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
      <customer.Container>
        <customer.Title>Customer Information</customer.Title>
        <customer.Form>
          <customer.InputContainer>
            <customer.Label>First Name :</customer.Label>
            <customer.Input
              name="fname"
              value={this.state.fname}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Last Name :</customer.Label>

            <customer.Input
              name="lname"
              value={this.state.lname}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Email :</customer.Label>

            <customer.Input
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Phone :</customer.Label>

            <customer.Input
              placeholder="12345678"
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Address :</customer.Label>

            <customer.Input
              name="address"
              value={this.state.address}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>City :</customer.Label>

            <customer.Input
              name="city"
              value={this.state.city}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>State :</customer.Label>

            <customer.Input
              name="state"
              value={this.state.state}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Zip Code :</customer.Label>

            <customer.Input
              name="zip"
              value={this.state.zip}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Country :</customer.Label>

            <customer.Input
              name="country"
              value={this.state.country}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Company :</customer.Label>

            <customer.Input
              name="company"
              value={this.state.company}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Store Account Balance :</customer.Label>

            <customer.Input
              type="number"
              name="store"
              value={this.state.store}
              onChange={this.handleInput}
              placeholder="0.00"
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Credit Limit :</customer.Label>

            <customer.Input
              type="number"
              name="credit"
              value={this.state.credit}
              onChange={this.handleInput}
              placeholder="10000.00"
            />
          </customer.InputContainer>
          <customer.InputContainer>
            <customer.Label>Comments :</customer.Label>

            <customer.comments
              rows="5"
              name="comments"
              value={this.state.comments}
              onChange={this.handleInput}
            />
          </customer.InputContainer>
          <customer.Button>
            <ButtonText
              disabled={this.state.fname === "" || this.state.lname === ""}
              children="Submit"
              onClick={this.handleSubmit}
            >
              Submit
            </ButtonText>
          </customer.Button>
        </customer.Form>
      </customer.Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    customers: state.employees,
  };
};

export default connect(mapStateToProps, {
  AddCustomer,
  getCustomer,
  UpdateCutomer,
})(Customer);
