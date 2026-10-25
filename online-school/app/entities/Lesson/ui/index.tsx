'use client'
import styles from "./index.module.css"

export default function Lesson() {
    return (
        <div className={styles.lessonsWidget}>
            <h3 className={styles.widgetTitle}>Программа уроков</h3>

            <div className={styles.lessonsSection}>
                <div className={styles.lessonCard} >
                    <div className={styles.lessonInfo}>
                        <span className={styles.lessonNum}>Урок 1.</span>
                        <span className={styles.lessonName}>Введение в веб-разработку</span>
                    </div>
                </div>

                <div className={styles.lessonCard}>
                    <div className={styles.lessonInfo}>
                        <span className={styles.lessonNum}>Урок 2.</span>
                        <span className={styles.lessonName}>Основы работы с HTML и тегами</span>
                    </div>
                </div>
                <div className={styles.lessonCard}>
                    <div className={styles.lessonInfo}>
                        <span className={styles.lessonNum}>Урок 3.</span>
                        <span className={styles.lessonName}>Стилизация элементов через CSS</span>
                    </div>
                </div>
            </div>
        </div>


    )
}