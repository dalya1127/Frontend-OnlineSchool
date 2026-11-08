import Image from "next/image";
import AuthorizationForm from "./entities/AuthorizationFrom/ui";
import Widget from "./entities/Widget/ui";
import CourseForm from "./entities/CourseForm/ui"
import Lecture from "./entities/Lecture/ui";
import Lesson from "./entities/Lesson/ui";
import Comment from "./entities/comment/ui";
import News from "./entities/news/ui";
import VideoPlayer from "./entities/video/ui";
import CourseProps from "./entities/CourseForm/model/CourseProps";

const testCourse1 : CourseProps = {
  Name: 'Разработка Бекенд приложений',
  Description: 'Используя современное решение - платформу ASP.NET, вы сможете реализовать полноценное высоконагруженное API!',
  IsPurchased: true,
  CountLessonAll: 15,
  Progress: 75,
  CountLessonCompleted: 5
}
const testCourse2 : CourseProps = {
  Name: 'Разработка Фронтенд приложений',
  Description: 'Внешний вид - решает все! Реализуйте современное решение для веба!',
  IsPurchased: true,
  CountLessonAll: 10,
  Progress: 51,
  CountLessonCompleted: 1
}
const testCourse3 : CourseProps = {
  Name: 'Разработка баз данных',
  Description: 'Хранение информации - ключ к достижению скорости работы! Научись использовать эту катану в мире IT!',
  IsPurchased: false,
  CountLessonAll: 15,
  Progress: 0,
  CountLessonCompleted: 0
}
export default function Home() {
  return (
    <>
    <AuthorizationForm></AuthorizationForm>
    <Widget></Widget>
    <CourseForm 
          Name={testCourse1.Name}
          Description={testCourse1.Description}
          LincPic={testCourse1.LincPic}
          IsPurchased={testCourse1.IsPurchased}
          CountLessonAll={testCourse1.CountLessonAll}
          CountLessonCompleted={testCourse1.CountLessonCompleted}
          Progress={testCourse1.Progress}
      >
    </CourseForm>
    <CourseForm 
          Name={testCourse2.Name}
          Description={testCourse2.Description}
          LincPic={testCourse2.LincPic}
          IsPurchased={testCourse2.IsPurchased}
          CountLessonAll={testCourse2.CountLessonAll}
          CountLessonCompleted={testCourse2.CountLessonCompleted}
          Progress={testCourse2.Progress}
      ></CourseForm>
    <CourseForm 
          Name={testCourse3.Name}
          Description={testCourse3.Description}
          LincPic={testCourse3.LincPic}
          IsPurchased={testCourse3.IsPurchased}
          CountLessonAll={testCourse3.CountLessonAll}
          CountLessonCompleted={testCourse3.CountLessonCompleted}
          Progress={testCourse3.Progress}
      ></CourseForm>
    <Lecture></Lecture>
    <Lesson></Lesson>
      <Comment Id={1} Text="Это комментарий" IdUser={1} Date="01.01.1111" IdLessons={1}></Comment>
      <News Date="18.10.2026" Text="Скоро откроется сайт для обучения от Далера и Альберта!" Id={1} LinkImage="https://habrastorage.org/getpro/moikrug/uploads/company/100/009/669/3/logo/big_816444e29afcf543ef05164353cdbbcb.png"/>
      <News isReaded={true} Date="18.10.2026" Text="Скоро откроется сайт для обучения от Далера и Альберта!" Id={1} LinkImage="https://habrastorage.org/getpro/moikrug/uploads/company/100/009/669/3/logo/big_816444e29afcf543ef05164353cdbbcb.png"/>
      <VideoPlayer 
        Id = {1} 
        Name="Тестовое название видео" 
        LinkPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzCFy3DM3HkiXHu5FeQHyClzyE08FAzCKw5fFvtKYvx0AIzMXFLcrgKy1&s=10" 
        LinkVideo="blob:https://vkvideo.ru/babf4853-825e-4c84-ba1c-b798f2d76691"
      >
      </VideoPlayer>  
    </>
    );
}
