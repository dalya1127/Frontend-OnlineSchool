'use client'

import CommentProps from "../model/CommentProps";
import styles from './index.module.css';

export default function Comment(data: CommentProps){
    return (
        <div className={styles.main}>
            <div className={styles.textPlace}>
                <p className={styles.text}>{data.Text}</p>
            </div>
            <div className={styles.separation}></div>
            <div className={styles.footer}>
                <div className = {styles.userPlace}>
                    <h6 className={styles.nameUser}>Далер</h6>
                </div>
                <div className= {styles.datePlace}>
                    <p className={styles.date}>{data.Date}</p>
                </div>
            </div>
        </div>
    );
}