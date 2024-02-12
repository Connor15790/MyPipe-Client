import React from 'react';
// import styles from "./Home.module.css";
import styles1 from "../../App.module.css";
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';

const Home = () => {
    const vids = [
        {
            _id: 1,
            video_src: "vid",
            channel: "764bhibkcbw8238b1hbb18",
            title: "video1",
            description: "Description of video 1"
        },
        {
            _id: 2,
            video_src: "vid",
            channel: "ewegewggq",
            title: "video2",
            description: "Description of video 2"
        },
        {
            _id: 3,
            video_src: "vid",
            channel: "afqeggeq",
            title: "video3",
            description: "Description of video 3"
        }
    ]
    return (
        <div className={styles1.pagecontainer}>
            <Leftsidebar/>
            <div className={styles1.pagecontainer2}>
                <ShowVideoGrid vids={vids}/>
            </div>
        </div>
    )
}

export default Home