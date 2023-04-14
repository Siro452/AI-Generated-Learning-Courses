import HeaderContainer from "../../components/headercontainer";
import Image from "next/image";
import loadingImg from "../../images/loading.gif";
import LogoContainer from "../../components/logocontainer";
import Link from "next/link";
import { useRouter } from "next/router";
// import { api } from "../../utils/api";
// import { createTRPCProxyClient } from "@trpc/client";

export default async function LoadingPage() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/prototype4/courseeditor");
  }, 5000);

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
      <Link className="flex flex-row" href="/prototype4/courseeditor">
        <Image src={loadingImg} width={1000} height={1000} alt="loading" />
      </Link>
    </div>
  );
}
