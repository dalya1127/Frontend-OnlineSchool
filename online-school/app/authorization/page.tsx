import styles from './page.module.css';
import AuthorizationForm from "../entities/AuthorizationFrom/ui"
import Header from "../entities/Header/ui"
import Footer from "../entities/Footer/ui"


export default function Authorization(){
    return(
        <div className={styles.main}>
        <Header></Header>
        <AuthorizationForm></AuthorizationForm>
        <Footer></Footer>
        </div>
    )
}