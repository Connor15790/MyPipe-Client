import React from 'react';
import styles from "./Home.module.css";
import styles1 from "../../App.module.css";
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';

const Home = () => {
    return (
        <div className={styles1.pagecontainer}>
            <Leftsidebar/>
            <div className={styles1.pagecontainer2}>
                Home
            </div>
        </div>
    )
}

export default Home