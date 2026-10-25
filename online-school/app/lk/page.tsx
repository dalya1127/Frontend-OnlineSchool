import styles from './page.module.css';
import Header from "../entities/Header/ui"
import Footer from "../entities/Footer/ui"
import Widget from "../entities/Widget/ui"
import NewsPlatform from '../Widgets/NewsPlatform';

export default function Lk() {
    return (
        <div className={styles.main}>
            <Header></Header>
            <Widget></Widget>
            <NewsPlatform></NewsPlatform>
            <Footer></Footer>
        </div>
    )
}