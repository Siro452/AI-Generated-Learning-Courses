// import Button from './generatebtn'

// export default function generate(props: any) {
//   return (
//     <div className="rounded-3xl border-2">
//       <input
//         className="rounded-3xl"
//         type="text"
//         placeholder={props.placeholder}
//       ></input>

//       <div><Button title="Generate" /></div>
//     </div>
//   );
// }

// import Button from './generatebtn';

// export default function generate(props: any) {
//   return (
//     <div className="flex rounded-3xl border-2">
//       <input
//         className="flex-grow rounded-l-3xl"
//         type="text"
//         placeholder={props.placeholder}
//       />
//       <Button title="Generate" className="rounded-r-3xl" />
//     </div>
//   );
// }
import Button from "./generatebtn";

export default function generate(props: any) {
  return (
    <div className="flex rounded-3xl">
      <input
        className="flex-grow rounded-full px-4 py-2 border-2 mr-2 "
        type="text"
        placeholder={props.placeholder}
      />
      <Button title="Generate" />
    </div>
  );
}
