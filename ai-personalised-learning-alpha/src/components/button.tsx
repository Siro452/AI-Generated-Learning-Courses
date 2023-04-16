import Link from "next/link";

interface ButtonProps {
  className?: string;
  text: string;
  href?: string;
  type: "submit" | "reset" | "button";

}

export default function Button(props: ButtonProps) {
  return (
    <Link href={props.href} className={`${props.className}  text-[#353535]`}>
      <button
        type={props.type}
        className="rounded-full bg-gradient-to-br from-[#354678]  to-[#8088F1] py-4 px-9 text-xl font-bold text-white"
      >
        {props.text}
      </button>
    </Link>
  );
}
