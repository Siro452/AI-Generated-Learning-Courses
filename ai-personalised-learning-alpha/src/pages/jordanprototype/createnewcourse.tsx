import FileUpload from "../../components/fileupload";
import GenerateBar from "../../components/generatebar";
import { useState } from "react";
import Slider from "../../components/slider";

export interface FileContent {
  filename: string;
  rawtext: string;
}

export interface FileSubmissionState {
  options?: any;
  content: FileContent[];
  title: string;
}

export interface Filters {
  sliderValue: number;
}
export default function createNewCourse() {
  const [content, setContent] = useState<FileSubmissionState>({
    content: [],
    title: "",
  });

  return (
    <div className="grid h-screen max-w-none max-w-full grid-cols-5 grid-rows-5 gap-x-12 gap-y-10 border-8">
      <div className="border-grey-300 col-span-1 row-span-5 ml-8 w-40 rounded-3xl border-8 p-4">
        Sidebar
      </div>

      <div className=" col-span-3 col-start-2 col-end-5 row-span-1 row-start-2 row-end-4">
        <FileUpload
          fileSubmissionState={content}
          setFileSubmissionState={setContent}
        />
      </div>
      <div className="col-span-3 row-span-1 text-2xl font-extrabold">
        <GenerateBar placeholder="File uploads:" content={content} />
        TeamsPlus AI-powered created courses will enhance your process
      </div>

      <Slider />
    </div>
  );
}
