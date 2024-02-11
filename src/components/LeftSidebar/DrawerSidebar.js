import React from 'react';
import styles from "./Leftsidebar.module.css";
import shorts from "./shorts.png";

import { AiFillLike, AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiFillPlaySquare } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

import { Link } from 'react-router-dom';

const DrawerSidebar = ({toggleDrawer, toggleDrawerSidebar}) => {
    return (
        <div className={styles.dlsbcontainer} style={toggleDrawerSidebar}>
            <div className={styles.dlsbcontainer2}>
                <div className={styles.dlsb}>
                    <Link to={"/"} className={styles.sidebaricontainer}>
                        <p>
                            <AiOutlineHome
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Home</div>
                        </p>
                    </Link>

                    <div className={styles.sidebaricontainer}>
                        <p>
                            <MdOutlineExplore
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Explore</div>
                        </p>
                    </div>

                    <div className={styles.sidebaricontainer}>
                        <p>
                            <img
                                src={shorts}
                                width={22}
                                className={styles.sidebaricon}
                                alt='/'
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Shorts</div>
                        </p>
                    </div>

                    <div className={styles.sidebaricontainer}>
                        <p>
                            <MdOutlineSubscriptions
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Subscriptions</div>
                        </p>
                    </div>
                </div>

                <div className={styles.librarybtndlsb}>
                    <Link to={"/library"} className={styles.sidebaricontainer}>
                        <p>
                            <MdOutlineVideoLibrary
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Library</div>
                        </p>
                    </Link>

                    <Link to={"/watchhistory"} className={styles.sidebaricontainer}>
                        <p>
                            <FaHistory
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>History</div>
                        </p>
                    </Link>

                    <Link to={"/yourvideos"} className={styles.sidebaricontainer}>
                        <p>
                            <AiFillPlaySquare
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Your Videos</div>
                        </p>
                    </Link>

                    <Link to={"/watchlater"} className={styles.sidebaricontainer}>
                        <p>
                            <MdOutlineWatchLater
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Watch Later</div>
                        </p>
                    </Link>

                    <Link to={"/likedvideos"} className={styles.sidebaricontainer}>
                        <p>
                            <AiFillLike
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Liked Videos</div>
                        </p>
                    </Link>
                </div>

                <div className={styles.lsdsubbar}>
                    <h3>Your Subscriptions</h3>
                    <div className={styles.channellsdbar}>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className={styles.channellsdbar}>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className={styles.channellsdbar}>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className={styles.channellsdbar}>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className={styles.channellsdbar}>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                </div>
            </div>

            <div className={styles.dlsbcontainer3} onClick={() => toggleDrawer()}></div>
        </div>
    )
}

export default DrawerSidebar