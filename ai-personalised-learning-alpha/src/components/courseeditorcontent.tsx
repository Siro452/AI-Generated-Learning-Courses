interface courseEditorContentsProps {
  courseTitle: string;
  courseDescription: string;
  sectionHeader: string;
  questiontitle: string;
}

export default function CourseEditorContents(props: courseEditorContentsProps) {
  return (
    <div className="sticky top-0 mb-6 flex h-64 w-56 flex-col items-start rounded-md border-2 border-[#DBE4FF] ">
      <h4 className="w-full border-b-2 border-[#D9D9D9] p-3">
        {props.courseTitle}
      </h4>
      <h4 className="w-full border-b-2 border-[#D9D9D9] p-3">
        {props.courseDescription}
      </h4>
      <h4 className="p-3">
        {props.sectionHeader}
        <div className="flex flex-col justify-items-center px-6 py-2">
          <h5>place holder Question 1 {props.questiontitle}</h5>
          <h5>Question 2</h5>
        </div>
      </h4>
    </div>
  );
}
