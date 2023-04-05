import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FrontEndCourse } from "../..";
// import { Data } from "./api/input"

import Button from "./button";
import CourseDescriptionEditor from "./coursedescriptioneditor";
import CourseEditorContents from "./courseeditorcontent";
import CourseEditorTitleHeader from "./courseeditortitleheader";
import HeaderContainer from "./headercontainer";
import LogoContainer from "./logocontainer";
import SectionTextEditor from "./sectiontexteditor";
import CourseEditorSectionTitle from "./courseeditorsectiontitle";
import { api } from "../utils/api";

const CoursePage: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [courseState, setCourseState] = useState<FrontEndCourse | null>();
  const [courseTitle, setCourseTitle] = useState<string>("");
  const [courseDescription, setCourseDescription] = useState<string>(
    "Course Description Title"
  );
  const [sectionHeader, setSectionHeader] = useState<string>(
    "Section Header Title"
  );
  const router = useRouter();
  const { courseById } = router.query;

  // const getCourseData2 = async () => {
  //   setLoading(true);
  //   const response = await fetch(`/api/courses/${courseById}`);
  //   const data = await response.json();
  //   console.log(data)
  //   setCourseState(data);
  //   setLoading(false);
  // };

  const updateCourseTitle = () => {
    if (courseState?.title === "") {
      setCourseTitle("Course Title");
    } else setCourseTitle(courseState.title || "");
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

  const getCourseData = () => {
    setLoading(true);
    setTimeout((returnedValuesFromDatabase) => {
      setCourseState({
        title: "My cool course",
        description: "This is a cool course about cool things",
        sectionNodes: [
          {
            title: "Section 1",
            articles: [
              {
                title: "courseState.title",
                content: "courseState.description",
              },
            ],
          },
          {
            title: "Section 2",
            articles: [
              {
                title: "Article Two",
                content: "This is a fun article about not a lot",
              },
            ],
          },
          {
            title: "Article Three",
            articles: [
              {
                title: "Article Three",
                content: "This is a fun article about not a lot",
              },
              {
                title: "Article Four",
                content: "This is a fun article about not a lot",
              },
            ],
          },
        ],
      });
      setLoading(false);
    }, 1000);
  };

  // const frontEndCourse: FrontEndCourse ={
  //   title: courseState.title,
  //   description: courseState.description,
  //   sectionNodes: courseState.sectionNodes
  // }

  useEffect(() => {
    // check localStorage
    // if no userId present router.push("/login")

    // if (courseById) {
      getCourseData();
    // }

    localStorage.userid
      ? console.log("id is here")
      : router.push("../prototype2/userinput");
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {courseState && (
        <div className="flex flex-col items-center">
          <LogoContainer className="self-start" />
          <HeaderContainer
            smallTitle="Edit your course"
            // largeTitle={`Hi, ${findExistingUserSession.data?.username}`}
            largeTitle={`Hi`}
            alignment="self-start"
            flexDirection="flex-col-reverse"
          />
          <div className="flex w-3/4 flex-row">
            <div className="flex h-full w-3/4 flex-col">
              <CourseEditorTitleHeader
                placeholderTitle={courseState.title}
                title={updateCourseTitle}
              />
              <CourseDescriptionEditor
                placeholderTitle={"Course Description"}
                updateCourseDescription={updateCourseDescriptionTitle}
              />
              <CourseEditorSectionTitle
                placeholderTitle={sectionHeader}
                sectionTitle={updateSectionHeaderTitle}
              />
              <SectionTextEditor />
            </div>
            <div className="ml-4 flex w-16 flex-col items-center">
              <CourseEditorContents
                courseTitle={courseTitle}
                courseDescription={courseDescription}
                sectionHeader={sectionHeader}
              />
              <Button text="Confirm" href="./confirmation" type="submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;

// {courseState && (
//   <div>
//     <div>{courseState.title}</div>
//     <div>{courseState.description}</div>
//     <div>
//       {courseState.sectionNodes.map((node) => {
//         return (
//           <div>
//             <div>{node.title}</div>
//             <div>
//               {node.articles.map((article) => {
//                 return (
//                   <div>
//                     <div>{article.title}</div>
//                     <div>{article.content}</div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         )
//       })}
//     </div>

//   </div>
