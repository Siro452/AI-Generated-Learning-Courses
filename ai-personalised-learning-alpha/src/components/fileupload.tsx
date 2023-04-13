import React, { MouseEvent, useRef, useState } from "react";
import { api } from "../utils/api";
import { FileSubmissionState } from "../pages/prototype2/createnewcourse";
import DragDrop from "./DragDrop";
interface FileUploadProps {
  setFileSubmissionState: React.Dispatch<
    React.SetStateAction<FileSubmissionState>
  >;
  fileSubmissionState: FileSubmissionState;
}

export default function FileUpload(props: FileUploadProps) {
  const [dragging, setDragging] = useState(false);
  const mutation = api.receivedData.mutateData.useMutation();
  const findExistingUser = api.findUser.findExistingUserSession.useQuery({
    userid: global.localStorage?.getItem("userid") ?? "",
  });

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  function handleClick(e: MouseEvent): void {
    e.preventDefault();
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";
    input.click();


    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (file) {
        input.disabled = true;
      }

      const fileBlob = new Blob([file], { type: file.type });
      const fileReader = new FileReader();
      const fileName = file.name;
      fileReader.readAsText(fileBlob);
      fileReader.onload = async function () {
        let extractedText = fileReader.result as string;

        console.log(extractedText);

        extractedText
          ? props.setFileSubmissionState({
              options: props.fileSubmissionState.options,
              content: [
                ...props.fileSubmissionState.content,
                {
                  filename: fileName,
                  rawtext: extractedText,
                },
              ],
              title: props.fileSubmissionState.title,
            })
          : "it hasn't been read";

        console.log(props.fileSubmissionState.content);
      };
    });
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
                rawtext: extractedText,
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
      onClick={handleClick}
      className="w-full"
    >
      <DragDrop />
    </div>
  );
}

// do unit tests to validate functions working the way i want.
// test payload data
// wait for api to do filters
