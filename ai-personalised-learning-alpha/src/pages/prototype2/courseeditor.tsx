import Button from "../../components/button";
import CourseDescriptionEditor from "../../components/coursedescriptioneditor";
import CourseEditorContents from "../../components/courseeditorcontent";
import CourseEditorTitleHeader from "../../components/courseeditortitleheader";
import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import SectionTextEditor from "../../components/sectiontexteditor";
import CourseEditorSectionTitle from "../../components/courseeditorsectiontitle";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { useRouter } from "next/router";
import { FrontEndCourse } from "../../..";
import CourseData from '../../components/courseData'
export default function CourseEditor() {
  const [courseTitle, setCourseTitle] = useState<string>("Course Title");
  const [loading, setLoading] = useState<boolean>(true);
  const [courseState, setCourseState] = useState<FrontEndCourse | null>();

  const router = useRouter();
  const { courseId } = router.query;

  const [courseDescription, setCourseDescription] = useState<string>(
    "Course Description Title"
  );
  const [sectionHeader, setSectionHeader] = useState<string>(
    "Section Header Title"
  );

  const updateCourseTitle = (title) => {
    if (title === "") {
      setCourseTitle("Course Title");
    } else setCourseTitle(title);
  };

  const updateCourseDescriptionTitle = (description) => {
    if (description === "") {
      setCourseDescription("Course Description Title");
    } else setCourseDescription(description);
  };

  const updateSectionHeaderTitle = (header: string) => {
    if (header === "") {
      setSectionHeader("Section Header Title");
    } else setSectionHeader(header);
  };

  const findExistingUserSession = api.findUser.findExistingUserSession.useQuery(
    {
      userid: global.localStorage?.getItem("userid") ?? "",
    }
  );


  useEffect(() => {
    localStorage.userid ? "" : router.push("./userinput");
  }, []);

  return  <CourseData />
}
