import EditorButton from "../../components/editorbutton";

export default function QuestionInput() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="mt-48 flex w-1/2 flex-col items-start justify-center">
          <img
            src="https://www.dacreed.com/static/Dacreed-logo-dark-f80888dcbd37d98ef1c3c84aabb5c049.png"
            className="h-12 w-52 items-start"
          ></img>
          <h3 className="text-[#5F00BA]">AI Learning Content Creator</h3>
        </div>
        <div className="flex w-full flex-col items-center">
          <h2>Edit Your Course</h2>

          <form className="flex w-1/2 flex-col items-center">
            <label>Course Title</label>
            <input
              type="text"
              name="courseTitle"
              placeholder="Enter/edit course title"
              className="h-24"
            />
            <label className="self-start">Course Description</label>
            <input
              type="text"
              name="courseDescription"
              placeholder="Enter/edit course description"
              className="h-24"
            />
            <label>Section 1</label>
            <input
              type="text"
              name="section 1"
              placeholder="Enter/edit section paragraph"
              className="h-24"
            ></input>
          </form>
          <div>
            <EditorButton />
          </div>
        </div>
      </div>
    </div>
  );
}
