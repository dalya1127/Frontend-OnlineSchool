'use client'
import styles from './index.module.css';
import logo from './../../../../public/logo.png';
import Image from 'next/image';

export default function AuthorizationForm() {
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <Image src={logo} alt="Онлайн Школа" className={styles.image} />
                <p>Авторизация</p>
            </div>
            <div className={styles.middle}>
                <input type='text' placeholder='login or email' className={styles.emailPlace}></input>
                <input type='text' placeholder='password' className={styles.passwordPlace}></input>
                <button className={styles.button}>Войти</button>
            </div>
            <div className={styles.foot}>
                <div className={styles.downPlace}>
                    <a href='' className={styles.linkUpdatePassword}><u>Не помню пароль</u>
                    </a>
                    <div className={styles.registrationPlace}>
                        <p className={styles.downSpace}>Нет профиля?</p>
                        <a href=''><u>Зарегистрируйтесь</u></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
