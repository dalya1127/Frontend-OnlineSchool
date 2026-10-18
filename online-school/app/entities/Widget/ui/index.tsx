'use client'
import styles from './index.module.css';

export default function AuthorizationForm() {
    return(
        <div className={styles.main}>
            <h1 className={styles.textPlace}>онлайн-школа</h1>
            <nav className={styles.buttonStyle}>
                <p className={styles.buttonPlace}>Главная</p>
                <p className={styles.buttonPlace}>Курсы</p>
                <p className={styles.buttonPlace}>Личный кабинет</p>
                <p className={styles.buttonPlace}>Домашнее задание</p>
            </nav>
        </div>
    )
}
    
