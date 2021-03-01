import React, { Component, useEffect } from "react";
import {TopBar,Form,Input,SearchIcon,Searchbar,AddButtonLink,Wrapper,Heading,Total,Span
  ,Grid_item_heading,Container,Grid_item

} from "./styled";
import ButtonText from "../../../components/ButtonText/ButtonText";
import allActions from "../../../redux/action";
import { FaPen, FaTrashAlt,FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
const CustomerList = ()=>{
   const customers = useSelector(state=>state.customer.employees)
    return (
      <div>
        <div>
          <TopBar>
            <Form>
            
              <Input
                // value={this.state.input}
                // onChange={this.handleInput}
                // placeholder="Search.."
              />
              <SearchIcon><FaSearch color="white"/></SearchIcon>
            </Form>

            <Searchbar>
              <AddButtonLink to="/create/:id">
                <ButtonText style={{ height: '40px', width: 120 }}>
                  Add Customer
                </ButtonText>
              </AddButtonLink>
            </Searchbar>
          </TopBar>
        </div>

        <Wrapper>
          <Total>
            <Heading>
              Customers{" "}
              <Span>
                {customers && customers.length}
              </Span>
            </Heading>
          </Total>
          <Container>
            <Grid_item_heading>First Name</Grid_item_heading>
            <Grid_item_heading>Last Name</Grid_item_heading>
            <Grid_item_heading>Email</Grid_item_heading>
            <Grid_item_heading>Phone</Grid_item_heading>
            <Grid_item_heading>Address</Grid_item_heading>
            <Grid_item_heading>Company</Grid_item_heading>
            <Grid_item_heading>Action</Grid_item_heading>
            {customers &&
              customers.map((item, index) => (
                <>
                  <Grid_item key={item.id}>
                    {item.fname}
                  </Grid_item>
                  <Grid_item>{item.lname}</Grid_item>
                  <Grid_item>{item.email}</Grid_item>
                  <Grid_item>{item.phone}</Grid_item>
                  <Grid_item>{item.address}</Grid_item>

                  <Grid_item>{item.company}</Grid_item>
                  <Grid_item>
                    <Link to={`/create/${item.id}`}>
                      <FaPen color="green" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;{" "}
                    <Link to="/customer">
                      <FaTrashAlt
                        color="red"
                        onClick={() => this.deleteCustomer(item.id)}
                      />
                    </Link>
                  </Grid_item>
                </>
              ))}
          </Container>
        </Wrapper>
      </div>
    );
  }

export default CustomerList