import React, { useState } from "react";
import { api } from "../utils/api";
import { FileSubmissionState } from "../pages/jordanprototype/createnewcourse";

interface FileUploadProps {
  setFileSubmissionState: React.Dispatch<
    React.SetStateAction<FileSubmissionState>
  >;
  fileSubmissionState: FileSubmissionState;
}

export default function FileUpload(props: FileUploadProps): JSX.Element {
  const [dragging, setDragging] = useState(false);
  // const [rawData, setRawData] = useState<string>("");
  // const [response, setResponse] = useState<{}>();
  const mutation = api.receivedData.mutateData.useMutation();
  const [clientData, setClientData] = useState<string>("");

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  async function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    const fr = new FileReader();
    const file = event.dataTransfer.items[0].getAsFile();
    fr.readAsText(file);
    console.log(file.name);
    const fileName = file.name;
    fr.onload = async function () {
      let extractedText = fr.result as string;

      extractedText
        ? props.setFileSubmissionState({
            options: props.fileSubmissionState.options,
            content: [
              ...props.fileSubmissionState.content,
              {
                filename: fileName,
                rawtext: clientData,
              },
            ],
            title: props.fileSubmissionState.title,
          })
        : "it hasn't been read";

      console.log();
      console.log(extractedText);
    };
  }

  return (
    <div className={`border-8${dragging ? "bg-gray-200" : "bg-white"} p-6`}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className=" flex h-60 w-full flex-col items-center justify-center">
          <span className="text-2xl font-extrabold">
            Drag & Drop your course material
          </span>
          <span className=" text-neutral-400">
            .jpg, .png, .pdf format or browse
          </span>
        </div>
      </div>
    </div>
  );
}

// do unit tests to validate functions working the way i want.
// test payload data
// wait for api to do filters
