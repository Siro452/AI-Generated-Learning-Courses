import { FileSubmissionState } from "../pages/jordanprototype/createnewcourse";
import Button from "./generatebtn";

interface GenerateProps {
  placeholder: string;
  content: FileSubmissionState;
}

const Generate: React.FC<GenerateProps> = ({ placeholder, content }) => {
  const fileNames: string[] = content.content.map((x) => x.filename);
  return (
    <div className="flex rounded-3xl">
      <div
        className="mr-2 flex-grow rounded-full border-2 px-4 py-2 "
        placeholder={placeholder}
      >
        {fileNames.join(" , ")}
      </div>
      <Button title="Generate" />
    </div>
  );
};

export default Generate;
