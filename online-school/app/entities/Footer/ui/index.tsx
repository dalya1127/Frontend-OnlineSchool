'use client'
import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <span className={styles.brand}>
                    онлайн-школа<span className={styles.brandDot}>.</span>
                </span>
                <Link href="/support" className={styles.link}>Поддержка</Link>
            </div>
        </footer>
    );
}