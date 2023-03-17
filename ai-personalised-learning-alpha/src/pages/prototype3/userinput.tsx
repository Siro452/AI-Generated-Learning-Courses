import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import Button from "../../components/button";

export default function UserInput() {
  return (
    <div>
      <LogoContainer className="" />
      <HeaderContainer
        smallTitle="Let's get started"
        largeTitle="What is your name?"
        flexDirection="flex-col"
      />
      <form className="flex flex-row items-center justify-center">
        <input
          className="mr-4 h-14 w-1/4 rounded-md border border-[#e7e7e7] p-4"
          type="text"
          placeholder="Enter your name"
        />
        <Button type="submit" text="Next" href="/uploadfile" />
      </form>
    </div>
  );
}
