import logo from "./logo.svg";
import {useState} from 'react'
import "./App.css";
import Navbar from './components/Navbar'
function App() {
  const [sidebaropen , setSidebarOpen] = useState(false)
  
  const handleSideBarOpen = ()=>{
    setSidebarOpen(true);
  }
  const handleSideBarClosed = ()=>{
    setSidebarOpen(false);
  }
  return (

    <div className="container">
      <Navbar sidbaropen={handleSideBarOpen} sidebarclosed={handleSideBarClosed}/>
      
        <h1> Dashboard</h1>
      
    </div>
  );
}

export default App;
