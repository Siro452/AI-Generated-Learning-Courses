import LogoContainer from "../../components/logocontainer";
import HeaderContainer from "../../components/headercontainer";
import Button from "../../components/button";
import Slider from "../../components/slider";

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
      <div className="flex flex-row items-center">
        <div className="mx-64">
          <Slider label="Professionalism" />
          <Slider label="Humour" />
          <Slider label="Simplicity" />
          <Slider label="Synonyms" />
        </div>
        <Button
          className="self-end"
          text="Generate"
          href="./loadingpage"
          type="submit"
        />
      </div>
    </div>
  );
}
