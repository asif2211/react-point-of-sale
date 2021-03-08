import React, { useState } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import { InputData } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch ,useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Customers } from "../../redux/selector";
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
    error:''
  });
  const hanleChange = ({ key, value }) => {
    
    setInputList({
      ...inputList,
      [key]: value,
    });
  };
  //data from selector
  const selector = useSelector(Customers)
  const getDataForUpdate = selector.customers.filter(id=>id===props.match.params.id);
  
  const data = ()=>setInputList({
    
    fname:getDataForUpdate.fname,
    
  })
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    const NewData = {
      id: Math.random(),
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
  };
  console.log(toogle);
  if (toogle === true) {
    return <Redirect to = "/customer" />;
  }
  
  return (
    <div>
      <Wrapper>
        <Title>Customer Information</Title>
        
        <Form>
          {InputData.map((x, i) => {
            return (
              <InputContainer key = {x.name}>
                <TextField
                  style = {{ width: 500, justifyContent: "center" }}
                  label = {x.label}
                  required
                  size = "small"
                  variant = "filled"
                  value = {inputList[x.name]}
                  onChange = {(e) =>
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
