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

  const generate: () => void = async () => {
    // e.preventDefault();
    // mutate data

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
    // const mutateData = api.receivedData.mutateData.useMutation({
    //   onSuccess: (data) => {
    //     console.log(data);
    //   },
    // });
    // const response = await mutateData.mutateAsync({ data });

    // console.log(response, "response has been returned");

    // return response
  };

  // const payload = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   // mutate data
  //   const mutateData = api.receivedData.mutateData.useMutation({});
  //   const response = await mutateData.mutateAsync({  });

  //   console.log(response);

  //   // return response
  //   return response;
  // };

  return (
    <>
      {/* Section 3 --- User Input */}

      <header className="items-left flex h-60 flex-col justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <LogoContainer className="h-8" />
        </div>

        <span className="ml-12 text-2xl font-bold text-blue-800">
          AI Learning Content Creator
        </span>
      </header>
      <main className="mx-auto max-w-screen-lg">
        {/* File upload and sliders */}
        <section className="mt-30 flex flex-col items-center justify-center lg:flex-row">
          {/* File upload */}
          <div className=" h-full lg:w-1/2">
            <FileUpload />
          </div>
          {/* Sliders */}
          <div className="mt-[-2rem] w-full justify-center pl-10 lg:w-1/2">
            <div className="pb-10 text-center text-2xl font-black font-extrabold drop-shadow-md lg:text-left">
              {/* Title */}
              <span className="mr-20 whitespace-nowrap border-2 border-amber-500  text-xl text-indigo-800">
                <HeaderContainer
                  smallTitle=""
                  largeTitle="Dial your preferences"
                  flexDirection="flex "
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
                href={"/jordanprototype/loadingpage"}
                className="w-60"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
