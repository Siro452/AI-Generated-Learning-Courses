import EditorButton from "../../components/editorbutton";
import AddIcon from "@mui/icons-material/Add";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import Button from "../../components/button";
import TextInput from "../../components/textinput";

export default function QuestionInput() {
  return (
    <div className="h-full w-full bg-[#f2f2f2]">
      <div className="flex flex-col items-center justify-center bg-inherit py-12">
        <div className="flex w-1/2 flex-col items-start justify-center py-12">
          <img
            src="https://www.dacreed.com/static/Dacreed-logo-dark-f80888dcbd37d98ef1c3c84aabb5c049.png"
            className="h-12 w-52 items-start"
          ></img>
          <h3 className="text-[#5F00BA]">AI Learning Content Creator</h3>
        </div>
        <div className="flex h-full w-1/2 flex-row items-center">
          <form className="m-3 flex h-full w-3/4 flex-col items-center">
            <h2 className="self-start py-4 text-4xl font-bold">
              Edit Your Course
            </h2>
            <TextInput
              title="Course Title"
              placeholder="Enter / edit course title"
              h="h-10"
              rounded="rounded-full"
            />
            <TextInput
              title="Course Description"
              placeholder="Enter / edit course description"
              h="h-10"
              rounded="rounded-full"
            />
            <TextInput
              title="Section 1"
              placeholder="Enter / edit section paragraph"
              h="h-48"
              rounded="rounded-3xl"
              pb="pb-36"
            />
            <TextInput
              title="Test 1"
              placeholder=""
              h="h-48"
              rounded="rounded-3xl"
              pb="pb-36"
            />

            <Button
              type="button"
              text="Confirm"
              href="/confirmation"
              alignment="self-end"
            />
          </form>
          <div className="flex flex-col">
            <EditorButton icon={<AddIcon className="h-7 w-7" />} />
            <EditorButton icon={<InsertPhotoIcon className="h-7 w-7" />} />
            <EditorButton
              icon={<PlayCircleOutlineIcon className="h-7 w-7" />}
            />
            <EditorButton icon={<TextFormatIcon className="h-7 w-7" />} />
          </div>
        </div>
      </div>
    </div>
  );
}
