import { useState } from "react";

export default function SectionTextEditor() {
  const [charCount, setCharCount] = useState(0);

  const characterCounter = (e) => {
    e.preventDefault();
    setCharCount(e.target.value.length);
  };

  return (
    <div className="my-6 flex w-full flex-col ">
      <div className="my-6 flex w-full flex-col rounded-xl border-l-[14px] border-[#DBE4FF] text-[#353535] drop-shadow">
        <input
          type="text"
          placeholder="rich text editor to be found here"
          className="w-full py-4 pl-2 text-2xl font-bold text-[#353535] placeholder:align-bottom placeholder:text-[#353535] "
        ></input>
        <input
          type="text"
          placeholder="section text"
          className="h-36 border-t-2 border-[#D9D9D9] py-4 pl-2 placeholder:text-start placeholder:align-top placeholder:text-[#353535]"
          onChange={characterCounter}
        ></input>
      </div>
      <p className="self-end text-[#B6B6B6]">Characters : {charCount}</p>
    </div>
  );
}
