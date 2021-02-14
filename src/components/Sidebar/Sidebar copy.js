import * as s from "./Sidebar_style";
import { useState } from "react";

const Sidebar = () => {
   
  const backgroundImage =
    "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80";
  const sidebarMenu = [
    { name: "Dashboard", to: "/", submenu: [], icon: "fa fa-tachometer"},
    { name: "Customer", to: "/", submenu: [], icon: "fa fa-user" },
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
  const [selected , setSelected] =  useState(sidebarMenu[0].name)
  const handleSidebarMenu = sidebarMenu.map((item, index) => {
     const isSelected = selected === item.name;
     console.log(`${item.name} selected ? ${isSelected}`)
    return (
      <s.MenuItem key={index++}>
        <s.Icon>
          <i className={item.icon}></i>
        </s.Icon>
        <s.Text isselected={isSelected}>{item.name}</s.Text>
        
      </s.MenuItem>
      
      
    );
  });
  return (
    <s.Container backgroundImage={backgroundImage}>
      
      <s.sidebarHeader>POS</s.sidebarHeader>
      <s.menuContainer>{handleSidebarMenu}</s.menuContainer>
    </s.Container>
  );
};

export default Sidebar;
