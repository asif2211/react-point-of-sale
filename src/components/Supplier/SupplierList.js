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
  WrapperCat,
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Suppliers } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";

const SupplierList = () => {
  const [search, setSearch] = useState("");
  // get reducer name by selector
  const supplier_list = useSelector(Suppliers);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const handleDelete = (id) => {
    dispatch(allActions.supplier.DeleteSupplier(id));
    
  };
  // for searching where when condition is true.
  const showingContacts =
    search === ""
      ? supplier_list.supplier
      : supplier_list.supplier.filter((c) => {
          return (
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.name.toLowerCase().includes(search.toLowerCase())
          );
        });
  return (
    <WrapperCat>
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
            <AddButtonLink to="/addsupplier/id">
              <ButtonText style={{ height: "47px", width: 120 }}>
                Add Supplier
              </ButtonText>
            </AddButtonLink>
          </Searchbar>
        </TopBar>
      </div>
      <WrapperList>
        <Total>
          <Heading>
            Suppliers{" "}
            {showingContacts && showingContacts.length ? (
              <Span>{showingContacts && showingContacts.length}</Span>
            ) : (
              ""
            )}
          </Heading>
        </Total>
        <Container>
        <ItemHeading>Sr No</ItemHeading>
          <ItemHeading></ItemHeading>
          <ItemHeading></ItemHeading>
          <ItemHeading>Name</ItemHeading>
          <ItemHeading></ItemHeading>
          <ItemHeading></ItemHeading>
          <ItemHeading></ItemHeading>
          <ItemHeading>Action</ItemHeading>

          {showingContacts &&
            showingContacts.map((item, index) => (
              <>
                <ItemData key={item.name}>{index + 1}</ItemData>
                <ItemData></ItemData>
                <ItemData></ItemData>
                <ItemData>{item.name}</ItemData>
                <ItemData></ItemData>
                <ItemData></ItemData>
                <ItemData></ItemData>
                <ItemData>
                  <Link to={`/addsupplier/${item.id}`}>
                    <FaPen color="green" />
                  </Link>
                  &nbsp;&nbsp;&nbsp;{" "}
                  <Link to="/supplier">
                    <FaTrashAlt
                      color="red"
                      onClick={() => handleDelete(item.id)}
                    />
                  </Link>
                </ItemData>
                
              </>
            ))}
            
        </Container>
      </WrapperList>
    </WrapperCat>
  );
};

export default SupplierList;
