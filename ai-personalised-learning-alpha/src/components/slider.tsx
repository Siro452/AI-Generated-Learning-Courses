import { useState } from "react";

export default function Slider() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className=" flex items-center">
      <input
        id="medium-range"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="mb-6 mt-1 h-2 w-80 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 accent-indigo-500"
      />

      <div className=" mt-1 pl-4 text-indigo-400"> {value}</div>
    </div>
  );
}
