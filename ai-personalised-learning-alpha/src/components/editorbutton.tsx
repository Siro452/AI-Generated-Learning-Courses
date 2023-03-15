interface editorButtonProps {
  icon: JSX.Element;
}

export default function EditorButton(props) {
  return (
    <button className="mb-4 rounded-full bg-[#a3b2f4] p-1">
      <span className="block rounded-full bg-white px-4 py-3">
        {props.icon}
      </span>
    </button>
  );
}
