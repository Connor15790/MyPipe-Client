import React from 'react';
import styles from "./Navbar.module.css";
import styles1 from "../../App.module.css"
import logo from "./logo.ico"
import Searchbar from '../Searchbar/Searchbar';
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = ({toggleDrawer}) => {
    const currentUser = {
        result: {
            email: "xyz@gmail.com",
            joinedOn: "2222-07-15T09:57:23.489Z"
        }
    };

    return (
        <div className={styles.navcontainer}>
            <div className={styles.navburgerlogo}>
                <div className={styles.burger} onClick={toggleDrawer}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

                <Link to={"/"} className={styles.navlogo}>
                    <img src={logo} alt="/" />
                    <p className={styles.logotitle}>MyPipe</p>
                </Link>
            </div>

            <Searchbar />

            <RiVideoAddLine size={22} className={styles.vidbell} />

            <div className={styles.appsbox}>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
                <p className={styles.appbox}></p>
            </div>

            <IoMdNotificationsOutline size={22} className={styles.vidbell} />

            <div className={styles.authcont}>
                {currentUser ? (
                    <>
                        <div className={styles1.channellogo}>
                            <p className={styles1.charlogo}>
                                {
                                    currentUser?.result.name ? (
                                        <>
                                            {currentUser?.result.name.charAt(0).toUpperCase()}
                                        </>
                                    ) : (<>
                                            {currentUser?.result.email.charAt(0).toUpperCase()}
                                        </>)
                                }
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <p className={styles.authbtn}>
                            <BiUserCircle size={22} />
                            <b>Sign In</b>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar