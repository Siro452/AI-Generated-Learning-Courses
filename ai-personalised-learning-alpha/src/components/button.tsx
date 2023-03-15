import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

interface buttonProps {
  alignment?: string;
  text: string;
  href: string;
  type?: "submit" | "reset" | "button";
}

export default function Button(props: buttonProps) {
  return (
    <Link href={props.href} className={`${props.alignment}`}>
      <button
        type={props.type}
        className="m-4 rounded-full bg-gradient-to-r from-[#8197FA] via-[#BB416D] via-[#A663CC] to-[#4765E8] p-1"
      >
        <span className="block rounded-full bg-white px-4 py-2 font-semibold text-black">
          {props.text}
          <ArrowForwardRoundedIcon className="w-8 pl-1" />
        </span>
      </button>
    </Link>
  );
}
