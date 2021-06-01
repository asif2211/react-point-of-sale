import React, { useState, useRef } from "react";
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
  ProductDetail,
  ProductImage,
  Img,
  Details,
  DetailSection,
  ProductInfo,
  ProductContent,
  ProductHeadingSection,
  ProductValueSection,
  PragraphHeading,
  PragraphValue,
  Cross,
  ModalPopup,
  Buttons,
  Printbutton,
  Description,
  LeftText,
  RightText,
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
import { jsPDF } from "jspdf";
const ProductList = () => {
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
    search === ""
      ? Productlist.product
      : Productlist.product.filter((c) => {
          return c.title.toLowerCase().includes(search.toLowerCase());
        });
  // Default export is a4 paper, portrait, using millimeters for units
  const generatePdfProductList = () => {
    const doc = new jsPDF("p", "pt", "a4");
    // autoTable(doc, { html: "#customers" });
    // doc.save("productlist.pdf");
    doc.html(document.querySelector("#customers"), {
      callback: function (pdf) {
        // const pageCount = doc.internal.getNumberOfPages();
        // pdf.deletePage(pageCount);
        pdf.save("productlist.pdf");
      },
    });
  };
  const generatePdfProduct = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.setFont("Lato-Regular", "small");
    doc.html(document.querySelector("#product"), {
      callback: function (pdf) {
        // const pageCount = doc.internal.getNumberOfPages();
        // pdf.deletePage(pageCount);
        pdf.save("productlist.pdf");
      },
    });
  };
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
            <AddButtonLink to="/addproduct/id">
              <ButtonText style={{ height: "47px", width: 120 }}>
                Add Product
              </ButtonText>
            </AddButtonLink>
          </Searchbar>
          {"   "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <ReactToPrint
            trigger={() => (
              <ButtonText
                style={{
                  height: "47px",
                  width: 200,
                  backgroundColor: "rgb(59, 141, 188)",
                }}
              >
                Print Products!
              </ButtonText>
            )}
            content={() => componentRef.current}
          />
          <ButtonText
            style={{
              height: "47px",
              width: 200,
              marginLeft: 10,
              backgroundColor: "rgb(178, 32, 32)",
            }}
            onClick={generatePdfProductList}
          >
            PDF!
          </ButtonText>
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
            <thead>
              <tr>
                <th width="10%">Sr No</th>
                <th width="10%">Image</th>
                <th width="10%">Product Name</th>
                <th width="10%">Category</th>
                <th width="10%">Price</th>
                <th width="10%">Action</th>
              </tr>
            </thead>
            {showingContacts &&
              showingContacts.map((product, index) => (
                <Fade bottom cascade>
                  <tbody>
                    <tr>
                      <td
                        key={product.id}
                        width="10%"
                        onClick={() => OpenModal(product)}
                      >
                        {index + 1}
                      </td>
                      <td width="10%" onClick={() => OpenModal(product)}>
                        <img
                          src={product.image}
                          alt=""
                          style={{ width: 100, height: 100 }}
                        />
                      </td>
                      <td width="10%" onClick={() => OpenModal(product)}>
                        {product.title}
                      </td>

                      <td width="10%" onClick={() => OpenModal(product)}>
                        {product.category}
                      </td>

                      <td width="10%" onClick={() => OpenModal(product)}>
                        {product.price}
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
                  </tbody>
                </Fade>
              ))}
          </table>
          {product && (
            <ModalPopup
              isOpen={true}
              onRequestClose={closeModal}
              style={{ border: "none" }}
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
                            height: "40px",
                            width: 120,
                            backgroundColor: "rgb(34, 150, 243)",
                          }}
                        >
                          Print Product !
                        </ButtonText>
                      )}
                      content={() => componentRef.current}
                    />
                  </Printbutton>
                  <Cross>
                    <ButtonText
                      style={{
                        height: "40px",
                        width: 120,
                        marginLeft: 10,
                        backgroundColor: "rgb(178, 32, 32)",
                      }}
                      onClick={generatePdfProduct}
                    >
                      PDF!
                    </ButtonText>
                  </Cross>
                </Buttons>
                <ProductDetail ref={componentRef} id="product">
                  <DetailSection>
                    <Details id="product">
                      <ProductInfo>
                        <ProductImage>
                          <Img src={product.image} alt="" />
                        </ProductImage>
                        <ProductContent>
                          <ProductHeadingSection className="left-text">
                            <PragraphHeading>Product Name : </PragraphHeading>
                            <PragraphHeading>Category : </PragraphHeading>
                            <PragraphHeading>Price : </PragraphHeading>
                            <PragraphHeading>Description : </PragraphHeading>
                          </ProductHeadingSection>
                          <ProductValueSection className="right-text">
                            <PragraphValue> {product.title}</PragraphValue>
                            <PragraphValue> {product.category}</PragraphValue>
                            <PragraphValue>
                              {" "}
                              {product.price ? product.price : ""}
                            </PragraphValue>
                            <PragraphValue>
                              {" "}
                              {product.price ? product.description : ""}
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

export default ProductList;
