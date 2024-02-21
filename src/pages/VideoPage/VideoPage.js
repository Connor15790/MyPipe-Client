import React from 'react';
import styles from "./VideoPage.module.css";
import styles1 from "../../App.module.css"

import vid from "../../components/Videos/vid.mp4";
import LikeDislikebtns from './LikeDislikebtns';
import Comments from '../Comments/Comments';

const VideoPage = () => {
    return (
        <>
            <div className={styles.videopagecontainer}>
                <div className={styles.videopagecontainer2}>
                    <div className={styles.videodispscreen}>
                        <video
                            src={vid}
                            className={styles.showvideo}
                            controls
                            autoPlay
                            muted>
                        </video>

                        <div className={styles.videodetails}>
                            <div className={styles.videobtnstitle}>
                                <p className={styles.videotitle}>Title</p>
                                <div className={styles.viewsdatebtns}>
                                    <div className={styles.views}>
                                        5 views <div className={styles1.dot}></div> uploaded 1 year ago
                                    </div>
                                    <LikeDislikebtns />
                                </div>
                            </div>

                            <div className={styles.channeldetails}>
                                <b className={styles.channellogo}>
                                    <p>C</p>
                                </b>
                                <p className={styles.channelname}>Channel Name</p>
                            </div>

                            <div className={styles.comments}>
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comments />
                            </div>
                        </div>
                    </div>

                    <div className={styles.morevideosbar}>
                        More videos
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage