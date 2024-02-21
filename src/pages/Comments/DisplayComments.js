import React, { useState } from 'react';
import styles from "./Comments.module.css"

const DisplayComments = ({ cid, commentbody, usercommented }) => {
    const[edit, setEdit] = useState(false);
    const [commentBody, setCommentBody] = useState("");

    const handleEdit = (ctId, ctBdy) => {
        setEdit(true);
        setCommentBody(ctBdy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    }

    return (
        <>
            {
                edit ? (<>
                    <form className={styles.commentssubform} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Edit comment...'
                            className={styles.commentibox}
                            value={commentBody}
                            onChange={e => setCommentBody(e.target.value)} />
                        <input type="submit" value="Change" className={styles.commentaddbtn} />
                    </form>
                </>) : (
                    <p className={styles.commentbody}>{commentbody}</p>
                )
            }
            <p className={styles.usercommented}>- {usercommented} commented</p>
            <p className={styles.editdelbtns}>
                <i onClick={() => handleEdit(cid, commentbody)}>Edit</i>
                <i>Delete</i>
            </p>
        </>
    )
}

export default DisplayComments