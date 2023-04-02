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

export interface Filters {
  sliderValue: number;
}

export default function UploadFile() {
  const [content, setContent] = useState<FileSubmissionState>({
    content: [],
    title: "",
  });

  const findExistingUser = api.findUser.findExistingUserSession.useQuery(
    {
      userid: global.localStorage?.getItem("userid") ?? "",
    }
  );
  const mutateData = api.receivedData.mutateData.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const generate: () => void = async () => {
    mutateData.mutateAsync({
      userUpload: content.content.map((x) => {
        return {
          fileName: x.filename,
          fileContent: x.rawtext,
          // sessionid: "",
          // eventid: "",
        };
      }),
    });

  };


  return (
    <div className="flex flex-col  items-center">
      <LogoContainer className="self-start" />

      <HeaderContainer
        smallTitle="Upload your file"
        largeTitle="Drag & drop or browse"
        alignment="place-self-start items-start"
        flexDirection="flex-col"
      />
      <div className="flex w-3/4 justify-center content-center">
        <FileUpload
          fileSubmissionState={content}
          setFileSubmissionState={setContent} />
      </div>
      <form className="mr-64 self-end" onSubmit={generate}>
        <Button
        text="Next"
        href="./preferences"
        type="submit"
        />
      </form>
      
    </div>
  );
}
