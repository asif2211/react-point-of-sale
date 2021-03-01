import * as s from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
const Sidebar = ({ handleToogle, sidebar }) => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80";
  const sidebarMenu = [
    { name: "Dashboard", to: "/", submenu: [], icon: "fa fa-tachometer" },
    { name: "Customer", to: "/customer", submenu: [], icon: "fa fa-user" },
    { name: "Items", to: "/", submenu: [], icon: "icon fa-list-alt" },
    { name: "Supplier", to: "/", submenu: [], icon: "fa fa-arrow-circle-down" },
    { name: "Reports", to: "/", submenu: [], icon: "fa fa-bar-chart" },
    { name: "Sales", to: "/", submenu: [], icon: "fa fa-shopping-cart" },
    { name: "Deliveries", to: "/", submenu: [], icon: "fa fa-handshake-o" },
    { name: "Expenses", to: "/", submenu: [], icon: "fa fa-dollar" },
    { name: "Appointments", to: "/", submenu: [], icon: "fa fa-handshake-o" },
    { name: "Employees", to: "/", submenu: [], icon: "fa fa-id-card-o" },
    { name: "Logout", to: "/", submenu: [], icon: "fa fa-power-off" },
  ];
  const [selected, setSelected] = useState(sidebarMenu[0].name);
  const handleMenuSelected = (name)=>{
    setSelected(name)
  }
  const handleSidebarMenu = sidebarMenu.map((item, index) => {
    const isSelected = selected === item.name;
    console.log(`${item.name} selected ? ${isSelected}`);
    return (
      
      <s.MenuLink to={item.to} key={index}>
        <s.MenuItem key={index} onClick={()=>handleMenuSelected(item.name)} selected={isSelected}>
          <s.Icon>
            <s.iconText
              className={item.icon}
              isselected={isSelected}
            ></s.iconText>
          </s.Icon>
          <s.Text isselected={isSelected}>{item.name}</s.Text>
        </s.MenuItem>
      </s.MenuLink>
     
    );
  });
  return (
    
    <IconContext.Provider value={{ color: "#fff" }}>
      <s.Container>
        <s.NavMenu sidebar={sidebar}>
          <s.NavMenuItem>{handleSidebarMenu}</s.NavMenuItem>
        </s.NavMenu>

        {/* <s.menuContainer>{handleSidebarMenu}</s.menuContainer> */}
      </s.Container>
    </IconContext.Provider>
    
  );
};

export default Sidebar;
