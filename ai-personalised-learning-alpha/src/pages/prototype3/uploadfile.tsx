import Button from "../../components/button";
import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import FileUpload from "../../components/fileupload";
import { api } from "../../utils/api";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const findExistingUser = api.findUser.findExistingUserSession.useQuery({
    userid: global.localStorage?.getItem("userid") ?? "",
  });

  const mutateData = api.receivedData.mutateData.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const router = useRouter();
  const generate: () => void = async () => {
    mutateData.mutateAsync({
      userUpload: content.content.map((x) => {
        return {
          userid: findExistingUser.data.id,
          fileName: x.filename,
          fileContent: x.rawtext,
          // sessionid: "",
          // eventid: "",
        };
      }),
    });
    router.push("/prototype3/preferences");
  };

  return (
    <div className="flex flex-col  items-center">
      <LogoContainer className="self-start" />
      <h4 className="ml-8 self-start text-3xl font-semibold  ">
        Hello {findExistingUser.data?.username}
      </h4>
      <HeaderContainer
        smallTitle="Upload your file"
        largeTitle="Drag & drop or browse"
        alignment="place-self-start items-start"
        flexDirection="flex-col"
      />
      <div className="flex w-3/4 content-center justify-center">
        <FileUpload
          fileSubmissionState={content}
          setFileSubmissionState={setContent}
        />
        <p></p>
      </div>
      <form className="mr-64 self-end" onSubmit={generate}>
        <input
          value="Next"
          type="submit"
          className="rounded-full bg-gradient-to-br from-[#354678]  to-[#8088F1] py-4 px-9 text-xl font-bold text-white"
        ></input>
        {mutateData.data ? <p>A file is uploaded</p> : null}

        {/* <Button text="Next" href="./preferences" type="submit" /> */}
      </form>
    </div>
  );
}
