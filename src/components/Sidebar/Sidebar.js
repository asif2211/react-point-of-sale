import * as s from "./styled";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { IconContext } from "react-icons";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
import allActions from "../../redux/action";
const Sidebar = ({ handleToogle, sidebar }) => {
  const dispatch = useDispatch();
  const sidebarMenu = [
    { name: "Dashboard", to: "/", submenu: [], icon: "fa fa-tachometer" },
    { name: "Customer", to: "/customer", submenu: [], icon: "fa fa-user" },
    { name: "Items", to: "/", submenu: [], icon: "icon fa-list-alt" },
    { name: "Supplier", to: "/", submenu: [], icon: "fa fa-arrow-circle-down" },
    { name: "Reports", to: "/", submenu: [], icon: "fa fa-bar-chart" },
    { name: "Sales", to: "/", submenu: [], icon: "fa fa-shopping-cart" },
    { name: "Deliveries", to: "/", submenu: [], icon: "fa fa-id-card-o" },
    { name: "Expenses", to: "/", submenu: [], icon: "fa fa-dollar" },
    { name: "Appointments", to: "/", submenu: [], icon: "fa fa-id-card-o" },
    { name: "Category", to: "/category", submenu: [], icon: "fa fa-hdd-o" },
    { name: "Employees", to: "/", submenu: [], icon: "fa fa-id-card-o" },
    
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
          <s.NavMenuItem>
            {handleSidebarMenu}
            <s.MenuItem onClick = {() => dispatch(allActions.users.logOut())}>
            <s.Icon>
            <s.iconText
              className="fa fa-power-off"
              
            ></s.iconText>
          </s.Icon>
          <s.Text>Logout</s.Text>
          </s.MenuItem>
          </s.NavMenuItem>
        </s.NavMenu>


        {/* <s.menuContainer>{handleSidebarMenu}</s.menuContainer> */}
      </s.Container>
    </IconContext.Provider>
    
  );
};

export default Sidebar;
