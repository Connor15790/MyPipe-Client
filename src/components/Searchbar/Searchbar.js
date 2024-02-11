import React, {useState} from 'react';
import styles from "./Searchbar.module.css";
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Searchlist from '../Searchlist/Searchlist';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchList, setSearchList] = useState(false);

    const titleArray = ["video1", "video2", "Animation video", "Movies"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()))

    console.log(titleArray)

    return (
        <div className={styles.searchbarcontainer}>
            <div className={styles.searchbarcontainer2}>
                <div className={styles.searchdiv}>
                    <input type="text" className={styles.searchbar} placeholder='Search'
                        onChange={e => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        onClick={e => setSearchList(true)}/>
                    <FaSearch className={styles.searchicon} onClick={e => setSearchList(false)}/>
                    <BsMicFill className={styles.micicon}/>
                    {searchQuery && searchList &&
                        <Searchlist setSearchQuery={setSearchQuery} titleArray={titleArray}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Searchbar