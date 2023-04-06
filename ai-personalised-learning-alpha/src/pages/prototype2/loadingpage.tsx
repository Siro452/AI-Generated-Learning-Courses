import HeaderContainer from "../../components/headercontainer";
import Image from "next/image";

import LogoContainer from "../../components/logocontainer";
import Link from "next/link";
import loadingImg from "../../images/loading.gif";
export default function loadingPage() {
  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />
      <HeaderContainer
        smallTitle="This won't take long"
        largeTitle="AI is generating your course..."
        alignment="place-self-start"
        flexDirection="flex-col"
      />
      <Link className="flex flex-row" href="">
      <Image src={loadingImg} width={1000} height={1000} alt="loading" />
      </Link>

</div>
  );
}
