import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";

export default function CourseEditor() {
  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />
      <HeaderContainer
        smallTitle="Edit your course"
        largeTitle="Hi, User"
        alignment="place-self-start"
        flexDirection="flex-col-reverse "
      />
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
