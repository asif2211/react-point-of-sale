import React, { useState, useRef } from "react";
import {
  TopBar,
  FormList,
  InputList,
  SearchIcon,
  Searchbar,
  WrapperList,
  Heading,
  Total,
  Span,
  Container,
  WrapperCat,
  ProductDetail,
  Img,
  Details,
  DetailSection,
  ProductInfo,
  ProductContent,
  ProductValueSection,
  PragraphValue,
  Cross,
  ModalPopup,
  Buttons,
  Printbutton,
  
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Adjustment } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../../images/toys.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import ReactToPrint from "react-to-print";
const AdjustmentList = () => {
  const componentRef = useRef();
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState(null);
  // get reducer name by selector
  const adjustmentList = useSelector(Adjustment);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const handleDelete = (id) => {
    dispatch(allActions.product.DeleteProduct(id));
  };
  //modal
  const OpenModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(null);
  };
  // for searching where when condition is true.
  const showingContacts =
    search === ""
      ? adjustmentList.adjustment
      : adjustmentList.adjustment.filter((c) => {
          return c.reference.toLowerCase().includes(search.toLowerCase())|| c.product.toLowerCase().includes(search.toLowerCase());
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
            
          </Searchbar>
          
        </TopBar>
      </div>
      <WrapperList>
        <Total>
          <Heading>
            Adjustment{" "}
            {showingContacts && showingContacts.length ? (
              <Span>{showingContacts && showingContacts.length}</Span>
            ) : (
              ""
            )}
          </Heading>
        </Total>
        <Container>
          <table id="customers" width="100%" ref={componentRef}>
            <tr>
              <th width="10%">Sr No</th>
              <th width="15%">Date</th>
              <th width="15%">Reference</th>
              <th width="15%">Warehouse</th>
              <th width="15%">Product</th>
              <th width="15%">Note</th>
              <th width="30%">Action</th>
            </tr>
            {showingContacts &&
              showingContacts.map((adjustment, index) => (
                <Fade bottom cascade>
                  <tr>
                    <td
                      key={adjustment.id}
                      width="10%"
                      onClick={() => OpenModal(adjustment)}
                    >
                      {index + 1}
                    </td>

                    <td width="20%">
                      {adjustment.date}
                    </td>
                    <td width="20%">
                      {adjustment.reference}
                    </td>
                    <td width="10%">
                      {adjustment.warehouse}
                    </td>
                    <td width="10%">{adjustment.product}</td>
                    <td width="10%">{adjustment.note}</td>
                    <td width="15%">
                      <Link>
                        <FaTrashAlt
                          color="red"
                          onClick={() => handleDelete(adjustment.id)}
                        />
                      </Link>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to={`/addcategory/${adjustment.id}`}>
                        <FaPen color="green" />
                      </Link>
                    </td>
                  </tr>
                </Fade>
              ))}
          </table>
        </Container>
      </WrapperList>
    </WrapperCat>
  );
};

export default AdjustmentList;
