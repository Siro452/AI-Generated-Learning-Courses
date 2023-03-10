export default function QuestionInput() {
  return (
    <div>
      <div>
        <div className="mt-48 flex w-1/2 flex-col items-start justify-center">
          <img
            src="https://www.dacreed.com/static/Dacreed-logo-dark-f80888dcbd37d98ef1c3c84aabb5c049.png"
            className="h-12 w-52 items-start"
          ></img>
          <h3 className="text-[#5F00BA]">AI Learning Content Creator</h3>
        </div>
        <div>
          <h2>Edit Your Course</h2>

          <form>
            <label>Course Title</label>
            <input
              type="text"
              name="courseTitle"
              placeholder="Enter/edit course title"
            />
            <label>Course Description</label>
            <input
              type="text"
              name="courseDescription"
              placeholder="Enter/edit course description"
            />
            <label>Section 1</label>
          </form>
        </div>
      </div>
    </div>
  );
}
