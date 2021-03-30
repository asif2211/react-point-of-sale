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
import { Manufacturer } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";

const SupplierList = () => {
  const [search, setSearch] = useState("");
  // get reducer name by selector
  const Manu_list = useSelector(Manufacturer);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const handleDelete = (id) => {
    dispatch(allActions.manufacturer.DeleteManu(id));
    
  };
  // for searching where when condition is true.
  const FilteredData =
    search === ""
      ? Manu_list.manu
      : Manu_list.manu.filter((c) => {
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
              <ButtonText style={{ height: "47px", width: 130 }}>
                Add Manufacturer
              </ButtonText>
            </AddButtonLink>
          </Searchbar>
        </TopBar>
      </div>
      <WrapperList>
        <Total>
          <Heading>
            Manufacturer {" "}
            {FilteredData && FilteredData.length ? (
              <Span>{FilteredData && FilteredData.length}</Span>
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

          {FilteredData &&
            FilteredData.map((item, index) => (
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
