import React from 'react';
import styles from "./Leftsidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import shorts from "./shorts.png";

import {
  Link
} from "react-router-dom";

const Leftsidebar = () => {
  return (
    <div className={styles.lsbcontainer}>
      <Link to={"/"} className={styles.sidebaricontainer}>
        <AiOutlineHome size={22} className={styles.sidebaricon} />
        <div className={styles.sidebaricontext}>Home</div>
      </Link>

      <Link to={"/explore"} className={styles.sidebaricontainer}>
        <MdOutlineExplore size={22} className={styles.sidebaricon} />
        <div className={styles.sidebaricontext}>Explore</div>
      </Link>

      <Link to={"/shorts"} className={styles.sidebaricontainer}>
        <img src={shorts} width={22} className={styles.sidebaricon} alt='/' />
        <div className={styles.sidebaricontext}>Explore</div>
      </Link>

      <Link to={"/subscriptions"} className={styles.sidebaricontainer}>
        <MdOutlineSubscriptions size={22} className={styles.sidebaricon} />
        <div className={styles.sidebaricontext}>Subscriptions</div>
      </Link>

      <Link to={"/library"} className={styles.sidebaricontainer}>
        <MdOutlineLibraryAdd size={22} className={styles.sidebaricon} />
        <div className={styles.sidebaricontext}>Library</div>
      </Link>
    </div>
  )
}

export default Leftsidebar