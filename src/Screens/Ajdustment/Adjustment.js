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
import { Product } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../../images/toys.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import ReactToPrint from "react-to-print";
const Adjustment = () => {
  const componentRef = useRef();
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState(null);
  // get reducer name by selector
  const Productlist = useSelector(Product);
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
    // search === ""
    //   ? Productlist.product
    //   : Productlist.product.filter((c) => {
    //       return c.pro_name.toLowerCase().includes(search.toLowerCase());
    //     });
    search === ""
      ? ""
      : Productlist.product.filter((c) => {
          return c.code.toLowerCase().includes(search.toLowerCase());
        });

  return (
    <WrapperCat>
      <div>
        <TopBar>
          <FormList>
            <InputList
              label="enter product code "
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
            Product{" "}
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
              <th width="10%">Product Name</th>
              <th width="10%"></th>
              <th width="10%">Product Code</th>
              <th width="10%"></th>
              <th width="10%">Quantity</th>
              <th width="10%">Action</th>
            </tr>
            {showingContacts &&
              showingContacts.map((product, index) => (
                <Fade bottom cascade>
                  <tr>
                    <td
                      key={product.id}
                      width="10%"
                      onClick={() => OpenModal(product)}
                    >
                      {index + 1}
                    </td>

                    <td width="10%" onClick={() => OpenModal(product)}>
                      {product.pro_name}
                    </td>
                    <td width="10%" onClick={() => OpenModal(product)}></td>
                    <td width="10%" onClick={() => OpenModal(product)}>
                      {product.code}
                    </td>
                    <td width="10%" onClick={() => OpenModal(product)}></td>
                    <td width="10%" onClick={() => OpenModal(product)}>
                      {product.quantity}
                    </td>
                    <td>
                      <Link>
                        <FaTrashAlt
                          color="red"
                          onClick={() => handleDelete(product.id)}
                        />
                      </Link>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to={`/addcategory/${product.id}`}>
                        <FaPen color="green" />
                      </Link>
                    </td>
                  </tr>
                </Fade>
              ))}
          </table>
          {product && (
            <ModalPopup
              isOpen={true}
              onRequestClose={closeModal}
              transparent={true}
              centered
              initWidth={800}
              initHeight={300}
            >
              <Zoom>
                <Buttons>
                <Cross>
                      <button onClick={closeModal}>X</button>
                    </Cross>
                  <Printbutton>
                    <ReactToPrint
                      trigger={() => (
                        <ButtonText
                          style={{
                            height: "30px",
                            width: 120,
                            backgroundColor: "rgb(34, 150, 243)",
                          }}
                        >
                          Print Barcode!
                        </ButtonText>
                      )}
                      content={() => componentRef.current}
                    />
                  </Printbutton>
                </Buttons>
                <ProductDetail>
                  <DetailSection>
                    <Details>
                      <ProductInfo>
                        <ProductContent>
                          <ProductValueSection
                            className="right-text"
                            ref={componentRef}
                          >
                            <PragraphValue> {product.pro_name}</PragraphValue>
                            <PragraphValue>
                              {" "}
                              <Img src={avatar} alt="" />
                            </PragraphValue>
                            <PragraphValue>
                              Price : {product.price}
                            </PragraphValue>
                          </ProductValueSection>
                        </ProductContent>
                      </ProductInfo>
                    </Details>
                  </DetailSection>
                </ProductDetail>
              </Zoom>
            </ModalPopup>
          )}
        </Container>
      </WrapperList>
    </WrapperCat>
  );
};

export default Adjustment;
