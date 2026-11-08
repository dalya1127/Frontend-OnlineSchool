import Image from "next/image";
import AuthorizationForm from "./entities/AuthorizationFrom/ui";
import CourseForm from "./entities/CourseForm/ui"
import Lecture from "./entities/Lecture/ui";
import Lesson from "./entities/Lesson/ui";
import Comment from "./entities/comment/ui";
import News from "./entities/news/ui";
import VideoPlayer from "./entities/video/ui";
import Footer from "./entities/Footer/ui";
import Homework from "./entities/Homework/ui";

const mockComments = [
    {
        Id: 1,
        IdUser: 1,
        IdLessons: 1,
        Date: "03.11.2026",
        Text: "Первый коммент",
        Comments: [
            {
                Id: 2,
                IdUser: 2,
                IdLessons: 1,
                Date: "03.11.2026",
                Text: "Ответ на первый коммент",
                Comments: []
            }
        ]
    }
];

export default function Home() {
    return (
        <>
            <AuthorizationForm></AuthorizationForm>
            <CourseForm></CourseForm>
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
