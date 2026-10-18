import Image from "next/image";
import AuthorizationForm from "./entities/AuthorizationFrom/ui";
import Widget from "./entities/Widget/ui";

export default function Home() {
  return (
    <>
    <AuthorizationForm></AuthorizationForm>
    <Widget></Widget>
    </>
  );
}

