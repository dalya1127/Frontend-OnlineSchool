'use client'
import HeaderProps from "../model/HeaderProps"
import styles from "./index.module.css"


export default function Header(data: HeaderProps) {
    return (
        <header className={styles.header}>
                <h1 className={styles.textPlace}>онлайн-школа</h1>
                
                {data.isRenderMenu==true ? <nav className={styles.buttonStyle}>
                    <p className={styles.buttonPlace} onClick={() => data.handlerClick(1)}>Главная</p>
                    <p className={styles.buttonPlace} onClick={() => data.handlerClick(2)}>Курсы</p>
                    <p className={styles.buttonPlace} onClick={() => data.handlerClick(3)}>Личный кабинет</p>
                    <p className={styles.buttonPlace} onClick={() => data.handlerClick(4)}>Домашнее задание</p>
                </nav>:<></>}
        </header>
    )
}