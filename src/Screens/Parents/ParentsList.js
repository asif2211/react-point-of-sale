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
  CustomerWrapper,
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ParentsSelector } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";

const ParentsList = () => {
  const [search, setSearch] = useState("");

  // get reducer name by selector
  const parentList = useSelector(ParentsSelector);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const DeleteCustomer = (id) => {
    dispatch(allActions.parent.DeleteParents(id));
  };
  // for searching where when condition is true.
  const showingContacts =
    search === ""
      ? parentList.parent
      : parentList.parent.filter((c) => {
          return c.parentName.toLowerCase().includes(search.toLowerCase());
        });

  return (
    <CustomerWrapper>
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
            <AddButtonLink to="/parents/id">
              <ButtonText style={{ height: "47px", width: 120 }}>
                Add Parents
              </ButtonText>
            </AddButtonLink>
          </Searchbar>
        </TopBar>
      </div>
      <WrapperList>
        <Total>
          <Heading>
            Parents{" "}
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
              <th>Parents Name</th>

              <th>Action</th>
            </tr>
            {showingContacts &&
              showingContacts.map((item, index) => {
                if (index <= 9)
                  return (
                    <tr>
                      <td key={item.id}>{index + 1}</td>
                      <td>{item.parentName}</td>
                      <td>
                        <Link to="/customer">
                          <FaTrashAlt
                            color="red"
                            onClick={() => DeleteCustomer(item.id)}
                          />
                        </Link>{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={`/create/${item.id}`}>
                          <FaPen color="green" />
                        </Link>
                      </td>
                    </tr>
                  );
              })}
          </table>
        </Container>
      </WrapperList>
    </CustomerWrapper>
  );
};

export default ParentsList;
