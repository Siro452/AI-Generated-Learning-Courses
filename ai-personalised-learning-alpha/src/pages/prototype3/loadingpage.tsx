import HeaderContainer from "../../components/headercontainer";
import Image from "next/image";
import loadinghalf1 from "../../images/loadinghalf1.svg";
import loadinghalf2 from "../../images/loadinghalf2.svg";
import LogoContainer from "../../components/logocontainer";
import spinner from '../../images/Loading-spinner.gif'
import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />
      <HeaderContainer
        smallTitle="This won't take long"
        largeTitle="AI is generating your course..."
        alignment="place-self-start"
        flexDirection="flex-col"
      />
      <Link className="flex flex-row" href="./courseeditor">
        {/* <Image src={loadinghalf1} width={500} height={500} alt="loadinghalf1" />
        <Image src={loadinghalf2} width={500} height={500} alt="loadinghalf2" /> */}
   <Image src={spinner} width={500} height={500} alt="loading-screen" />

      </Link>
    </div>
  );
}
