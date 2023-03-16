import { event } from "jquery";
import { FileSubmissionState } from "../pages/jordanprototype/createnewcourse";
import { api } from "../utils/api";
import Button from "./generatebtn";

interface GenerateProps {
  placeholder: string;
  content: FileSubmissionState;
}

const payload = async () => {
  // event.preventDefault()

  const mutateData = api.receivedData.mutateData.useMutation({});
  const response = await mutateData.mutateAsync({});

  // api endpoint request
  const payloadData = await api.receivedData.mutateData.useMutation();

  console.log(payloadData);
  console.log(response);

  // return response
  return payloadData;
};

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
      <Button type="button" title="Generate" onClick={payload} />
    </div>
  );
};

export default Generate;
