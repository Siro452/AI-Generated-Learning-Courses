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

export default function createNewCourse() {
  const router = useRouter();
  const [userId, setUserId] = useState()
  const [course, setCourse] = useState<any | undefined>();

  const findExistingUser = api.findUser.findExistingUserSession.useQuery({
    userid: global.localStorage?.getItem("userid") ?? "",
  });

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

  const [content, setContent] = useState<FileSubmissionState>({
    // userid: "",
    content: [],
    title: "",
  });

  const mutateData = api.receivedData.mutateData.useMutation({
    onSuccess: (data) => {
      console.log(data.courseNode);
      setCourse(data);
    },
  });



  const generate: () => void = async () => {

    // try {
      // if(!findExistingUser.isLoading && findExistingUser.data){
        const course = await mutateData.mutateAsync({
          userid: findExistingUser.data.id,
          userUpload: content.content.map((x) => {
            return {
              fileName: x.filename,
              fileContent: x.rawtext,
            };
          }),
        });
        router.push(`/prototype2/courseeditor/?courseid=${course.id}`);
      // }
    // } catch (error) {
      // console.error(error);
    // }
  }
  
  
  return (
    <>
      {/* Section 3 --- User Input */}

      <header className="flex flex-col justify-start py-4">
        <LogoContainer className="mb-5 h-32" />
        <span className="ml-11 flex flex-col text-3xl text-blue-800"></span>
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
              <span className="block pb-10 text-3xl font-black font-extrabold drop-shadow-md">
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
            href={"#"}
            type={"button"}
            className="w-60"
          />
        </section>
      </main>
    </>
  );
}
