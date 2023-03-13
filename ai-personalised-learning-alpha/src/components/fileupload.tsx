import React, { useState } from "react";
import { api } from "../utils/api";
import { apiBaseUrl } from "next-auth/client/_utils";
import GenerateBar from "./generatebar";
export default function fileUpload(): any {
  const [dragging, setDragging] = useState(false);
  const [rawData, setRawData] = useState<string>("");
  const [response, setResponse] = useState<{}>();
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
    fr.onload = async function () {
      let readText = (document.getElementById("output").textContent =
        fr.result as string);
      readText ? setClientData(clientData) : "it hasn't been read";
      console.log(fr.result);
    };
    console.log(clientData);
    fr.readAsText(event.dataTransfer.items[0].getAsFile());
  }

  const mutateData = api.receivedData.mutateData.useMutation({});

  async function handleClick() {
    const response = await mutateData.mutateAsync({ clientData });

    setClientData("");
    setResponse(response);

    return;
  }

  // const handleUpload = async (event: any) => {
  //   const file = event.target.files[0];

  //   try {
  //     const fileContents = readUploadedFileAsText(file)
  //     console.log(fileContents);
  //   } catch (e) {
  //     console.warn(e.message)
  //   }
  // }

  return (
    <div className="">
      <div
        className={`${dragging ? "bg-gray-200" : "bg-white"} p-6`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & Drop your course material</p>

        {/* <button onClick={handleClick}>Generate</button> */}
        <GenerateBar placeholder="File uploads:" />
        <div id="output"></div>
      </div>
    </div>
  );
}
