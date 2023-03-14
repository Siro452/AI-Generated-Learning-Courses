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
  return <span className="border-8 text-white text-xl rounded 3xl border-sky-400 rounded-r-full rounded-l-full bg-sky-400 px-6 py-2">{props.title}</span>;
}
