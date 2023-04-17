import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FrontEndCourse } from "../..";
// import { Data } from "./api/input"
import { api } from "../utils/api";
import Button from "./button";
import CourseDescriptionEditor from "./coursedescriptioneditor";
import CourseEditorContents from "./courseeditorcontent";
import CourseEditorTitleHeader from "./courseeditortitleheader";
import HeaderContainer from "./headercontainer";
import LogoContainer from "./logocontainer";
import SectionTextEditor from "./sectiontexteditor";
import CourseEditorSectionTitle from "./courseeditorsectiontitle";
import LoadingPage from "../pages/prototype2/loadingpage";
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

  // do the api query to access the course ID

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
      const frontEndCourse: FrontEndCourse = {
        title: courseState?.title || "Course Title",
        description: courseState?.description || "Course description",
        sectionNodes: courseState?.sectionNodes || [],
      };
      setCourseState(frontEndCourse);
      setLoading(false);
    }, 1000);

    // const mutateData = api.receivedData.mutateData.useMutation({
    //   onSuccess: (data) => {
    //     console.log(data);
    //     const frontEndCourse: FrontEndCourse = {
    //       title: data.id,
    //       description: data.userid,
    //       sectionNodes:  sectionNodes: [
    //         //     {
    //         //       title: "Section 1",
    //         //       articles: [
    //         //         {
    //         //           title: "courseState.title",
    //         //           content: "courseState.description",
    //         //         },
    //         //       ],
    //         //     },,

    //     }
    //   },
    // });

    // setCourseState({
    //   title: "My cool course",
    //   description: "This is a cool course about cool things",
    //   sectionNodes: [
    //     {
    //       title: "Section 1",
    //       articles: [
    //         {
    //           title: "courseState.title",
    //           content: "courseState.description",
    //         },
    //       ],
    //     },
    //       {
    //         title: "Section 2",
    //         articles: [
    //           {
    //             title: "Article Two",
    //             content: "This is a fun article about not a lot",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Article Three",
    //         articles: [
    //           {
    //             title: "Article Three",
    //             content: "This is a fun article about not a lot",
    //           },
    //           {
    //             title: "Article Four",
    //             content: "This is a fun article about not a lot",
    //           },
    //         ],
    //       },
    //     ],
    //   });
    //   setLoading(false);
    // }, 1000);
  };

  useEffect(() => {
    // if (courseById) {
    getCourseData();
    // }

    localStorage.userid
      ? console.log("id is here")
      : router.push("../prototype2/userinput");
  }, []);

  // const getCourse = api.findCourse.courseById.useQuery()

  // console.log(getCourse)

  return loading ? (
    <div>
      <LoadingPage />
    </div>
  ) : (
    <div>
      {courseState && (
        <div className="flex flex-col items-center">
          <LogoContainer className="mt-4 self-start" />
          <HeaderContainer
            smallTitle="Edit your course"
            // largeTitle={`Hi, ${findExistingUserSession.data?.username}`}
            largeTitle={`Hi`}
            alignment="self-start"
            flexDirection="flex-col-reverse"
            mx="mx-20"
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
                questiontitle=""
              />
              <Button
                text="Confirm"
                href="../prototype2/confirmation"
                type="submit"
              />
              <Button
                text="Confirm"
                href="../prototype2/confirmation"
                type="submit"
              />
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
