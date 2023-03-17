import { useState } from "react";

export default function CourseDescriptionEditor() {
  const [charCount, setCharCount] = useState(0);

  const characterCounter = (e) => {
    e.preventDefault();
    setCharCount(e.target.value.length);
  };

  return (
    <div className="my-6 flex w-3/4 flex-col rounded-xl border-l-[14px] border-[#DBE4FF] text-[#353535] drop-shadow ">
      <input
        type="text"
        placeholder="Course description"
        className="h-full w-full py-4 pl-2 text-2xl font-bold text-[#353535] placeholder:align-bottom placeholder:text-[#353535] "
      ></input>
      <input
        type="text"
        placeholder="Description Text"
        className="border-t-2 border-[#D9D9D9] py-4 pl-2 placeholder:text-start placeholder:text-[#353535]"
        onChange={characterCounter}
      ></input>
      <p className="self-end text-[#B6B6B6]">Characters : {charCount}</p>
    </div>
  );
}
