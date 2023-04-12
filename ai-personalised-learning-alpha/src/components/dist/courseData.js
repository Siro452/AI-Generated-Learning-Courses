"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var button_1 = require("./button");
var coursedescriptioneditor_1 = require("./coursedescriptioneditor");
var courseeditorcontent_1 = require("./courseeditorcontent");
var courseeditortitleheader_1 = require("./courseeditortitleheader");
var headercontainer_1 = require("./headercontainer");
var logocontainer_1 = require("./logocontainer");
var sectiontexteditor_1 = require("./sectiontexteditor");
var courseeditorsectiontitle_1 = require("./courseeditorsectiontitle");
var loadingpage_1 = require("../pages/prototype2/loadingpage");
var CoursePage = function (_a) {
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(), courseState = _c[0], setCourseState = _c[1];
    var _d = react_1.useState(""), courseTitle = _d[0], setCourseTitle = _d[1];
    var _e = react_1.useState("Course Description Title"), courseDescription = _e[0], setCourseDescription = _e[1];
    var _f = react_1.useState("Section Header Title"), sectionHeader = _f[0], setSectionHeader = _f[1];
    var router = router_1.useRouter();
    var courseById = router.query.courseById;
    var updateCourseTitle = function () {
        if ((courseState === null || courseState === void 0 ? void 0 : courseState.title) === "") {
            setCourseTitle("Course Title");
        }
        else
            setCourseTitle(courseState.title || "");
    };
    var updateCourseDescriptionTitle = function (description) {
        if (description === "") {
            setCourseDescription("Course Description Title");
        }
        else
            setCourseDescription(description);
    };
    var updateSectionHeaderTitle = function (header) {
        if (header === "") {
            setSectionHeader("Section Header Title");
        }
        else
            setSectionHeader(header);
    };
    var getCourseData = function () {
        setLoading(true);
        setTimeout(function (returnedValuesFromDatabase) {
            var frontEndCourse = {
                title: (courseState === null || courseState === void 0 ? void 0 : courseState.title) || "Course Title",
                description: (courseState === null || courseState === void 0 ? void 0 : courseState.description) || "Course description",
                sectionNodes: (courseState === null || courseState === void 0 ? void 0 : courseState.sectionNodes) || []
            };
            setCourseState(frontEndCourse);
            setLoading(false);
        }, 1000);
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
    react_1.useEffect(function () {
        // if (courseById) {
        getCourseData();
        // }
        localStorage.userid
            ? console.log("id is here")
            : router.push("../prototype2/userinput");
    }, []);
    // const getCourse = api.findCourse.courseById.useQuery()
    // console.log(getCourse)
    return loading ? (react_1["default"].createElement("div", null,
        react_1["default"].createElement(loadingpage_1["default"], null))) : (react_1["default"].createElement("div", null, courseState && (react_1["default"].createElement("div", { className: "flex flex-col items-center" },
        react_1["default"].createElement(logocontainer_1["default"], { className: "self-start" }),
        react_1["default"].createElement(headercontainer_1["default"], { smallTitle: "Edit your course", 
            // largeTitle={`Hi, ${findExistingUserSession.data?.username}`}
            largeTitle: "Hi", alignment: "self-start", flexDirection: "flex-col-reverse" }),
        react_1["default"].createElement("div", { className: "flex w-3/4 flex-row" },
            react_1["default"].createElement("div", { className: "flex h-full w-3/4 flex-col" },
                react_1["default"].createElement(courseeditortitleheader_1["default"], { placeholderTitle: courseState.title, title: updateCourseTitle }),
                react_1["default"].createElement(coursedescriptioneditor_1["default"], { placeholderTitle: "Course Description", updateCourseDescription: updateCourseDescriptionTitle }),
                react_1["default"].createElement(courseeditorsectiontitle_1["default"], { placeholderTitle: sectionHeader, sectionTitle: updateSectionHeaderTitle }),
                react_1["default"].createElement(sectiontexteditor_1["default"], null)),
            react_1["default"].createElement("div", { className: "ml-4 flex w-16 flex-col items-center" },
                react_1["default"].createElement(courseeditorcontent_1["default"], { courseTitle: courseTitle, courseDescription: courseDescription, sectionHeader: sectionHeader }),
                react_1["default"].createElement(button_1["default"], { text: "Confirm", href: "./confirmation", type: "submit" })))))));
};
exports["default"] = CoursePage;
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
