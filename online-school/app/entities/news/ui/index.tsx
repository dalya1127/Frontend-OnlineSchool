'use client'

import NewsProps from "../model/NewsProps";
import styles from './index.module.css';
import Image from "next/image";

export default function News(data: NewsProps){
    return (
        <div className={styles.main}>
            <div className={styles.imagePlace}>
                <Image className={styles.image} fill src={data.LinkImage} alt = ""/>
            </div>
            <div className={styles.textPlace}>
                <p className={styles.text}>{data.Text}</p>
            </div>
            <div className={styles.datePlace}>
                <p className={styles.date}>{data.Date}</p>
            </div>
        </div>
    );
}