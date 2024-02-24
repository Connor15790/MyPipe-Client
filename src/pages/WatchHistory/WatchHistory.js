import React from 'react';

import vid from "../../components/Videos/vid.mp4"
import WHL from '../../components/WHL/WHL';

const WatchHistory = () => {
  const history = [
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
    <WHL page={"History"} videoList={history} />
  )
}

export default WatchHistory