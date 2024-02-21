import React from 'react';
import styles from "./Home.module.css";
import styles1 from "../../App.module.css";
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import vid from "../../components/Videos/vid.mp4"

const Home = () => {
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

    const NavList = [
        "All",
        "Python",
        "Java",
        "C++",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy",
        "All",
        "Python",
        "Java",
        "C++",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy",
    ]

    return (
        <div className={styles1.pagecontainer}>
            <Leftsidebar/>
            <div className={styles1.pagecontainer2}>
                <div className={styles.navigationhome}>
                    {
                        NavList.map(m => {
                            return (
                                <p key={m} className={styles.btnnavhome}>
                                    {m}
                                </p>
                            )
                        })
                    }
                </div>
                <ShowVideoGrid vids={vids}/>
            </div>
        </div>
    )
}

export default Home