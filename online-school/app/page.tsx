import Image from "next/image";
import AuthorizationForm from "./entities/AuthorizationFrom/ui";
import Widget from "./entities/Widget/ui";
import CourseForm from "./entities/CourseForm/ui"
import Lecture from "./entities/Lecture/ui";
import Lesson from "./entities/Lesson/ui";

export default function Home() {
  return (
    <>
    <AuthorizationForm></AuthorizationForm>
    <Widget></Widget>
    <CourseForm></CourseForm>
    <Lecture></Lecture>
    <Lesson></Lesson>
    </>
  );
}

