import { Course, CourseSection, Content} from "../../../..";

export const toCourse: (x: Content) => Course = (x: Content) => {
  // turn x into course

//   console.log(x)
// const course: Course = {
//   title: "",
//   description: "",
//   courseContent: x.map((document:any) => ({
//     sectionHeader: document.fileName,
//     sectionBody: document.fileContent
//   })),
  // title: ""

x.Content




  return { title: "", description: "", courseContent: [] };
  // return course;
};


// export const toCourse: (x: any) => Course = (x: any) => {
//   if (!x) {
//     console.log("x is null or undefined");
//     return undefined;
//   }

//   const course: Course = {
//     title: x.title || "",
//     description: x.description || "",
//     courseContent: x.courseContent || [],
//   };
//   return course;
// };
