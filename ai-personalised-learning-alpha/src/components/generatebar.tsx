import Button from "./generatebtn";
import handleClick from './fileupload'
export default function generate(props: any) {




  return (
    <div className="flex rounded-3xl">
      <input
        className="flex-grow rounded-full px-4 py-2 border-2 mr-2 "
        type="text"
        placeholder={props.placeholder}
      />
      <Button onClick={handleClick} title="Generate" />
    </div>
  );
}
