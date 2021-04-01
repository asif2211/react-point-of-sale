import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";
import { Customers, Categories, Suppliers,Manufacturer } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { LinkButton } from "../../components/LinkButton/styled";
const AddItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    paddingLabel: {
      paddingLeft: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const [toogle, setToogle] = useState(false);

  const [inputList, setInputList] = useState({
    id: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    company: "",
    comments: "",
    store: "",
    credit: "",
    error: "",
  });

  //data from selector
  const selector = useSelector(Customers);
  const category = useSelector(Categories);
  const supplier = useSelector(Suppliers);
  const Manufacturers = useSelector(Manufacturer);
  const getDataById = selector.customers.filter(
    (c) => c.id === props.match.params.id
  );
  useEffect(
    () => {
      setInputList({
        id: getDataById[0] && getDataById[0].id,
        fname: getDataById[0] && getDataById[0].fname,
        lname: getDataById[0] && getDataById[0].lname,
        email: getDataById[0] && getDataById[0].email,
        phone: getDataById[0] && getDataById[0].phone,
        address: getDataById[0] && getDataById[0].address,
        city: getDataById[0] && getDataById[0].city,
        state: getDataById[0] && getDataById[0].state,
        zip: getDataById[0] && getDataById[0].zip,
        country: getDataById[0] && getDataById[0].country,
        company: getDataById[0] && getDataById[0].company,
        comments: getDataById[0] && getDataById[0].comments,
        store: getDataById[0] && getDataById[0].store,
        credit: getDataById[0] && getDataById[0].credit,
      });
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    if (!inputList.id) {
      const NewData = {
        id: generateId(2, 15),
        fname: inputList.fname,
        lname: inputList.fname,
        email: inputList.email,
        phone: inputList.phone,
        address: inputList.address,
        city: inputList.city,
        state: inputList.state,
        zip: inputList.zip,
        country: inputList.country,
        company: inputList.company,
        comments: inputList.comments,
        store: inputList.store,
        credit: inputList.credit,
      };
      if (NewData) {
        dispatch(allActions.customer.AddCustomer(NewData));
        setToogle(true);
      }
    } else {
      const updatedData = {
        id: inputList.id,
        fname: inputList.fname,
        lname: inputList.lname,
        email: inputList.email,
        phone: inputList.phone,
        address: inputList.address,
        city: inputList.city,
        state: inputList.state,
        zip: inputList.zip,
        country: inputList.country,
        company: inputList.company,
        comments: inputList.comments,
        store: inputList.store,
        credit: inputList.credit,
      };
      dispatch(dispatch(allActions.customer.UpdateCutomer(updatedData)));
      setToogle(true);
    }
  };
  console.log(toogle);
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const [supplierstate, setSupplierstate] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChangeCategory = (event) => {
    const name = event.target.name;

    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleChangeSupplier = (event) => {
    const name = event.target.name;

    setSupplierstate({
      ...state,
      [name]: event.target.value,
    });
  };
  if (toogle === true) {
    return <Redirect to="/customer" />;
  }
  console.log(inputList.fname);
  console.log(props.match.params.id);
  return (
    <div>
      <Wrapper>
        <Title>Item Information</Title>
        <Form>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="Item Name"
              required
              size="small"
              variant="filled"
              value={inputList.lname}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="Barcode Name"
              required
              size="small"
              variant="filled"
              value={inputList.lname}
            />
          </InputContainer>
          {/* category dropdown */}
          <InputContainer>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-select" style={{ paddingLeft: 10 }}>
                Select Category
              </InputLabel>
              <Select
                root
                style={{ width: 500, justifyContent: "center" }}
                native
                label="Select Category"
                value={state.age}
                onChange={handleChangeCategory}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
                variant="filled"
                size="small"
              >
                <option aria-label="None" value="" />
                {category.category.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            
            
          </InputContainer>
          <InputContainer>
            <LinkButton to="/addcategory/id" style={{height:20}}>Add Category</LinkButton>
          </InputContainer>
          {/* supplier dropdown */}
          <InputContainer>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-select" style={{ paddingLeft: 10 }}>
                Select Supplier
              </InputLabel>
              <Select
                root
                style={{ width: 500, justifyContent: "center" }}
                native
                value={supplierstate.age}
                onChange={handleChangeSupplier}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
                variant="filled"
                size="small"
              >
                <option aria-label="None" value="" />
                {supplier.supplier.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </InputContainer>
          <InputContainer>
            <LinkButton to="/addsupplier/id" style={{height:20}}>Add Supplier</LinkButton>
          </InputContainer>
          {/* Manufacturer dropdown */}
          <InputContainer>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-select" style={{ paddingLeft: 10 }}>
                Manufacturer List
              </InputLabel>
              <Select
                root
                style={{ width: 500, justifyContent: "center" }}
                native
                value={supplierstate.age}
                onChange={handleChangeSupplier}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
                variant="filled"
                size="small"
              >
                <option aria-label="None" value="" />
                {Manufacturers.manufacturer &&Manufacturers.manufacturer.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </InputContainer>
          <InputContainer>
            <LinkButton to="/addmanu/id" style={{height:20,width:120}}>Add Manufacturer</LinkButton>
          </InputContainer>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="UPC/EAN/ISBN"
              required
              size="small"
              variant="filled"
              value={inputList.lname}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="Product ID"
              required
              size="small"
              variant="filled"
              value={inputList.lname}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="Item Name"
              required
              size="small"
              variant="filled"
              value={inputList.lname}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="Item Name"
              required
              size="small"
              variant="filled"
              value={inputList.lname}
            />
          </InputContainer>
        </Form>
        <Button>
          <ButtonText
            disabled={
              inputList.fname === "" ||
              inputList.lname === "" ||
              inputList.email === "" ||
              inputList.phone === "" ||
              inputList.store === "" ||
              inputList.state === "" ||
              inputList.comments === "" ||
              inputList.company === "" ||
              inputList.credit === "" ||
              inputList.address === ""
            }
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

export default AddItem;
