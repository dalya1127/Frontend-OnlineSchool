'use client'

import CommentProps from "../model/CommentProps";
import styles from './index.module.css';



function ReplyItem({ Text, Date }: { Text: string; Date: string }) {
    return (
        <div className={styles.replyCommentCard}>
            <div className={styles.main}>
                <div className={styles.textPlace}>
                    <p className={styles.text}>{Text}</p>
                </div>
                <div className={styles.separation}></div>
                <div className={styles.footer}>
                    <div className={styles.metaInfo}>
                        <div className={styles.userPlace}>
                            <span className={styles.nameUser}>Далер</span>
                        </div>
                        <div className={styles.datePlace}>
                            <p className={styles.date}>{Date}</p>
                        </div>
                    </div>
                    <button type="button" className={styles.replyButton}>
                        Ответить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Comment({ Text, Date, Comments }: CommentProps) {
    return (
        <div className={styles.commentWrapper}>
            <div className={styles.main}>
                <div className={styles.textPlace}>
                    <p className={styles.text}>{Text}</p>
                </div>
                <div className={styles.separation}></div>
                <div className={styles.footer}>
                    <div className={styles.metaInfo}>
                        <div className={styles.userPlace}>
                            <span className={styles.nameUser}>Далер</span>
                        </div>
                        <div className={styles.datePlace}>
                            <p className={styles.date}>{Date}</p>
                        </div>
                    </div>
                    
                    <button type="button" className={styles.replyButton}>
                        Ответить
                    </button>
                </div>
            </div>

            {Comments && Comments.length > 0 && (
                <div className={styles.replySection}>
                    {Comments.map((reply) => (
                        <ReplyItem 
                            key={reply.Id} 
                            Text={reply.Text} 
                            Date={reply.Date} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
