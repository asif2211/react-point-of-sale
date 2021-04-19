import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import { parent_Data } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { ParentsSelector } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
import { Link } from "react-router-dom";
import { LinkButton } from "../../components/LinkButton/styled";
const Parents = (props) => {
  const [toogle, setToogle] = useState(false);
  const [inputList, setInputList] = useState({
    id: 0,
    parentName: "",
  });
  const hanleChange = ({ key, value }) => {
    setInputList({
      ...inputList,
      [key]: value,
    });
  };
  //data from selector
  const selector = useSelector(ParentsSelector);
  const getDataById = selector.parent.filter(
    (c) => c.id === props.match.params.id
  );
  useEffect(() => {
    setInputList({
      id: getDataById[0] && getDataById[0].id,
      parentName: getDataById[0] && getDataById[0].name,
    });
  }, []);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    if (!inputList.id) {
      alert(inputList.parentName)
      const NewData = {
        id: generateId(2, 15),
        parentName: inputList.parentName,
      };
     
      if (NewData) {
        
        dispatch(allActions.parent.AddParents(NewData));
        setToogle(true);
      }
    } else {
      const updatedData = {
        id: inputList.id,
        name: inputList.parentName,
      };
      dispatch(dispatch(allActions.parent.UpdateParents(updatedData)));
      setToogle(true);
    }
  };
  console.log(toogle);
  if (toogle === true) {
    return <Redirect to="/parentlist" />;
  }
  
  return (
    <div>
      <Wrapper>
  <Title>Parents</Title>
        <Form>
          {parent_Data.map((x, i) => {
            if (i === 0) {
              return (
                <InputContainer key={x.name}>
                  <TextField
                    style={{ width: 500, justifyContent: "center" }}
                    label={"Parents Name"}
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
          to = "/parentlist"
          style = {{width:120, backgroundColor:'#3B8DBC'}}
          >
            View Parents
          </LinkButton>
          &nbsp;
          <ButtonText
            disabled={inputList.parentName === ""}
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

export default Parents;
