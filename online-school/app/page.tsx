import AuthorizationForm from "./entities/AuthorizationFrom/ui";
import CourseForm from "./entities/CourseForm/ui"
import Lecture from "./entities/Lecture/ui";
import Lesson from "./entities/Lesson/ui";
import Comment from "./entities/comment/ui";
import News from "./entities/news/ui";
import VideoPlayer from "./entities/video/ui";
import CourseProps from "./entities/CourseForm/model/CourseProps";
import Footer from "./entities/Footer/ui";
import Homework from "./entities/Homework/ui";
import CommentProps from "./entities/comment/model/CommentProps";


const testCourse1: CourseProps = {
    Name: 'Разработка Бекенд приложений',
    Description: 'Используя современное решение - платформу ASP.NET, вы сможете реализовать полноценное высоконагруженное API!',
    IsPurchased: true,
    CountLessonAll: 15,
    Progress: 75,
    CountLessonCompleted: 5
}
const testCourse2: CourseProps = {
    Name: 'Разработка Фронтенд приложений',
    Description: 'Внешний вид - решает все! Реализуйте современное решение для веба!',
    IsPurchased: true,
    CountLessonAll: 10,
    Progress: 51,
    CountLessonCompleted: 1
}
const testCourse3: CourseProps = {
    Name: 'Разработка баз данных',
    Description: 'Хранение информации - ключ к достижению скорости работы! Научись использовать эту катану в мире IT!',
    IsPurchased: false,
    CountLessonAll: 15,
    Progress: 0,
    CountLessonCompleted: 0
}

const mockComments: CommentProps[] = [
    {
        Id: 1,
        Text: "коммент 1",
        IdUser: 1,
        IdLessons: 2,
        Date: "11.11.2010",
        Comments: []
    },
    {
        Id: 1,
        Text: "коммент 2",
        IdUser: 1,
        IdLessons: 2,
        Date: "11.11.2010",
        Comments: [{
            Id: 1,
            Text: "ответ на коммент 2",
            IdUser: 1,
            IdLessons: 2,
            Date: "11.11.2010",
            Comments: []
        }]
    }
    ,

]



export default function Home() {
    return (
        <>
            <AuthorizationForm></AuthorizationForm>
            <CourseForm
                Name="Курс 1"
                Description="новый курс"
                IsPurchased={true}
                CountLessonAll={2}
            ></CourseForm>
            <Lecture></Lecture>
            <Footer></Footer>
            <Lesson></Lesson>
            <Homework
                Id={1}
                Name="Практическая работа 1. Основы верстки"
                Description="Создайте простую страницу, добавьте заголовок, текст, картинку и ссылку. Стилизуйте заголовок и текст."
                LinkFile="/docs/hw-template-1.zip"
            />

            {mockComments.map((item) => (
                <Comment
                    key={item.Id}
                    Id={item.Id}
                    IdUser={item.IdUser}
                    IdLessons={item.IdLessons}
                    Date={item.Date}
                    Text={item.Text}
                    Comments={item.Comments}
                />
            ))}

            <News Date="18.10.2026" Text="Скоро откроется сайт для обучения от Далера и Альберта!" Id={1} LinkImage="https://habrastorage.org" />
            <VideoPlayer
                Id={1}
                Name="Урок №1"
                LinkPic="https://gstatic.com"
                LinkVideo="blob:https://vkvideo.ru"
            >
            </VideoPlayer>
        </>
    );
}
