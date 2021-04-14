import * as s from "./styled";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { RiArrowDownCircleFill } from "react-icons/ri";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
import allActions from "../../redux/action";
import SubMenu from "./SubMenu";
const Sidebar = ({ handleToogle, sidebar }) => {
  const dispatch = useDispatch();
  const sidebarMenu = [
    { name: "Dashboard", to: "/", icon: "fa fa-tachometer" },
    { name: "Product", to: "/customer", submenu: [{
      name:'product one',to:"/",icon: "fa fa-bar"
    }], icon: "fa fa-user", fabars: "fa fa-user" },
    { name: "Customer", to: "/customer", icon: "fa fa-user" },
    { name: "Supplier", to: "/supplier", icon: "fa fa-arrow-circle-down" },
    { name: "Items", to: "/item", icon: "icon fa-list-alt" },
    { name: "Manufacturer", to: "/manulist", icon: "fa fa-arrow-circle-down" },
    { name: "Reports", to: "/",  icon: "fa fa-bar-chart" },
    { name: "Sales", to: "/", icon: "fa fa-shopping-cart" },
    { name: "Deliveries", to: "/", icon: "fa fa-id-card-o" },
    { name: "Expenses", to: "/", icon: "fa fa-dollar" },
    { name: "Appointments", to: "/", icon: "fa fa-id-card-o" },
    { name: "Employees", to: "/", icon: "fa fa-id-card-o" },
    
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
          {item.name == "Product"  ?(
          <s.iconSubmenu>
              {"  "}<RiArrowDownCircleFill/>
            </s.iconSubmenu>) : "" }
          
          
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
        <SubMenu/>

        {/* <s.menuContainer>{handleSidebarMenu}</s.menuContainer> */}
      </s.Container>
    </IconContext.Provider>
    
  );
};

export default Sidebar;
