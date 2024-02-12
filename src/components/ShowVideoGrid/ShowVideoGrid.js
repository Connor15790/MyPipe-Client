import React from 'react';
import styles from "./ShowVideoGrid.module.css";
import ShowVideo from '../ShowVideo/ShowVideo';

const ShowVideoGrid = ({ vids }) => {
    return (
        <div className={styles.svgcontainer}>
            {
                vids?.map(vi => {
                    return (
                        <div key={vi._id} className={styles.videobox}>
                            <ShowVideo vid={vi} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowVideoGrid