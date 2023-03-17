import Button from "../../components/button";
import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import confirmEdit from "../../images/confirmeditplaceholder.png";
import Image from "next/image";

export default function Confirmation() {
  return (
    <div className="flex flex-col justify-center">
      <LogoContainer className="" />

      <HeaderContainer
        smallTitle="Confirm your edits"
        largeTitle="Hi, user"
        alignment="place-self-start"
        flexDirection="flex-col-reverse"
      />
      <Image
        src={confirmEdit}
        alt="edit confirmation screenshot"
        className="place-self-center"
      />
      <Button href="" text="Finish" className="mr-36 self-end" type="submit" />
    </div>
  );
}
