import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function SectionTextEditor() {
  const [value, setValue] = useState("");
  const updateCharCount = () => {
    return value.length - 7;
  };

  return (
    <div className="flex w-3/4 flex-col">
      <div className="my-2 h-40 w-full flex-auto flex-col rounded-xl border-l-[14px] border-[#DBE4FF] text-[#353535] drop-shadow">
        <ReactQuill
          theme="snow"
          className="h-full"
          style={{ height: "120px" }}
          value={value}
          onChange={setValue}
        />
      </div>
      <p className="self-end text-[#B6B6B6]">Characters: {updateCharCount()}</p>
    </div>
  );
}
