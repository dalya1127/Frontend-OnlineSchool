import NewsProps from "@/app/entities/news/model/NewsProps"
import News from "../../entities/news/ui"
import styles from './index.module.css';
import CourseForm from "@/app/entities/CourseForm/ui";
import CourseProps from "@/app/entities/CourseForm/model/CourseProps";

const courses: CourseProps[] = [
    {
        Id: 1,
        Name: 'Разработка Бекенд приложений',
        Description: 'Используя современное решение - платформу ASP.NET, вы сможете реализовать полноценное высоконагруженное API!',
        IsPurchased: true,
        CountLessonAll: 15,
        Progress: 75,
        CountLessonCompleted: 5
    },
    {
        Id: 2,
        Name: 'Разработка Фронтенд приложений',
        Description: 'Внешний вид - решает все! Реализуйте современное решение для веба!',
        IsPurchased: true,
        CountLessonAll: 10,
        Progress: 51,
        CountLessonCompleted: 1
    }
    ,
    {
        Id: 3,
        Name: 'Разработка баз данных',
        Description: 'Хранение информации - ключ к достижению скорости работы! Научись использовать эту катану в мире IT!',
        IsPurchased: false,
        CountLessonAll: 15,
        Progress: 0,
        CountLessonCompleted: 0
    }
]
export default function CoursePlatform() {
    return (
        <div className={styles.news}>
            {courses.map(x=>
                <CourseForm
                    Id = {x.Id}
                    key={x.Id} 
                    Name={x.Name}
                    IsPurchased={x.IsPurchased}
                    CountLessonAll={x.CountLessonAll}
                    CountLessonCompleted={x.CountLessonCompleted}
                    Progress={x.Progress}
                    Description={x.Description}
                    >
                </CourseForm>
            )}
        </div>
    )
}