import React, { useState } from "react";
import Generate from './generatebtn'
import { api } from "../utils/api";
import { apiBaseUrl } from "next-auth/client/_utils";
export default async function fileUpload() :any {
  const [dragging, setDragging] = useState(false);
  const [rawData, setRawData] = useState<string>("");
  
  const [response, setResponse] = useState<{name: string}>();
  const mutation = api.receivedData.mutateData.useMutation()
  // const mutation = api
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
      readText ? setRawData(rawData) : "it hasn't been read";
      console.log(fr.result);
    };
    console.log(rawData);
    fr.readAsText(event.dataTransfer.items[0].getAsFile());
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
    <div>
      <div
        className={`border-8 ${dragging ? "bg-gray-200" : "bg-white"} p-6`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & Drop your course material</p>
        <Generate span="Generate"></Generate>
        <div id="output"></div>



        
      </div>
    </div>
  );
}
