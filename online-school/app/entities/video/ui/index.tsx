'use client';

import VideoProps from '../model/VideoProps';
import styles from './index.module.css'

export default function VideoPlayer(data : VideoProps) {
  return (
    <div className={styles.main}>
        <div className={styles.namePlace}>
            <p className={styles.name}>{data.Name}</p>
        </div>
      <video
        controls
        preload="metadata"
        className={styles.video}
        poster={data.LinkPic}
      >
        <source src={data.LinkVideo} type="video/mp4" />
      </video>
    </div>
  );
}