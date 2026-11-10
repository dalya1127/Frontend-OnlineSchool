'use client'
import HeaderProps from "../model/HeaderProps"
import styles from "./index.module.css"


export default function Header(data: HeaderProps) {
    return (
        <header className={styles.header}>
                <h1 className={styles.textPlace}>онлайн-школа</h1>
                
                {data.isRenderMenu==true ? <nav className={styles.buttonStyle}>
                    <p className={styles.buttonPlace}>Главная</p>
                    <p className={styles.buttonPlace}>Курсы</p>
                    <p className={styles.buttonPlace}>Личный кабинет</p>
                    <p className={styles.buttonPlace}>Домашнее задание</p>
                </nav>:<></>}
        </header>
    )
}