import React from 'react';
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import vid from "../../components/Videos/vid.mp4";
import styles from "./YourVideos.module.css";
import styles1 from "../../App.module.css";

const YourVideos = () => {
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
    <div className={styles1.pagecontainer}>
      <Leftsidebar />
      <div className={styles1.pagecontainer2}>
        <div className={styles.yourvideoscontainer}></div>
        <h1>Your Videos</h1>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default YourVideos