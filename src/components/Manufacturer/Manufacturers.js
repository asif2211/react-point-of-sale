import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import { manufacturer_Data } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Manufacturer } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
import { Link } from "react-router-dom";
import { LinkButton } from "../../components/LinkButton/styled";
const Manufacturers = (props) => {
  const [toogle, setToogle] = useState(false);
  const [inputList, setInputList] = useState({
    id: 0,
    manuName: "",
  });
  const hanleChange = ({ key, value }) => {
    setInputList({
      ...inputList,
      [key]: value,
    });
  };
  //data from selector
  // const selector = useSelector(Manufacturer);
  // const getDataById = selector.manufacturer.filter(
  //   (c) => c.id === props.match.params.id
  // );
  // useEffect(() => {
  //   setInputList({
  //     id: getDataById[0] && getDataById[0].id,
  //     categoryName: getDataById[0] && getDataById[0].name,
  //   });
  // }, []);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    if (!inputList.id) {
      const NewData = {
        id: generateId(2, 15),
        name: inputList.manuName,
      };
      if (NewData) {
       
        dispatch(allActions.manufacturer.AddManu(NewData));
        setToogle(true);
        alert(toogle)
      }
    } else {
      const updatedData = {
        id: inputList.id,
        name: inputList.manuName,
      };
      dispatch(dispatch(allActions.manufacturer.UpdateManu(updatedData)));
      setToogle(true);
    }
  };
  console.log(toogle);
  if (toogle === true) {
    return <Redirect to="/manulist" />;
  }
  
  return (
    <div>
      <Wrapper>
  <Title>Manufacturer{props.match.params.id}</Title>
        <Form>
          {manufacturer_Data.map((x, i) => {
            if (i === 0) {
              return (
                <InputContainer key={x.name}>
                  <TextField
                    style={{ width: 500, justifyContent: "center" }}
                    label={"Manufacturer Name"}
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
          to = "/category"
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

export default Manufacturers;
