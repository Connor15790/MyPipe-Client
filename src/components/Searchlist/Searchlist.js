import React from 'react';
import styles from "./Searchlist.module.css";
import { FaSearch } from "react-icons/fa";

const Searchlist = ({ titleArray, setSearchQuery }) => {
    return (
        <>
            <div className={styles.srchlistcontainer}>
                {
                    titleArray.map(m => (
                        <p 
                            key={m}
                            onClick={e => setSearchQuery(m)}
                            className={styles.itemtitle}>
                            <FaSearch />
                            {m}
                        </p>
                    ))
                }
            </div>
        </>
    )
}

export default Searchlist