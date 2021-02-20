import * as s from "./Header.style";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
const Header = ({ logo, handleToogle }) => {
  return (
    <s.Container>
      <s.Link>
        <FaBars onClick={handleToogle} />
      </s.Link>
      <s.Logo>POS</s.Logo>
      <s.gap></s.gap>
      <s.Profile>Muhammad Asif</s.Profile>
    </s.Container>
  );
};

export default Header;
