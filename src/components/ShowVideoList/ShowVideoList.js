import React from 'react';

import styles from "../ShowVideoGrid/ShowVideoGrid.module.css";
import ShowVideo from '../ShowVideo/ShowVideo';
import vid from "../Videos/vid.mp4"

const ShowVideoList = ({videoId}) => {
    const vids = [
        {
            _id: 1,
            video_src: vid,
            channel: "764bhibkcbw8238b1hbb18",
            title: "video1",
            uploader: "abc",
            description: "Description of video 1"
        },
        {
            _id: 2,
            video_src: vid,
            channel: "ewegewggq",
            title: "video2",
            uploader: "abc",
            description: "Description of video 2"
        },
        {
            _id: 3,
            video_src: vid,
            channel: "afqeggeq",
            title: "video3",
            uploader: "abc",
            description: "Description of video 3"
        },
        {
            _id: 4,
            video_src: vid,
            channel: "qegeqg",
            title: "video4",
            uploader: "abc",
            description: "Description of video 4"
        }
    ]

    return (
        <div className={styles.svgcontainer}>
            {
                vids?.filter(q => q._id === videoId).map(vi => {
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

export default ShowVideoList