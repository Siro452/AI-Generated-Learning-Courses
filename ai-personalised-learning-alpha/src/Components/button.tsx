import Link from "next/link";

export default function Button(props: any) {
  return (
    <Link href={props.href} className={`${props.alignment}`}>
      <button
        type={props.type}
        className="m-4 rounded-full bg-gradient-to-r from-[#8197FA] via-[#BB416D] via-[#A663CC] to-[#4765E8] p-1"
      >
        <span className="block rounded-full bg-white px-4 py-2 font-semibold text-black">
          {props.text}
        </span>
      </button>
    </Link>
  );
}
