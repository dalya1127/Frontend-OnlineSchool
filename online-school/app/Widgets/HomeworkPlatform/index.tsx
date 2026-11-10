import styles from './index.module.css';
import Homework from "@/app/entities/Homework/ui";
import HomeworkProps from "@/app/entities/Homework/model/HomeworkProps";

const courses: HomeworkProps[] = [
    {
        Id: 1,
        Name: 'Разработка Бекенд приложений',
        Description: 'Используя современное решение - платформу ASP.NET, вы сможете реализовать полноценное высоконагруженное API!',
        LinkFile: "www"
    },
    {
        Id: 2,
        Name: 'Разработка фронтенд приложений',
        Description: 'Используя современное решение - платформу ASP.NET, вы сможете реализовать полноценное высоконагруженное API!',
        LinkFile: "www"
    },
    {
        Id: 3,
        Name: 'Разработка езе приложений',
        Description: 'Используя современное решение - платформу ASP.NET, вы сможете реализовать полноценное высоконагруженное API!',
        LinkFile: "www"
    }
]
export default function HomeworkPlatform() {
    return (
        <div className={styles.news}>
            {courses.map(x=>
                <Homework
                    key ={x.Id}
                    Id = {x.Id}
                    Name={x.Name}
                    Description={x.Description}
                    LinkFile={x.LinkFile}
                    >
                </Homework>
            )}
        </div>
    )
}