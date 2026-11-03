'use client'

import HomeworkProps from "../model/HomeworkProps";
import styles from './index.module.css';

export default function Homework({ Name, Description, LinkFile }: HomeworkProps) {
    return (
        <div className={styles.homeworkWidget}>
            <div className={styles.header}>
                <span className={styles.badge}>Домашнее задание</span>
                <h3 className={styles.title}>{Name || "Задание без названия"}</h3>
            </div>

            {Description && (
                <div className={styles.descriptionPlace}>
                    <p className={styles.descriptionText}>{Description}</p>
                </div>
            )}

            {LinkFile && (
                <div className={styles.attachmentPlace}>
                    <div className={styles.fileCard}>
                        <a href={LinkFile} download className={styles.fileLink}>
                            Скачать материалы к ДЗ
                        </a>
                    </div>
                </div>
            )}

            <div className={styles.footer}>
                <button type="button" className={styles.submitButton}>
                    Сдать работу
                </button>
            </div>
        </div>
    );
}
