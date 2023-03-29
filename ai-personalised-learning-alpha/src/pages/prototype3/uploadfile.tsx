import Button from "../../components/button";
import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import FileUpload from "../../components/fileupload";
import { api } from "../../utils/api";
import { useState } from "react";

export interface FileContent {
  filename: string;
  rawtext: string;
}

export interface FileSubmissionState {
  options?: any;
  content: FileContent[];
  title: string;
}

export default function UploadFile() {
  const findExistingUserSession = api.findUser.findExistingUserSession.useQuery(
    {
      userid: global.localStorage?.getItem("userid") ?? "",
    }
  );
  const [content, setContent] = useState<FileSubmissionState>({
    content: [],
    title: "",
  });




  return (
    <div className="flex flex-col  items-center">
      <LogoContainer className="self-start" />

      <HeaderContainer
        smallTitle="Upload your file"
        largeTitle="Drag & drop or browse"
        alignment="place-self-start items-start"
        flexDirection="flex-col"
      />
      <div className="flex h-[283px] w-3/4 justify-center content-center">
        <FileUpload 
        fileSubmissionState={content}
        setFileSubmissionState={setContent}  />
      </div>
      <Button
        className="mr-64 self-end"
        text="Next"
        href="./preferences"
        type="submit"
      />
    </div>
  );
}
