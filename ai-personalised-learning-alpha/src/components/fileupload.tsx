import React, { useState } from "react";
import { api } from "../utils/api";
import { FileSubmissionState } from "../pages/jordanprototype/createnewcourse";
import BlueCircle from "./blueCircle";
import DragDrop from "./DragDrop";
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
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <DragDrop />
    </div>
  );
}

// do unit tests to validate functions working the way i want.
// test payload data
// wait for api to do filters

// click the fileupload box and it would browse the computer files
