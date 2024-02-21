import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import styles from "./LikeDislikebtns.module.css"
import { MdPlaylistAddCheck } from 'react-icons/md';
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const LikeDislikebtns = () => {
    const [saveVideo, setSaveVideo] = useState(false);
    const [dislikeBtn, setDislikeBtn] = useState(false);
    const [likeBtn, setLikeBtn] = useState(false);

    const toggleSavedVideo = () => {
        if (saveVideo) {
            setSaveVideo(false);
        } else {
            setSaveVideo(true);
        }
    }

    const toggleLikeBtn = () => {
        if (likeBtn) {
            setLikeBtn(false);
        } else {
            setLikeBtn(true);
        }
    }

    const toggleDislikeBtn = () => {
        if (dislikeBtn) {
            setDislikeBtn(false);
        } else {
            setDislikeBtn(true);
        }
    }

    return (
        <div className={styles.btnscontainer}>
            <div className={styles.btn}>
                <BsThreeDots />
            </div>

            <div className={styles.btn}>
                <div className={styles.like} onClick={() => toggleLikeBtn()}>
                    {
                        likeBtn ? <>
                            <AiFillLike size={22} className={styles.btns} />
                        </> : <>
                            <AiOutlineLike size={22} className={styles.btns} />
                        </>
                    }
                    <b>1</b>
                </div>

                <div className={styles.like} onClick={() => toggleDislikeBtn()}>
                    {
                        dislikeBtn ? <>
                            <AiFillDislike size={22} className={styles.btns} />
                        </> : <>
                            <AiOutlineDislike size={22} className={styles.btns} />
                        </>
                    }
                    <b>DISLIKE</b>
                </div>

                <div className={styles.like} onClick={() => toggleSavedVideo()}>
                    {
                        saveVideo ? <>
                            <MdPlaylistAddCheck size={22} className={styles.btns} />
                            <b>Saved</b>
                        </> : <>
                            <RiPlayListAddFill size={22} className={styles.btns} />
                            <b>Save</b>
                        </>
                    }
                </div>

                <div className={styles.like}>
                    <>
                        <RiHeartAddFill size={22} className={styles.btns} />
                        <b>Thanks</b>
                    </>
                </div>

                <div className={styles.like}>
                    <>
                        <RiShareForwardLine size={22} className={styles.btns} />
                        <b>Share</b>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LikeDislikebtns