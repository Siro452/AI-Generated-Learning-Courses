import { useState } from "react";

interface SliderProps {
  label?: string;
}

export default function Slider(props: SliderProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-row items-center">
      <label className="mb-8">{props.label}</label>
      <input
        id="medium-range"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="mb-2 mt-1 h-2 w-80 cursor-pointer appearance-none rounded-lg bg-gray-500 accent-[#6567ea]"
      />
  
      <p className="pl-4 text-[#6567ea]">{value}</p>
    </div>
  );
}
