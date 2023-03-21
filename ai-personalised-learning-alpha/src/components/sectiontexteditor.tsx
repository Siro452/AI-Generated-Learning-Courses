import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function SectionTextEditor() {
  const [charCount, setCharCount] = useState(0);
  const [value, setValue] = useState("");

  const characterCounter = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <div className=" flex  w-3/4 flex-col ">
      <div className=" my-2 h-40 w-full flex-auto flex-col rounded-xl border-l-[14px] border-[#DBE4FF] text-[#353535] drop-shadow">
        <ReactQuill
          theme="snow"
          className="h-full"
          style={{ height: "120px" }}
          value={value}
        />
      </div>
      <p className="self-end text-[#B6B6B6]">Characters : {charCount}</p>
    </div>
  );
}
