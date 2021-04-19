import React, { useState, useEffect } from "react";
import { Wrapper, Title, Form, InputContainer, Button } from "./styled";
import allActions from "../../redux/action";
import FormControl from "@material-ui/core/FormControl";
import ButtonText from "../../components/ButtonText/ButtonText";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Categories, ParentsSelector} from "../../redux/selector";
import { generateId } from "../../utils/generateId";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import { LinkButton } from "../../components/LinkButton/styled";
const Category = (props) => {
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
  const classes = useStyles();
  const [toogle, setToogle] = useState(false);
  const [inputList, setInputList] = useState({
    id:0,
    categoryName:''

  });
  const [parent, setParent] = useState('');
  const handleChange = (event) => {
    setInputList(event.target.value);
  };
  const handleChangeParent = (event) => {
    setParent(event.target.value);
  };
  //data from selector
  const selector = useSelector(Categories);
  const parentsData = useSelector(ParentsSelector);
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
        categoryName: inputList,
        parent: parent,
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
  console.log(inputList);
  console.log(props.match.params.id);
  
  return (
    <div>
      <Wrapper>
        <Title>Category{props.match.params.id}</Title>
        <Form>
          <InputContainer>
            <TextField
              style={{ width: 500, justifyContent: "center" }}
              label="Category Name"
              required
              size="small"
              name=""
              variant="filled"
              value={inputList.categoryName}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </InputContainer>
          <InputContainer>
          <div>
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select" style={{ paddingLeft: 10 }}>
            Select Category
          </InputLabel>
          <Select
            root
            style={{ width: 500, justifyContent: "center" }}
            native
            label="Select Category"
            value={parent}
            onChange={handleChangeParent}
            variant="filled"
            size="small"
            id="demo-simple-select"
          >
            <option aria-label="None" value="" />
            {parentsData.parent.map((parent,index) => (
              <option value={parent.parentName} key={parent.id}>
                {parent.parentName}
              </option>
            ))}
             
          </Select>
          </FormControl>
          </div>
          </InputContainer>
          
        </Form>
        <Button>
          <LinkButton
            to="/category"
            style={{ width: 120, backgroundColor: "#3B8DBC" }}
          >
            View Category
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

export default Category;
