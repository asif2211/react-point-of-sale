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
  Container,
  WrapperCat,
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Categories } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";

const CategoryList = () => {
  const [search, setSearch] = useState("");
  // get reducer name by selector
  const categoryList = useSelector(Categories);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const handleDelete = (id) => {
    dispatch(allActions.category.DeleteCategory(id));
  };
  // for searching where when condition is true.
  const showingContacts = 
  search === ""
    ? categoryList.category
    : categoryList.category.filter((c) => {
        return (
          c.categoryName.toLowerCase().includes(search.toLowerCase())
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
            <AddButtonLink to="/addcategory/id">
              <ButtonText style={{ height: "47px", width: 120 }}>
                Add Category
              </ButtonText>
            </AddButtonLink>
          </Searchbar>
        </TopBar>
      </div>
      <WrapperList>
        <Total>
          <Heading>
            Category{" "}
            {showingContacts && showingContacts.length ? (
              <Span>{showingContacts && showingContacts.length}</Span>
            ) : (
              ""
            )}
          </Heading>
        </Total>
        <Container>
          <table id="customers" width="100%">
            <tr>
              <th>Sr No</th>
              <th>Category Name</th>
              <th>Parent</th>

              <th>Action</th>
            </tr>
            {showingContacts &&
              showingContacts.map((item, index) => (
                <tr>
                  <td key={item.id}>{index + 1}</td>
                  <td>{item.categoryName}</td>
                  <td>{item.parent}</td>

                  <td>
                    <Link to="/customer">
                      <FaTrashAlt
                        color="red"
                        onClick={() => handleDelete(item.id)}
                      />
                    </Link>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/addcategory/${item.id}`}>
                      <FaPen color="green" />
                    </Link>
                  </td>
                </tr>
              ))}
          </table>
                  </Container>
      </WrapperList>
    </WrapperCat>
  );
};

export default CategoryList;
