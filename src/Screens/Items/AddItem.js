import React, { Component } from "react";
import * as customer from "./Customer.style";
import { AddCustomer ,getCustomer} from "../../action/customer";
import { connect } from "react-redux";
import { generateId } from "../../utils/generateId";
import {useParams} from 'react-router-dom'

import ButtonText from "../../components/ButtonText/ButtonText";
class Customer extends Component {
  state = {
    id: "",
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
  };
  componentDidMount(){
    this.props.getCustomer()
  }
  handleInput = (e) => {
   
      this.setState({
        error:'please enter number'
      })
    
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    
    const order = {
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
      store:this.state.store,
      credit:this.state.credit,
    };
    if (order) {
      this.props.AddCustomer(order);
      this.clearData();
    }
  };
  clearData = () => {
    this.setState({
      id: 0,
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      state:'',
      city: '',
      zip: '',
      country: '',
      company: '',
      comments: '',
      store:'',
      credit:'',
    });
  };
  updateData = ()=>{
    const data = this.props.customers.filter(c=>c.id===this.props.match.params.id)
    return data;
  }
  render() {
   console.log(this.props)    
    return (
      
      <customer.Container>
       
    <customer.Title>Customer Information {JSON.stringify(this.updateData)}</customer.Title>
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
              onClick={this.createOrder}
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


export default connect(mapStateToProps, { AddCustomer, getCustomer})(Customer);
