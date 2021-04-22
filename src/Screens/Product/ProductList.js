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
  Cross
} from "./styled";
import ButtonText from "../../components/ButtonText/ButtonText";
import allActions from "../../redux/action";
import { FaPen, FaTrashAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Categories, Product } from "../../redux/selector";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../../images/toys.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
const ProductList = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState(null);
  // get reducer name by selector
  const categoryList = useSelector(Categories);
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
          return c.pro_name.toLowerCase().includes(search.toLowerCase());
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
            <AddButtonLink to="/addproduct/id">
              <ButtonText style={{ height: "47px", width: 120 }}>
                Add Product
              </ButtonText>

            </AddButtonLink>
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
          <table id="customers" width="100%">
            <tr>
              <th width="10%">Sr No</th>
              <th width="10%">Image</th>
              <th width="10%">Product Name</th>
              <th width="10%">Product Code</th>
              <th width="10%">Brand</th>
              <th width="10%">Category</th>
              <th width="10%">Alert Quantity</th>
              <th width="10%">Unit</th>
              <th width="10%">Price</th>
              <th width="10%">Action</th>
            </tr>
            {showingContacts &&
              showingContacts.map((product, index) => (
                <Fade bottom cascade>
                  <tr>
                    <td key={product.id} width="10%" onClick={() => OpenModal(product)}>
                      {index + 1}
                    </td>
                    <td width="10%" onClick={() => OpenModal(product)}>
                      <img src={avatar} alt="" />
                    </td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.pro_name}</td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.code}</td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.brand}</td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.category}</td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.quantity}</td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.product_unit}</td>
                    <td width="10%" onClick={() => OpenModal(product)}>{product.price}</td>
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
            <Modal
              isOpen={true}
              onRequestClose={closeModal}
              transparent={true}
              centered
              initWidth={800} 
              initHeight={300}
            >
              <Zoom>
                <Cross>
                  <button onClick={closeModal}>X</button>
                </Cross>
                <ProductDetail>
                  <ProductImage>
                    <Img src={avatar} alt="" />
                  </ProductImage>

                  <DetailSection>
                    <Details>
                      <ProductInfo>
                        <ProductContent >
                          <ProductHeadingSection className="left-text">
                            <PragraphHeading>Product Name : </PragraphHeading>
                            <PragraphHeading>Product Code : </PragraphHeading>
                            <PragraphHeading>Brand :</PragraphHeading>
                            <PragraphHeading>Category : </PragraphHeading>
                            <PragraphHeading>Unit : </PragraphHeading>
                            <PragraphHeading>Price : </PragraphHeading>
                            <PragraphHeading>Cost : </PragraphHeading>
                            <PragraphHeading>Product Tax : </PragraphHeading>
                            <PragraphHeading>Tax Method : </PragraphHeading>
                            <PragraphHeading>Alert Quantity : </PragraphHeading>
                            <PragraphHeading> Product Details :</PragraphHeading>
                          </ProductHeadingSection>
                          <ProductValueSection className="right-text">
                            <PragraphValue> {product.pro_name}</PragraphValue>
                            <PragraphValue> {product.code}</PragraphValue>
                            <PragraphValue> {product.brand}</PragraphValue>
                            <PragraphValue> {product.quantity}</PragraphValue>
                            <PragraphValue> {product.product_unit? product.product_unit : ''}</PragraphValue>
                            <PragraphValue> {product.price ? product.price :''}</PragraphValue>
                            <PragraphValue> {product.cost}</PragraphValue>
                            <PragraphValue> {product.tax_method}</PragraphValue>
                            <PragraphValue> {product.pro_tax}</PragraphValue>
                            <PragraphValue> {product.quantity}</PragraphValue>
                            <PragraphValue> {product.details}</PragraphValue>
                          </ProductValueSection>
                        </ProductContent>
                      </ProductInfo>
                    </Details>
                  </DetailSection>
                </ProductDetail>
              </Zoom>
            </Modal>
          )}
        </Container>
      </WrapperList>
    </WrapperCat>
  );
};

export default ProductList;
