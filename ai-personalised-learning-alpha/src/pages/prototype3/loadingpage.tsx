import HeaderContainer from "../../components/headercontainer";
import Image from "next/image";
import loadingImg from "../../images/loading.gif";
import loadinghalf1 from "../../images/loadinghalf1.svg";
import loadinghalf2 from "../../images/loadinghalf2.svg";
import LogoContainer from "../../components/logocontainer";
import spinner from '../../images/Loading-spinner.gif'
import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  setTimeout(() => {
    router.push("/prototype3/courseeditor");
  }, 5000);

  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />
      <HeaderContainer
        smallTitle="This won't take long"
        largeTitle="AI is generating your course..."
        alignment="place-self-start"
        flexDirection="flex-col"
        mx="mx-20"
      />
      <Link className="flex flex-row" href="./courseeditor">
        {/* <Image src={loadinghalf1} width={500} height={500} alt="loadinghalf1" />
        <Image src={loadinghalf2} width={500} height={500} alt="loadinghalf2" /> */}
        <Image src={loadingImg} width={1000} height={1000} alt="loading" />
      </Link>
    </div>
  );
}
