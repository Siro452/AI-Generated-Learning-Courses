import { FileSubmissionState } from "../pages/prototype2/createnewcourse";
import { api } from "../utils/api";
import Button from "./generatebtn";

interface GenerateProps {
  placeholder: string;
  content: FileSubmissionState;
}

const payload = async (userUpload: any, e: { preventDefault: () => void }) => {
  e.preventDefault();
  // mutate data
  const mutateData = api.receivedData.mutateData.useMutation({});
  const response = await mutateData.mutateAsync({ userUpload });

  console.log("This is the response that is being returned", response);

  // return response
  return response;
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
      <Button
        title="Generate"
        onClick={() => {
          placeholder && content ? payload : "";
        }}
      />
      <Button type="button" title="Generate" onClick={payload} />
    </div>
  );
};

export default Generate;
