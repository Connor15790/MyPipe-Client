import './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './components/Allroutes';
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';
import { useState } from 'react';


import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none"
  })

  const toggleDrawer = () => {
    if(toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex"
      })
    } else {
      setToggleDrawerSidebar({
        display: "none"
      })
    }
  }
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer}/>
      {
        <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar}/>
      }
      <Allroutes/>
    </Router>
  );
}

export default App;
