import React, { useState } from "react";
import {
  TopBar,
  FormList,
  InputList,
  SearchIcon,
  Searchbar,
  AddButtonLink,
  WrapperList,
  Heading,
  Total,
  Span,
  ItemHeading,
  Container,
  ItemData,
  Customer_Wrapper
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Customers } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";

const CustomerList = () => {
  const [search, setSearch] = useState("");
  // get reducer name by selector
  const customerList = useSelector(Customers);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const DeleteCustomer = (id) => {
    dispatch(allActions.customer.DeleteCustomer(id));
  };
  // for searching where when condition is true.
  const showingContacts =
    search === ""
      ? customerList.customers
      : customerList.customers.filter((c) => {
          return (
            c.fname.toLowerCase().includes(search.toLowerCase()) ||
            c.lname.toLowerCase().includes(search.toLowerCase())
          );
        });
  return (
    <Customer_Wrapper>
      <div>
        <TopBar>
          <FormList>
            <InputList
            
            label = "Search"
            size = "small"
            variant = "filled"
              type="text"
              name="firstName"
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon>
              <FaSearch color="white" />
            </SearchIcon>
          </FormList>
          <Searchbar>
            <AddButtonLink to="/create/id">
              <ButtonText style={{ height: "47px", width: 120 }}>
                Add Customer
              </ButtonText>
            </AddButtonLink>
          </Searchbar>
        </TopBar>
      </div>  
      <WrapperList>
        <Total>
          <Heading>
            Customers{" "}
            {showingContacts && showingContacts.length? (
              <Span>{showingContacts  && showingContacts.length}</Span>
            ) : (
              ""
            )}
          </Heading>
        </Total>
        <Container>
        <ItemHeading>Sr No</ItemHeading>
          <ItemHeading>First Name</ItemHeading>
          <ItemHeading>Last Name</ItemHeading>
          <ItemHeading>Email</ItemHeading>
          <ItemHeading>PHone</ItemHeading>
          <ItemHeading>Address</ItemHeading>
          <ItemHeading>Company</ItemHeading>
          <ItemHeading>Action</ItemHeading>
          {showingContacts &&
            showingContacts.map((item, index) => (
              <>
              <ItemData key={item.id} >{index+1}</ItemData>
                <ItemData key={item.name} >{item.fname}</ItemData>
                <ItemData>{item.lname}</ItemData>
                <ItemData>{item.email}</ItemData>
                <ItemData>{item.phone}</ItemData>
                <ItemData>{item.address}</ItemData>

                <ItemData>{item.company}</ItemData>
                <ItemData>
                  <Link to={`/create/${item.id}`}>
                    <FaPen color="green" />
                  </Link>
                  &nbsp;&nbsp;&nbsp;{" "}
                  <Link to="/customer">
                    <FaTrashAlt
                      color="red"
                      onClick={() => DeleteCustomer(item.id)}
                    />
                  </Link>
                </ItemData>
             </>
            ))}
        </Container>
      </WrapperList>
    </Customer_Wrapper>
  );
};

export default CustomerList;
