export default function TextInput(props) {
  return (
    <div className="my-4 flex h-full w-11/12 flex-col">
      <label className="self-start py-2 text-2xl">{props.title}</label>
      <input
        type="text"
        name="courseTitle"
        placeholder={props.placeholder}
        className={`${props.h} w-full ${props.rounded} px-4 ${props.pb} text-left`}
      />
    </div>
  );
}
