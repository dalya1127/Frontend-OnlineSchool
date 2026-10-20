import Comment from "./entities/comment/ui";
import News from "./entities/news/ui";
import VideoPlayer from "./entities/video/ui";


export default function Home() {
  return (
    <>
      <Comment Id={1} Text="Это комментарий" IdUser={1} Date="01.01.1111" IdLessons={1}></Comment>
      <News Date="18.10.2026" Text="Скоро откроется сайт для обучения от Далера и Альберта!" Id={1} LinkImage="https://habrastorage.org/getpro/moikrug/uploads/company/100/009/669/3/logo/big_816444e29afcf543ef05164353cdbbcb.png"/>
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
