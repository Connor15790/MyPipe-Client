import React from 'react';
import styles from "./ShowVideo.module.css";
import styles1 from "../../App.module.css";

import { Link } from 'react-router-dom';

const ShowVideo = ({vid}) => {
  return (
    <>
        <Link to={`/videopage/${vid?._id}`}>
            <video 
                src={`${vid?.video_src}`}
                className={styles.videoshow}/>
        </Link>

        <div className={styles.videodescription}>
            <div className={styles1.channellogo}>
                <div className={styles1.charlogo}>
                    <>{vid?.uploader?.charAt(0).toUpperCase()}</>
                </div>
            </div>

            <div className={styles.videodetails}>
                <p className={styles.videotitle}>Title</p>
                <pre className={styles.videoviews}>01-01-2001</pre>
                <pre className={styles.videoviews}>
                    5 views <div className={styles1.dot}></div> video uploaded 1 year ago
                </pre>
            </div>
        </div>
    </>
  )
}

export default ShowVideo