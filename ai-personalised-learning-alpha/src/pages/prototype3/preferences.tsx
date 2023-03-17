import LogoContainer from "../../components/logocontainer";
import HeaderContainer from "../../components/headercontainer";
import Button from "../../components/button";

export default function Preferences() {
  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />
      <HeaderContainer
        smallTitle="Change the output tone"
        largeTitle="Dial your preferences"
        alignment="place-self-start"
        flexDirection="flex-col"
      />
      <div className="flex flex-row">
        <div>Radial buttons</div>
        <Button text="Generate" href="./loadingpage" type="submit" />
      </div>
    </div>
  );
}
