import Image from "next/image";
import Dacreed from "../images/Dacreed-logo.png";

interface DacreedLogoProps {
  className?: string;
  width: number;
  height: number;
}

export default function DacreedLogo(props: DacreedLogoProps) {
  return (
    <Image
      className={props.className}
      src={Dacreed}
      alt="company logo"
      width={props.width}
      height={props.height}
    />
  );
}
