export default function CourseEditorContents() {
  return (
    <div className="mb-6 flex w-48 flex-col flex-nowrap items-start border-2 border-[#DBE4FF] p-4">
      <h4 className="border-b-2 border-[#D9D9D9]">Course Title</h4>
      <h4 className="border-b-2 border-[#D9D9D9]">Course Description</h4>
      <h4>
        Section 1
        <div className="flex flex-col justify-center">
          <h5>Question 1</h5>
          <h5>Question 2</h5>
        </div>
      </h4>
    </div>
  );
}
