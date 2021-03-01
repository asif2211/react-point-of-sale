import {Wrapper,Link,Logo,Profile} from "./styled";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
const Header = ({ logo, handleToogle }) => {
  return (
    <Wrapper>
      <Link>
        <FaBars onClick={handleToogle} />
      </Link>
      <Logo>POS</Logo>
      <gap></gap>
      <Profile>Muhammad Asif</Profile>
    </Wrapper>
  );
};

export default Header;
