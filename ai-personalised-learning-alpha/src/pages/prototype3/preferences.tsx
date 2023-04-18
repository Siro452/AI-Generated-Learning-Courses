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
        mx="ml-20"
      />
      <div className="flex flex-row items-center">
        <div className="mx-64">
          <h4>Professionalism</h4>
          <Slider />
          <h4>Humour</h4>
          <Slider />
          <h4>Simplicity</h4>
          <Slider />
          <h4>Synonyms</h4>
          <Slider />
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
