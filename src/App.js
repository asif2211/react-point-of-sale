import logo from "./pos.png";
import {useState, Fragment} from 'react'
import * as s from './App.style'
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  const [showsidebar, setShowsidebar] = useState(false);
  const handleToogle = () => setShowsidebar(!showsidebar);
  return (
    <Fragment>
    <s.Container>
      <Header handleToogle={handleToogle} logo={logo}/>
      <Sidebar handleToogle={handleToogle} sidebar={showsidebar}/>
      <Main/>
    </s.Container>
    
    </Fragment>
    
  );
}

export default App;
