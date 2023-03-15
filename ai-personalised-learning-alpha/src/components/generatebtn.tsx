export default function generate(props: any) {
  return (
    <span className="3xl cursor-pointer rounded rounded-full rounded-r-full rounded-l-full border-8 border-sky-400 bg-sky-400 px-6 py-2 py-2 px-4 text-xl text-white">
      {props.title}
    </span>
  );
}
