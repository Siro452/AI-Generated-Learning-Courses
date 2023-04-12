"use strict";
exports.__esModule = true;
var react_1 = require("react");
var api_1 = require("../../utils/api");
var router_1 = require("next/router");
var courseData_1 = require("../../components/courseData");
function CourseEditor() {
    var _a, _b;
    var _c = react_1.useState("Course Title"), courseTitle = _c[0], setCourseTitle = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1];
    var _e = react_1.useState(), courseState = _e[0], setCourseState = _e[1];
    var router = router_1.useRouter();
    var courseId = router.query.courseId;
    var _f = react_1.useState("Course Description Title"), courseDescription = _f[0], setCourseDescription = _f[1];
    var _g = react_1.useState("Section Header Title"), sectionHeader = _g[0], setSectionHeader = _g[1];
    var updateCourseTitle = function (title) {
        if (title === "") {
            setCourseTitle("Course Title");
        }
        else
            setCourseTitle(title);
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
    var findExistingUserSession = api_1.api.findUser.findExistingUserSession.useQuery({
        userid: (_b = (_a = global.localStorage) === null || _a === void 0 ? void 0 : _a.getItem("userid")) !== null && _b !== void 0 ? _b : ""
    });
    react_1.useEffect(function () {
        localStorage.userid ? "" : router.push("./userinput");
    }, []);
    return React.createElement(courseData_1["default"], null);
    // <div className="flex flex-col items-center">
    //   <LogoContainer className="self-start" />
    //   <HeaderContainer
    //     smallTitle="Edit your course"
    //     largeTitle={`Hi, ${findExistingUserSession.data?.username}`}
    //     alignment="self-start"
    //     flexDirection="flex-col-reverse "
    //   />
    //   <div className="flex w-3/4 flex-row">
    //     <div className="flex h-full w-3/4 flex-col">
    //       <CourseEditorTitleHeader
    //         placeholderTitle={courseTitle}
    //         title={updateCourseTitle}
    //       />
    //       <CourseDescriptionEditor
    //         placeholderTitle={courseDescription}
    //         updateCourseDescription={updateCourseDescriptionTitle}
    //       />
    //       <CourseEditorSectionTitle
    //         placeholderTitle={sectionHeader}
    //         sectionTitle={updateSectionHeaderTitle}
    //       />
    //       <SectionTextEditor />
    //     </div>
    //     <div className="ml-4 flex w-16 flex-col items-center">
    //       <CourseEditorContents
    //         courseTitle={courseTitle}
    //         courseDescription={courseDescription}
    //         sectionHeader={sectionHeader}
    //       />
    //       <Button text="Confirm" href="./confirmation" type="submit" />
    //     </div>
    //   </div>
    // </div>
}
exports["default"] = CourseEditor;
