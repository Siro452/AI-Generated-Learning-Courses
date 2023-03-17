import Button from "../../components/button";
import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import FileUpload from "../../components/fileupload";

export default function UploadFile() {
  return (
    <div className="flex flex-col items-center">
      <LogoContainer className="self-start" />

      <HeaderContainer
        smallTitle="Upload your file"
        largeTitle="Drag & drop or browse"
        alignment="place-self-start"
        flexDirection="flex-col"
      />
      <div className="flex h-[283px] w-[877px] content-center">
        {/* <FileUpload /> */}
      </div>
      <Button
        className="mr-64 self-end"
        text="Next"
        href="./preferences"
        type="submit"
      />
    </div>
  );
}
