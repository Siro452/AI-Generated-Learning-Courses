import FileUpload from "../../components/dragDropV2";
import GenerateBar from "../../components/generatebar";
import { useState, useEffect } from "react";
import Filters from "../../components/filtersV2";
import LogoContainer from "../../components/logocontainer";
import HeaderContainer from "../../components/headercontainer";
import Title from "../../components/h1";
import SubTitle from "../../components/subTitle";
import Button from "../../components/nextButton";
import { api } from "../../utils/api";
import React from "react";

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

interface GenerateProps {
  // placeholder: string;
  content: FileSubmissionState;
}

export default function createNewCourse() {
  const [content, setContent] = useState<FileSubmissionState>({
    content: [],
    title: "",
  });

  const mutateData = api.receivedData.mutateData.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const findExistingUser = api.findUser.findExistingUserSession.useQuery({
    userid: global.localStorage?.getItem("userid") ?? "",
  });

  const generate: () => void = async () => {
    // e.preventDefault();
    // mutate data

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
  };

  return (
    <>
      {/* Section 3 --- User Input */}
      <div className="h-screen bg-white">
        <div className="h-screen w-screen -translate-y-44 -skew-y-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-800">
          <header className="items-left flex h-60 translate-y-44 skew-y-6  flex-col justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <LogoContainer className="h-8" />
            </div>
          </header>
          <main className="mx-auto max-w-screen-lg translate-y-40 skew-y-6">
            {/* File upload and sliders */}
            <section className="mt-30 flex flex-col items-center justify-center lg:flex-row">
              {/* File upload */}
              <div className=" h-full lg:w-1/2">
                <FileUpload />
              </div>
              {/* Sliders */}
              <div className="mt-[-7rem] w-full justify-center pl-10 lg:w-1/2">
                <div className="pb-10 text-center text-2xl font-black font-extrabold drop-shadow-md lg:text-left">
                  {/* Title */}
                  <span className="whitespace-nowrap text-xl text-indigo-800">
                    <HeaderContainer
                      smallTitle=""
                      largeTitle="Dial your preferences"
                      flexDirection=""
                      alignment=""
                      mx="mx-11"
                    />
                  </span>

                  {/* Filters */}
                  <Filters />
                </div>

                {/* Button */}
                <div
                  className="flex justify-center lg:justify-end"
                  onClick={generate}
                >
                  <Button
                    text={"Next"}
                    type={"button"}
                    href={"./loadingpage"}
                    className="w-60"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
