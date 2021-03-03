import {Wrapper,Link,Logo,Profile,Gap} from "./styled";
import { FaBars } from "react-icons/fa";

const Header = ({ logo, handleToogle ,userName}) => {
  return (
    <Wrapper>
      <Link>
        <FaBars onClick={handleToogle} />
      </Link>
      <Logo>POS</Logo>
      <Gap></Gap>
      <Profile>{userName}</Profile>
    </Wrapper>
  );
};

export default Header;
