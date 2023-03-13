import Button from './generatebtn'


export default function generate(props: any) {
  return (
    <div className="rounded-3xl border-2">
      <input
        className="rounded-3xl"
        type="text"
        placeholder={props.placeholder}
      ></input>

      <div><Button text="Generate"/>Generate</div>
    </div>
  );
}
