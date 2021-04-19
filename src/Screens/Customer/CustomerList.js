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
  Customer_Wrapper,
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
              label="Search"
              size="small"
              variant="filled"
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
            {showingContacts && showingContacts.length ? (
              <Span>{showingContacts && showingContacts.length}</Span>
            ) : (
              ""
            )}
          </Heading>
        </Total>
        <Container>
          <table id="customers">
            <tr>
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
            {showingContacts &&
              showingContacts.map((item, index) => (
                <tr>
                  <td key={item.id}>{index+1}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.company}</td>
                  <td>
                  <Link to="/customer">
                    <FaTrashAlt
                      color="red"
                      onClick={() => DeleteCustomer(item.id)}
                    />
                  </Link>
                  /{"  "}
                  <Link to={`/create/${item.id}`}>
                    <FaPen color="green" />
                  </Link>
                  
                  </td>
                </tr>
              ))}
          </table>
        </Container>
      </WrapperList>
    </Customer_Wrapper>
  );
};

export default CustomerList;
