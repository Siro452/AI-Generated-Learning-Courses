import Link from "next/link";

interface ButtonProps {
  alignment?: string;
  text: string;
  href: string;
  type: "submit" | "reset" | "button";
}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.href} className={`${props.alignment}`}>
      <button
        type={props.type}
        className="m-4 rounded-full bg-gradient-to-br from-[#354678]  to-[#8088F1] py-4 px-9 text-xl font-bold text-white"
      >
        {props.text}
      </button>
    </Link>
  );
}
