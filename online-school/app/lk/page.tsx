'use client'

import styles from './page.module.css';
import Header from "../entities/Header/ui"
import Footer from "../entities/Footer/ui"
import NewsPlatform from '../Widgets/NewsPlatform';
import CoursePlatform from '../Widgets/CoursePlatform';
import { useState } from 'react';

export default function Lk() {
    const [state, SetState] = useState<Number>(1);

    return (
        <div className={styles.main}>
            <Header isRenderMenu = {true} handlerClick={SetState}></Header>
            {state == 1 ? <NewsPlatform></NewsPlatform> : <></>}
            {state == 2 ? <CoursePlatform></CoursePlatform> : <></>}
            <Footer></Footer>
        </div>
    )
}