import React, { useState } from 'react';
import styles from "./Comments.module.css"
import DisplayComments from './DisplayComments';

const Comments = () => {
    const [commentText, setCommentText] = useState("");

    const commentList = [
        {
            _id: "1",
            commentbody: "hello",
            usercommented: "abc"
        },
        {
            _id: "2",
            commentbody: "hiii",
            usercommented: "xyz"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className={styles.commentssubform} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Add comment...'
                    className={styles.commentibox}
                    onChange={e => setCommentText(e.target.value)} />
                <input type="submit" value="add" className={styles.commentaddbtn} />
            </form>

            <div className={styles.dispcommentcontainer}>
                {
                    commentList.map(m => {
                        return (
                            <DisplayComments
                                cid={m._id}
                                commentbody={m.commentbody}
                                usercommented={m.usercommented}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Comments