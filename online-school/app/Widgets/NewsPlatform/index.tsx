import NewsProps from "@/app/entities/news/model/NewsProps"
import News from "../../entities/news/ui"
import styles from './index.module.css';


const news: NewsProps[] = [
    {
        Id:5,
        Text:"новости",
        LinkImage:"https://news.mail.ru/social_preview/index/",
        Date:"11.11"
    },
    {
        Id:2,
        Text:"новости другие",
        LinkImage:"https://news.mail.ru/social_preview/index/",
        Date:"33.33"
    },
    {
        Id:3,
        Text:"новости еще",
        LinkImage:"https://news.mail.ru/social_preview/index/",
        Date:"11.11"
    }
]
export default function NewsPlatform() {
    return (
        <div className={styles.news}>
            {news.map(x=>
                <News key={x.Id} Id={x.Id} Text={x.Text} LinkImage={x.LinkImage}
                Date={x.Date}></News>
            )}
        </div>
    )
}