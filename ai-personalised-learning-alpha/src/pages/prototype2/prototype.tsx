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
import LoginFormWithNoId from "../../components/loginFormIfNoId";
import Welcome from "../../components/welcome";

export interface FileContent {
  filename: string;
  rawtext: string;
  userid: string;
}

export interface FileSubmissionState {
  options?: any;
  content: FileContent[];
  title: string;
  userid: string;
}

export interface Filters {
  sliderValue: number;
}

interface GenerateProps {
  // placeholder: string;
  content: FileSubmissionState;
}

export default function createNewCourse() {
  const user = global.localStorage?.getItem("userid");

  // const user = typeof window !== "undefined" && localStorage.getItem("userid");

  // if (!user) {
  //   return <LoginFormWithNoId />;
  // }

  function checkUser() {
    const [user, setUser] = useState(<Welcome />);

    useEffect(() => {
      const userId = localStorage.getItem("userid");
      if (userId) {
        setUser(<Welcome />);
      } else {
        setUser(<LoginFormWithNoId />);
      }
    }, []);

    return <div>{user}</div>;
  }

  // if(!user){
  //   return <LoginFormWithNoId />
  // } else {
  //   "Welcome back"
  // }

  const [content, setContent] = useState<FileSubmissionState>({
    userid: "",
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
      userid: user,
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

  // const username = global.localStorage?.getItem("userid")

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
          {/* {user ? `Welcome back` : <LoginFormWithNoId />}
           */}
          {checkUser()}
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
            href={"/prototype2/courseeditor"}
            type={"button"}
            className="w-60"
          />
        </section>
      </main>
    </>
  );
}
