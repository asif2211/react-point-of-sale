import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Title,
  Form,
  InputContainer,
  Button,
  InputField,
  Select,
  TextArea,
  RefreshButton,
} from "./styled";
import allActions from "../../redux/action";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Categories, ParentsSelector } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
import { LinkButton } from "../../components/LinkButton/styled";
import { BiRefresh } from "react-icons/bi";
const Product = (props) => {
  const [toogle, setToogle] = useState(false);
  const [codechange, setCodeChange] = useState();
  const [inputList, setInputList] = useState({
    id: 0,
    pro_type: "",
    pro_name: "",
    code: "",
    brand: "",
    category: "",
    product_unit: "",
    sale_unit: "",
    purchase_unit: "",
    cost: "",
    price: "",
    quantity: "",
    pro_tax: "",
    tax_method: "",
    details: "",
  });

  //data from selector
  const selector = useSelector(Categories);
  const parentsData = useSelector(ParentsSelector);
  const getDataById = selector.category.filter(
    (c) => c.id === props.match.params.id
  );
  useEffect(
    () => {
      function fetchData() {
        setInputList({
          id: getDataById[0] && getDataById[0].id,
          categoryName: getDataById[0] && getDataById[0].name,
        });
      }
      fetchData();
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    alert(codechange);
    alert(inputList.sale_unit);
    alert(inputList.purchase_unit);
    alert(inputList.pro_tax);
    alert(inputList.tax_method);
    alert(inputList.cost);
    alert(inputList.price);

    if (!inputList.id) {
      const NewData = {
        id: generateId(2, 15),
        pro_type: inputList.pro_type,
        pro_name: inputList.pro_name,
        code: codechange,
        brand: inputList.brand,
        category: inputList.category,
        quantity: inputList.quantity,
        cost: inputList.cost,
        price: inputList.price,
        product_unit: inputList.product_unit,
        sale_unit: inputList.sale_unit,
        purchase_unit: inputList.purchase_unit,
        pro_tax: inputList.pro_tax,
        tax_method: inputList.tax_method,
        details: inputList.details,
      };
      if (NewData) {
        console.log(JSON.stringify(NewData));
        dispatch(allActions.product.AddProduct(NewData));
        setToogle(true);
      }
    } else {
      const updatedData = {
        id: inputList.id,
        name: inputList.categoryName,
      };
      dispatch(dispatch(allActions.category.UpdateCategory(updatedData)));
      setToogle(true);
    }
  };
  console.log(toogle);
  if (toogle === true) {
    return <Redirect to="/product" />;
  }
  console.log(inputList);
  console.log(props.match.params.id);

  const handleInputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setInputList({
      ...inputList,
      [name]: value,
    });
  };
  const idGenerate = () => {
    setCodeChange(generateId(2, 15));
  };
  console.log(inputList.pro_name);
  return (
    <div>
      <Wrapper>
        <Title>Product{props.match.params.id}</Title>
        <Form>
          <InputContainer>
            <Select
              root
              native
              placeholder="Tax Method"
              name="pro_type"
              value={inputList.pro_type}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Product Type
              </option>
              <option aria-label="None" value="Standard">
                Standard
              </option>
              <option aria-label="None" value="Combo">
                Combo
              </option>
              <option aria-label="None" value="Digital">
                Digital
              </option>
            </Select>
          </InputContainer>
          <InputContainer>
            <InputField
              placeholder="Product Name"
              required
              size="small"
              name="pro_name"
              variant="filled"
              value={inputList.pro_name}
              onChange={handleInputchange}
            />
          </InputContainer>
          <InputContainer>
            <InputField
              style={{ width: "50%" }}
              placeholder="Product Code"
              required
              id="code"
              size="small"
              name="code"
              variant="filled"
              value={codechange}
            />
            <RefreshButton onClick={idGenerate}>
              <BiRefresh size={30} backgroundColor="red" />
            </RefreshButton>
          </InputContainer>
          <InputContainer>
            <Select
              root
              native
              name="brand"
              value={inputList.brand}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="Select">
                Select Brand
              </option>
              <option aria-label="None" value="HP">
                HP
              </option>
              <option aria-label="None" value="Samsung">
                Samsung
              </option>
              <option aria-label="None" value="Apple">
                Apple
              </option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Select
              root
              native
              name="category"
              value={inputList.category}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Select Category
              </option>
              {parentsData.parent.map((parent, index) => (
                <option value={parent.parentName} key={parent.id}>
                  {parent.parentName}
                </option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <Select
              root
              native
              name="product_unit"
              value={inputList.product_unit}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Select Product Unit
              </option>
              <option aria-label="None" value="HP">
                piece
              </option>
              <option aria-label="None" value="Samsung">
                meter
              </option>
              <option aria-label="None" value="Apple">
                kilogram
              </option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Select
              root
              native
              name="sale_unit"
              value={inputList.sale_unit}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Select Sale Unit
              </option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Select
              root
              native
              name="purchase_unit"
              value={inputList.purchase_unit}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Select Purchase Unit
              </option>
              {parentsData.parent.map((parent, index) => (
                <option value={parent.parentName} key={parent.id}>
                  {parent.parentName}
                </option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <InputField
              placeholder="Product Cost"
              required
              size="small"
              variant="filled"
              name="cost"
              value={inputList.cost}
              onChange={handleInputchange}
            />
          </InputContainer>
          <InputContainer>
            <InputField
              placeholder="Product Price"
              required
              size="small"
              variant="filled"
              name="price"
              value={inputList.price}
              onChange={handleInputchange}
            />
          </InputContainer>
          <InputContainer>
            <InputField
              placeholder="Alert Quantity"
              required
              size="small"
              variant="filled"
              name="quantity"
              value={inputList.quantity}
              onChange={handleInputchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </InputContainer>
          <InputContainer>
            <Select
              root
              native
              placeholder="Product Tax"
              name="pro_tax"
              value={inputList.pro_tax}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Select Product Tax
              </option>
              <option aria-label="None" value="vat@10">
                vat@10
              </option>
              <option aria-label="None" value="vat@15">
                vat@15
              </option>
              <option aria-label="None" value="vat 20">
                vat 20
              </option>
            </Select>
          </InputContainer>

          <InputContainer>
            <Select
              root
              native
              placeholder="Tax Method"
              name="tax_method"
              value={inputList.tax_method}
              onChange={handleInputchange}
              variant="filled"
              size="small"
              id="demo-simple-select"
            >
              <option aria-label="None" value="">
                Select Tax Method
              </option>
              <option aria-label="None" value="Exclusive">
                Exclusive
              </option>
              <option aria-label="None" value="Inclusive">
                Inclusive
              </option>
            </Select>
          </InputContainer>
          <InputContainer>
            <TextArea
              placeholder="Product Detail"
              required
              size="small"
              variant="filled"
              name="details"
              value={inputList.details}
              onChange={handleInputchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </InputContainer>
        </Form>
        <Button>
          <LinkButton
            to="/category"
            style={{ width: 120, backgroundColor: "#3B8DBC" }}
          >
            Tax Method
          </LinkButton>
          &nbsp;
          <ButtonText
            disabled={inputList === ""}
            children="Submit"
            onClick={AddData}
          >
            Submit
          </ButtonText>
        </Button>
      </Wrapper>
    </div>
  );
};

export default Product;
