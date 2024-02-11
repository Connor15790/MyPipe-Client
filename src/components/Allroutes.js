import React from 'react';
import Home from '../pages/Home/Home';
import Library from '../pages/Library/Library';

import {
    Routes,
    Route
} from "react-router-dom";

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/library' element={<Library />} />
        </Routes>
    )
}

export default Allroutes;