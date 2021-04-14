import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Header from '../header/Header'
const Nav = styled.div`
  background: #15171c;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color:rgb(55, 57, 66);
`;

const SidebarNav = styled.nav`
  background-color:rgb(25, 29, 43);
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top:3.7rem;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index:-1;
  top:0;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
          <Header handleToogle={showSidebar}/>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} style={{backgroundColor:'#3B8DBC'}}/>
            </NavIcon> */}
            <div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            </div>
           
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;