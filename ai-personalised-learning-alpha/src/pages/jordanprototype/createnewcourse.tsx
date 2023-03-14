import Title from "../../components/h1";
import FileUpload from "../../components/fileupload";
import GenerateBar from "../../components/generatebar";
export default function createNewCourse() {
  return (
    <div className="grid h-screen max-w-none max-w-full grid-cols-5 grid-rows-5 gap-x-12 gap-y-10 border-8">
      <div className="border-grey-300 col-span-1 row-span-5 ml-8 w-40 rounded-3xl border-8 p-4">
        Sidebar
      </div>
      <div className="col-span-2 row-span-1 p-4 pt-20 text-2xl font-black drop-shadow-md">
        <Title title="Create new course" />
      </div>
      <div className="border-grey-300 col-span-3 col-start-2 col-end-5 row-span-1 row-start-2 row-end-4 rounded-xl border-8 p-9 bg-gray-200">
        <FileUpload />
      </div>
      <div className="col-span-3 row-span-1">
        <GenerateBar placeholder="File uploads:" />
      </div>{" "}
      <div className="col-span-3 row-span-1 text-2xl font-extrabold">
        TeamsPlus AI-powered created courses will enhance your process
      </div>
    </div>
  );
}
