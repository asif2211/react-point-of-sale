import { Wrapper, Link, Logo, Profile, Gap, Span, MenuIcon } from "./styled";
import { FaBars } from "react-icons/fa";
import allActions from "../../redux/action";
import { useDispatch } from "react-redux";
const Header = ({ logo, handleToogle, userName }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <MenuIcon>
        <FaBars onClick={handleToogle} />
      </MenuIcon>
      <Link to="/posdata">
        <Logo>POS</Logo>
      </Link>
      <Gap></Gap>
      <Profile>
        {userName} &nbsp;{" "}
        <Span onClick={() => dispatch(allActions.users.logOut())}>Logout</Span>
      </Profile>
    </Wrapper>
  );
};

export default Header;
