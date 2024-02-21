import React from 'react';
import Home from '../pages/Home/Home';
import Library from '../pages/Library/Library';
import LikedVideos from '../pages/LikedVideos/LikedVideos';
import WatchHistory from '../pages/WatchHistory/WatchHistory';
import WatchLater from '../pages/WatchLater/WatchLater';
import YourVideos from '../pages/YourVideos/YourVideos';
import VideoPage from '../pages/VideoPage/VideoPage';

import {
    Routes,
    Route
} from "react-router-dom";

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/library' element={<Library />} />
            <Route path='/likedvideos' element={<LikedVideos />} />
            <Route path='/watchhistory' element={<WatchHistory />} />
            <Route path='/watchlater' element={<WatchLater />} />
            <Route path='/yourvideos' element={<YourVideos />} />
            <Route path='/videopage/:vid' element={<VideoPage />} />
        </Routes>
    )
}

export default Allroutes;