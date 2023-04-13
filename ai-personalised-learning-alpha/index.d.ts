export type FileSubmissionData<FileSubmissionState> = {
  options?: any;
  content: FileContent[];
  title: string;
};

type ReturnedData = {
  courseTitle: string;
  courseContent: string;
};

interface Content {
  Content: string;
}

interface CourseSection {
  sectionHeader: string;
  sectionBody: string;
}

interface Course {
  title: string;
  description: string;
  courseContent: CourseSection[];
}

interface ComponentNodeArticle {
  title: string;
  content: string;
}

interface SectionNode {
  title: string;
  articles: ComponentNodeArticle[];
}

interface FrontEndCourse {
  title: string;
  description: string;
  sectionNodes: SectionNode[];
}
// interface in the middle for convention. Keep things separate
// keep frontend data that will be displayed.
// index.d.ts needs to be in the same folder as tsconfig.json
// make a type for content also
// break down the types into what i need, organise them nicely
