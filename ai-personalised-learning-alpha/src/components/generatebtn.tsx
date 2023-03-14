import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function generate(props: {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
}) {
  return (
    <span className="3xl cursor-pointer rounded rounded-full rounded-r-full rounded-l-full border-8 border-sky-400 bg-sky-400 px-6 py-2 py-2 px-4 text-xl text-white">
      {props.title}
    </span>
  );
}
