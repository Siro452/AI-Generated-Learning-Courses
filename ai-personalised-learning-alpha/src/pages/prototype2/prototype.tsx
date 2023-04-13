import FileUpload from "../../components/fileupload";
import GenerateBar from "../../components/generatebar";
import { useState, useEffect } from "react";
import Filters from "../../components/filters";
import LogoContainer from "../../components/logocontainer";
import HeaderContainer from "../../components/headercontainer";
import Title from "../../components/h1";
import SubTitle from "../../components/subTitle";
import Button from "../../components/button";
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

      <header className="flex flex-col justify-start py-4">
        <LogoContainer className="mb-5 h-32" />
        <span className="ml-11 flex flex-col text-3xl text-blue-800">
          <SubTitle subtitle="AI Learning Content creator" />
        </span>
      </header>
      <main className="mx-auto mt-12 max-w-screen-lg py-8">
        <section className="mb-12 mt-12">
          <div className="grid gap-4">
            <div className="">
              <div
                className="col-span-1 row-span-1 p-4 text-left "
                style={{ marginLeft: "-60px" }}
              >
                <span className=" block text-lg text-neutral-600">
                  <SubTitle subtitle="Let's get started!" />
                </span>
                <span className="mx-3"></span>
                <span className="block pb-10 text-3xl font-extrabold drop-shadow-md">
                  <Title title="What is your name?" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border-2 p-2"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 --- File upload */}

        <section className="mb-12 mt-60">
          <div className="grid gap-4">
            <div className="">
              <FileUpload
                fileSubmissionState={content}
                setFileSubmissionState={setContent}
              />
            </div>
          </div>
        </section>

        {/* Section 3 --- sliders */}
        <section className="mb-12 mt-60">
          <div className="grid gap-4">
            <div
              className="col-span-1 row-span-1 p-4 text-left "
              style={{ marginLeft: "-60px" }}
            >
              <span className=" block text-lg text-neutral-600">
                <SubTitle subtitle="Drag to change the output tone" />
              </span>
              <span className="mx-3"></span>
              <span className="block pb-10 text-3xl font-extrabold drop-shadow-md">
                <Title title="Change preferences" />
              </span>
            </div>
            <Filters />
          </div>
        </section>
        {/* <GenerateBar placeholder={""} content={content} /> */}
        <section className="flex flex-row justify-end py-4" onClick={generate}>
          <Button
            text={"Generate"}
            href={"/jordanprototype/loadingpage"}
            type={"button"}
            className="w-60"
          />
        </section>
      </main>
    </>
  );
}
