import './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './components/Allroutes';
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      {
        <DrawerSidebar/>
      }
      <Allroutes/>
    </Router>
  );
}

export default App;
