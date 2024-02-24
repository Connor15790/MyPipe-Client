import React from 'react'
import Leftsidebar from '../LeftSidebar/Leftsidebar';
import styles from "../../App.module.css"
import styles1 from "./WHL.module.css"
import WHLVideoList from './WHLVideoList';

const WHL = ({page, videoList}) => {
    return (
        <div className={styles.pagecontainer}>
            <Leftsidebar />
            <div className={styles.pagecontainer2}>
                <p className={styles1.containerwhl}>
                    <div className={styles1.boxWHL}>
                        <b> Your {page} Shown Here</b>
                        {
                            page === "History" && <div className={styles1.clearhistorybtn}>Clear History</div>
                        }
                    </div>

                    <div className={styles1.rightsidewhl}>
                        <h1>{page}</h1>
                        <div className={styles1.whllist}>
                            <WHLVideoList page={page} videoList={videoList}/>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WHL