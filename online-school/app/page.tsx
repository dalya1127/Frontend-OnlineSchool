import Image from "next/image";
import Comment from "./entities/comment/ui";


export default function Home() {
  return (
    <Comment Id={1} Text="Это комментарий" IdUser={1} Date="01.01.1111" IdLessons={1}></Comment>
  );
}
