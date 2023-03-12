import DacreedLogo from "../../public/DacreedLogo.png";
import Image2 from "next/image";

export default function Image() {
  return (
    <div className="flex items-start pl-40 h-40 items-end">
      <Image2 className="object-cover" src={DacreedLogo} alt="company logo" />
    </div>
  );
}
