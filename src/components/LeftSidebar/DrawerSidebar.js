import React from 'react';
import styles from "./Leftsidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiFillPlaySquare } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import shorts from "./shorts.png";

const DrawerSidebar = () => {
    return (
        <div className={styles.dlsbcontainer}>
            <div className={styles.dlsbcontainer2}>
                <div className={styles.dlsb}>
                    <div className={styles.sidebaricontainer}>
                        <p>
                            <AiOutlineHome
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Home</div>
                        </p>
                    </div>

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
                    <div className={styles.sidebaricontainer}>
                        <p>
                            <MdOutlineVideoLibrary
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Library</div>
                        </p>
                    </div>

                    <div className={styles.sidebaricontainer}>
                        <p>
                            <FaHistory
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>History</div>
                        </p>
                    </div>

                    <div className={styles.sidebaricontainer}>
                        <p>
                            <AiFillPlaySquare
                                size={22}
                                className={styles.sidebaricon}
                                style={{ margin: "auto 0.7rem" }} />
                            <div className={styles.sidebaricontext}>Videos</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawerSidebar