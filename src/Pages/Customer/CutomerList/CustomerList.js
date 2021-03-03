import React, { useState } from "react";
import {
  TopBar,
  Form,
  Input,
  SearchIcon,
  Searchbar,
  AddButtonLink,
  Wrapper,
  Heading,
  Total,
  Span,
  ItemHeading,
  Container,
  ItemData,
} from "./styled";
import ButtonText from "../../../components/ButtonText/ButtonText";
import allActions from "../../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Customers } from "../../../redux/selector";
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
    <div>
      <div>
        <TopBar>
          <Form>
            <Input
              type="text"
              name="firstName"
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon>
              <FaSearch color="white" />
            </SearchIcon>
          </Form>

          <Searchbar>
            <AddButtonLink to="/create">
              <ButtonText style={{ height: "40px", width: 120 }}>
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
            {showingContacts.length > 0? (
              <Span>{showingContacts  && showingContacts.length}</Span>
            ) : (
              ""
            )}
          </Heading>
        </Total>
        <Container>
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
                <ItemData key={Math.random()} >{item.fname}</ItemData>
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
      </Wrapper>
    </div>
  );
};

export default CustomerList;
