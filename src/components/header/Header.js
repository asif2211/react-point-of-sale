import * as s from "./Header.style";

import { useState } from "react";
const Header = ({logo}) => {
    return ( 
        <s.Container>
            <s.Logo>
                <img src={logo} width="50px" height="50px"/>
            </s.Logo>
            <s.gap>
            </s.gap>
            <s.Profile>
                profile
            </s.Profile>
        </s.Container>
     );
}
 
export default Header;