import React from 'react';
// import styles from "./Library.module.css";
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';
import styles1 from "../../App.module.css";

const Library = () => {
  return (
    <div className={styles1.pagecontainer}>
      <Leftsidebar />
      <div className={styles1.pagecontainer2}>
        Library
      </div>
    </div>
  )
}

export default Library