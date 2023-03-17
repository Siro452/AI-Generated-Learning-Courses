import Button from "../../components/button";
import CourseDescriptionEditor from "../../components/coursedescriptioneditor";
import CourseEditorContents from "../../components/courseeditorcontent";
import CourseEditorSectionHeader from "../../components/courseeditorsectionheader";
import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import SectionTextEditor from "../../components/sectiontexteditor";

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
      <div className="flex flex-row">
        <div className="flex w-[800px] flex-col">
          <CourseEditorSectionHeader placeholderTitle="Course Title" />
          <CourseDescriptionEditor />
          <CourseEditorSectionHeader placeholderTitle="Section Heading" />
          <SectionTextEditor />
        </div>
        <div className="ml-4 flex w-16 flex-col items-center">
          <CourseEditorContents />
          <Button text="Confirm" href="./confirmation" type="submit" />
        </div>
      </div>
    </div>
  );
}
