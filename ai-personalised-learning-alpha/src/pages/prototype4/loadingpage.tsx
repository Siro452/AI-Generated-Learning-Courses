import HeaderContainer from "../../components/headercontainer";
import Image from "next/image";
import loadingImg from "../../images/loading.gif";
import LogoContainer from "../../components/logocontainer";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { createTRPCProxyClient } from "@trpc/client";

export default async function LoadingPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/prototype4/courseeditor");
  }, 5000);

  //save the data to the database router
  // const saveReturnedData = api.savedatafromapi.saveDataFromApi.useMutation({});
  // //query the userid
  // const findExistingUserSession = api.findUser.findExistingUserSession.useQuery(
  //   {
  //     userid: global.localStorage?.getItem("userid") ?? "",
  //   }
  // );

  // const getUploadedFile = api.uploadedData.queryUploadedData.useQuery({
  //   userid: global.localStorage?.getItem("userid") ?? "",
  // });

  // calling the api
  // const apiCall = createTRPCProxyClient({
  //   //api endpoint here
  //   url: "",
  // });

  // const returnedData = {
  //   courseCreate: [
  //     {
  //       userid: findExistingUserSession.data.id,
  //       courseNode: [
  //         {
  //           title: apiCall.documentTitle,
  //           description: apiCall.documentDescription,
  //           sectionNode: [
  //             {
  //               title: apiCall.sectionTitle,
  //               compononentNodeArticle: [
  //                 {
  //                   title: apiCall.componentTitle,
  //                   content: apiCall.content,
  //                   order: apiCall.componentOrder,
  //                 },
  //               ],
  //             },
  //           ],
  //           sectionNodeAssessment: [
  //             {
  //               order: apiCall.sectionAssessmentOrder,
  //               assessmentQuestion: [
  //                 {
  //                   question: apiCall.sectionAssessmentQuestion,
  //                   option1: apiCall.sectionAssessmentOption1,
  //                   option2: apiCall.sectionAssessmentOption2,
  //                   option3: apiCall.sectionAssessmentOption3,
  //                   option4: apiCall.sectionAssessmentOption4,
  //                   option5: apiCall.sectionAssessmentOption5,
  //                   correctAnswer: apiCall.sectionAssessmentAnswer,
  //                   guidance: apiCall.sectionAssessmentGuidance,
  //                   commentary: apiCall.sectionAssessmentCommentary,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  // saving the returned data
  // const saveData = await apiCall(saveReturnedData.mutateAsync(returnedData));

  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />
      <HeaderContainer
        smallTitle="This won't take long"
        largeTitle="AI is generating your course..."
        alignment="place-self-start"
        flexDirection="flex-col"
        mx="mx-16"
      />
      <Link className="flex flex-row" href="./courseeditor">
        <Image src={loadingImg} width={1000} height={1000} alt="loading" />
      </Link>
    </div>
  );
}
