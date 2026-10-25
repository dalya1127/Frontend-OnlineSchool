'use client'
import styles from "./index.module.css"
import Image from 'next/image';
import shema from './../../../../public/shema.png';

export default function Lecture() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Урок 1. Введение в веб-разработку</h1>
            <div className={styles.textContainer}>
                <p>
                    Веб-разработка — это процесс создания веб-сайтов и приложений.
                    Она включает в себя верстку страниц, программирование логики на стороне
                    клиента и сервера, а также настройку баз данных.
                </p>
                <figure className={styles.imageContainer}>
                    <Image src={shema} alt="Онлайн Школа" className={styles.image} />
                    <figcaption className={styles.caption}>
                        Рис 1. Взаимодействие клиентов, интернета, сервера и базы данных
                    </figcaption>
                </figure>

                <section className={styles.attachments}>
                    <h2 className={styles.attachmentsTitle}>Материалы к лекции</h2>
                    <div className={styles.fileGrid}>


                        <div className={styles.fileCard}>
                            <div className={styles.fileIcon}></div>
                            <div className={styles.fileDetails}>
                                <a href="/docs/lecture-1.pdf" download className={styles.fileLink}>
                                    Конспект лекции.pdf
                                </a>
                            </div>
                        </div>


                        <div className={styles.fileCard}>
                            <div className={styles.fileIcon}></div>
                            <div className={styles.fileDetails}>
                                <a href="/docs/presentation-1.pptx" download className={styles.fileLink}>
                                    Презентация.pptx
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}
