import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface ButtonProps {
  className?: string;
  text: string;
  href: string;
  type: "submit" | "reset" | "button";
}

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className={`${props.className}  flex items-center text-[#353535]`}
    >
      <button
        type={props.type}
        className=" flex items-center px-9 text-3xl font-bold text-amber-500"
      >
        {props.text}
        <span className="text-xl text-amber-500 ml-4">
          <MdOutlineArrowForwardIos />
        </span>
      </button>
    </Link>
  );
}
