import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import { categoryData } from "../../utils/helper";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Categories } from "../../redux/selector";
import { generateId } from "../../utils/generateId";
const Category = (props) => {
  const [toogle, setToogle] = useState(false);
  const [inputList, setInputList] = useState({
    id: 0,
    categoryName: "",
  });
  const hanleChange = ({ key, value }) => {
    setInputList({
      ...inputList,
      [key]: value,
    });
  };
  //data from selector
  const selector = useSelector(Categories);
  const getDataById = selector.category.filter(
    (c) => c.id === props.match.params.id
  );
  useEffect(() => {
    setInputList({
      id: getDataById[0] && getDataById[0].id,
      categoryName: getDataById[0] && getDataById[0].name,
    });
  }, []);
  const dispatch = useDispatch();
  // pass id by useDispatch hooks
  const AddData = () => {
    if (!inputList.id) {
      const NewData = {
        id: generateId(2, 15),
        name: inputList.categoryName,
      };
      if (NewData) {
        dispatch(allActions.category.AddCategory(NewData));
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
    return <Redirect to="/category" />;
  }
  console.log(inputList.categoryName);
  console.log(props.match.params.id);
  return (
    <div>
      <Wrapper>
  <Title>Category{props.match.params.id}</Title>
        <Form>
          {categoryData.map((x, i) => {
            if (i === 0) {
              return (
                <InputContainer key={x.name}>
                  <TextField
                    style={{ width: 500, justifyContent: "center" }}
                    label={"Category Name"}
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

export default Category;
