import Title from "../../components/h1";
import FileUpload from "../../components/fileupload";
import GenerateBar from '../../components/generatebar'
export default function createNewCourse() {
  return (
    // <div className=" border-8 border-black max-w-full h-screen grid grid-rows-3 grid-flow-col gap-4">
    //   <div className="col-span-1 border-yellow-500 border-8">
    //     <Title title="Create new course" />
    //   </div>

    //   <div className="col-span-2 border-grey-400 border-8 absolute inset-y-9 left-20 w-40 rounded-3xl">Sidebar</div>

    //   <div className="row-span-2 col-span-7">
    //     <FileUpload />
    //   </div>
    // </div>

    // <div className="grid h-screen max-w-full grid-flow-col grid-rows-1 gap-7 border-8 border-black">
    //   <div className="... border-grey-200 col-span-1 row-span-3 rounded-3xl border-8 ">
    //     Sidebar
    //   </div>
    //   <div className="... col-span-2 border-8 border-yellow-500">
    //     <Title title="Create new course" />
    //   </div>
    //   <div className="... col-span-2 row-span-2 ">
    //     <FileUpload />
    //   </div>
    // </div>

    // <div className="border-8 max-w-full h-screen  grid grid-cols-5 grid-rows-5 gap-x-3.5 gap-y-2.5">
    //   <div className=" grid-area: 2 / 1 / 5 / 2 row-span-5 border-8 rounded-3xl">Sidebar</div>
    //   <div className=" grid-area: 1 / 2 / 2 / 4 row-span-1 border-8"><Title title="Create new course" /></div>
    //   <div className="grid-area: 2 / 2 / 3 / 5 border-8 col-span-4 row-span-2"><FileUpload /></div>
    //   <div className="grid-area: 3 / 2 / 4 / 5 border-8 col-span-3">Generate Bar</div>
    //   <div className="grid-area: 4 / 2 / 5 / 5 border-8 col-span-2">TeamsPlus AI-powered created courses will enhance your process</div>
    // </div>

    <div className=" grid max-w-none grid-cols-5 grid-rows-5 gap-x-12 gap-y-10 border-8 max-w-full h-screen">
      <div className="col-span-1 row-span-5 ml-8 w-40 rounded-3xl border-8 border-grey-300 p-4">
        Sidebar
      </div>
      <div className="col-span-2 row-span-1 p-4 pt-20 text-2xl drop-shadow-md font-black">
        <Title title="Create new course" />
      </div>
      <div className="col-span-3 col-start-2 col-end-5 row-span-1 row-start-2 row-end-4 border-8 border-grey-300 p-9 rounded-xl">
        <FileUpload />
      </div>
      <div className="col-span-3 row-span-1">
        <GenerateBar placeholder="File uploads:"/>
      </div>{" "}
      <div className="col-span-3 row-span-1">
        TeamsPlus AI-powered created courses will enhance your process
      </div>
    </div>
  );
}
