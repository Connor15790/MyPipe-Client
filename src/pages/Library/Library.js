import React from 'react';
import styles from "./Library.module.css";
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';
import styles1 from "../../App.module.css";
import vid from "../../components/Videos/vid.mp4";
import { FaHistory } from "react-icons/fa";
import WHLVideoList from '../../components/WHL/WHLVideoList';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';

const Library = () => {
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
        <div className={styles.librarycontainer}>
          <h1 className={styles.titlecontainer}>
            <b>
              <FaHistory/>
            </b>
            <b>History</b>
          </h1>
          <div className={styles.videolistcontainer}>
            <WHLVideoList page={"History"} videoList={vids}/>
          </div>
        </div>

        <div className={styles.librarycontainer}>
          <h1 className={styles.titlecontainer}>
            <b>
              <MdOutlineWatchLater/>
            </b>
            <b>Watch Later</b>
          </h1>
          <div className={styles.videolistcontainer}>
            <WHLVideoList page={"Watch Later"} videoList={vids}/>
          </div>
        </div>

        <div className={styles.librarycontainer}>
          <h1 className={styles.titlecontainer}>
            <b>
              <AiOutlineLike/>
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className={styles.videolistcontainer}>
            <WHLVideoList page={"Liked Videos"} videoList={vids}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library