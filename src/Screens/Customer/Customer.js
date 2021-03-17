import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import { InputData } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Customers } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
const Customer = (props) => {
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
  const hanleChange = ({ key, value }) => {
    setInputList({
      ...inputList,
      [key]: value,
    });
  };
  //data from selector
  const selector = useSelector(Customers);
  const getDataById = selector.customers.filter(
    (c) => c.id === props.match.params.id
  );
  useEffect(() => {
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
  }, []);
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
  if (toogle === true) {
    return <Redirect to="/customer" />;
  }
  console.log(inputList.fname);
  console.log(props.match.params.id);
  return (
    <div>
      <Wrapper>
        <Title>Customer Information</Title>
        <Form>
          {InputData.map((x, i) => {
            return (
              <InputContainer key={x.name}>
                <TextField
                  style={{ width: 500, justifyContent: "center" }}
                  label={x.label}
                  required
                  size="small"
                  variant="filled"
                  value={inputList[x.name]}
                  onChange={(e) =>
                    hanleChange({
                      key: x.name,
                      value: e.target.value,
                    })
                  }
                />
              </InputContainer>
            );
          })}
        </Form>
        <Button>
          <ButtonText
            disabled={
              inputList.fname === "" ||
              inputList.fname === "" ||
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

export default Customer;
