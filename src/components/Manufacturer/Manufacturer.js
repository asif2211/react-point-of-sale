import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import { supplier_Data } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Suppliers } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
import { LinkButton } from "../../components/LinkButton/styled";
const Supplier = (props) => {
  const [toogle, setToogle] = useState(false);
  const [inputList, setInputList] = useState({
    id: 0,
    supplier: "",
  });
  const hanleChange = ({ key, value }) => {
    setInputList({
      ...inputList,
      [key]: value,
    });
  };
  //data from selector
  const selector = useSelector(Suppliers);
  const getDataById = selector.supplier.filter(
    (c) => c.id === props.match.params.id
  );
  useEffect(() => {
    setInputList({
      id: getDataById[0] && getDataById[0].id,
      supplier: getDataById[0] && getDataById[0].name,
    });
  }, []);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    if (!inputList.id) {
      const NewData = {
        id: generateId(2, 15),
        name: inputList.supplier,
      };
      if (NewData) {
        dispatch(allActions.supplier.AddSupplier(NewData));
        setToogle(true);
      }
    } else {
      const updatedData = {
        id: inputList.id,
        name: inputList.supplier,
      };
      dispatch(dispatch(allActions.supplier.UpdateSupplier(updatedData)));
      setToogle(true);
    }
  };
  console.log(toogle);
  if (toogle === true) {
    return <Redirect to="/additem/id" />;
  }
   return (
    <div>
      <Wrapper>
  <Title>Supplier{props.match.params.id}</Title>
        <Form>
          {supplier_Data.map((x, i) => {
            if (i === 0) {
              return (
                <InputContainer key={x.name}>
                  <TextField
                    style={{ width: 500, justifyContent: "center" }}
                    label={"Supplier Name"}
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
            }
          })}
        </Form>
        <Button>
        <LinkButton
          to = "/supplier"
          style = {{width:120, backgroundColor:'#3B8DBC'}}
          >
            View Category
          </LinkButton>
          &nbsp;
          <ButtonText
            disabled={inputList.name === ""}
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

export default Supplier;
