import React, { useState } from "react";

export default function fileUpload() {
  const [dragging, setDragging] = useState(false);
  const [rawData, setRawData] = useState<string>("");

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
     console.log("raw", rawData)
    //  console.log(readAsText(fr))
    fr.readAsText(event.dataTransfer.items[0].getAsFile())
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
        className={`border-8 border-dashed ${
          dragging ? "bg-gray-200" : "bg-white"
        } p-6`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p id="output">Drag and drop a PDF file here</p>
      


      </div>
    </div>
  );
}
function readAsText(_FileReader: FileReader): any {
  console.log(readAsText)
  // throw new Error("Function no worky");
}

