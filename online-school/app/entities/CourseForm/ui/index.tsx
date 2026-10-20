'use client'
import styles from './index.module.css';

export default function CourseForm() {
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <h2 className={styles.textPlace1}>Курс по Frontend разработке</h2>
                <p className={styles.textPlace2}>Оформление подписки на курс</p>
                <div className={styles.descriptionBox}>
                    <p>40 часов практики и созвоны с ментором</p>
                    <p>Доступ к закрытому чату навсегда</p>
                </div>
            </div>

            <div className={styles.middle}>
                <div className={styles.priceContainer}>
                    <span className={styles.oldPrice}>7 500 ₽</span>
                    <span className={styles.newPrice}>4 900 ₽</span>
                </div>       
                <button type="button" className={styles.button}>Купить курс</button>
            </div>

            <div className={styles.foot}>
                <div className={styles.downPlace}>
                    <a href="#" className={styles.cancel}><u>Вернуться назад</u></a>
                </div>
            </div>
        </div>
    )
}
