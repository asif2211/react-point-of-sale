import {Wrapper,Link,Logo,Profile,Gap,Span} from "./styled";
import { FaBars } from "react-icons/fa";
import ButtonText from "../ButtonText/ButtonText";
import allActions from "../../redux/action";
import { useDispatch} from "react-redux";
const Header = ({ logo, handleToogle ,userName}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Link>
        <FaBars onClick={handleToogle} />
      </Link>
      <Logo>POS</Logo>
      <Gap></Gap>
      <Profile>{userName} &nbsp; <Span onClick={() => dispatch(allActions.users.logOut())}>LogOut</Span></Profile>
      
    </Wrapper>
  );
};

export default Header;
