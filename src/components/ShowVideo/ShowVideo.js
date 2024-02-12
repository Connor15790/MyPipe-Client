import React from 'react';
import styles from "./ShowVideo.module.css";

const ShowVideo = ({vid}) => {
  return (
    <>
        <div>
            <video 
                src={`${vid?.video_src}`}
                className={styles.videoshow}></video>
        </div>
    </>
  )
}

export default ShowVideo