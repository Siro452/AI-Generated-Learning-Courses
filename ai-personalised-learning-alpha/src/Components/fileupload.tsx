import { useState } from 'react';


export default function FileUpload() {
  const [dragging, setDragging] = useState(false);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    console.log(files); // do something with the dropped files
  }

  return (
    <div
      className={`border-2 border-dashed ${
        dragging ? 'bg-gray-200' : 'bg-white'
      } p-6`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and drop files here</p>
    </div>
  );
}
