import Comment from "./entities/comment/ui";
import News from "./entities/news/ui";


export default function Home() {
  return (
    <>
      <Comment Id={1} Text="Это комментарий" IdUser={1} Date="01.01.1111" IdLessons={1}></Comment>
      <News Date="18.10.2026" Text="Скоро откроется сайт для обучения от Далера и Альберта!" Id={1} LinkImage="https://habrastorage.org/getpro/moikrug/uploads/company/100/009/669/3/logo/big_816444e29afcf543ef05164353cdbbcb.png"/>
    </>
    );
}
