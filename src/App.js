import logo from "./pos.png";
import {useState} from 'react'
import * as s from './App.style'
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  
  return (
    <s.Container>
      <Header logo={logo}/>
      <Sidebar/>
      <Main/>
    </s.Container>
    
  );
}

export default App;
