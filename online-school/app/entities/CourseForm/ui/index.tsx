'use client'
import CourseProps from '../model/CourseProps';
import styles from './index.module.css';

export default function CourseForm(data: CourseProps) {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.placeIcon}>
                    <span className={styles.level}>{`${data.CountLessonCompleted} из ${data.CountLessonAll}`}</span>
                    <span className={styles.level}>{data.IsPurchased ? 'Приобретен' : 'Не приобретен'}</span>
                </div>
            </div>
            <div className={styles.medium}>
                <h3 className={styles.name}>{data.Name}</h3>
                <p className={styles.description}>{data.Description}</p>
                { data.IsPurchased ?
                    <>
                        <div className={styles.placeProgress}>
                            <p className={styles.progressText}>Ваш прогресс</p>
                            <p className={styles.progressPrecent}>{`${data.Progress ?? 0}%`}</p>
                        </div>
                        <div className={styles.progress}>
                            <div className={styles.progress__bar} style={{"width":`${data.Progress ?? 0}%`}}>
                            </div>
                        </div>
                    </>
                    :
                    <div className={styles.placeCountLesson}>
                        <p className={styles.countLessonText}>{`Количество уроков: ${data.CountLessonAll}`}</p>
                    </div>
                }
                <div className={styles.divider}></div>
            </div>

            <div className={styles.bottom}>
                <button className={styles.button}>
                    {data.IsPurchased ? "Продолжить" : "Купить"}
                    </button>
            </div>
        </div>
    )
}

