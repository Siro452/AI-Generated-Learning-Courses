import BlueCircle from "./blueCircle";
import Title from "./h1";
import SubTitle from "./subTitle";
export default function DragDrop() {
  return (
    <div className={`p-6`}>
      <div
        className="col-span-1 row-span-1 p-4 text-left "
        style={{ marginLeft: "-60px" }}
      >
        <span className=" block text-lg text-neutral-600">
          <SubTitle subtitle="Upload your files" />
        </span>
        <span className="mx-3"></span>
        <span className="block pb-10 text-3xl font-black font-extrabold drop-shadow-md">
          <Title title="Drag & drop or browse" />
        </span>
      </div>
      <div>
        <div
          className=" flex h-60 w-full flex-col items-center justify-center rounded-xl border-2 p-2 pb-4"
          style={{
            boxShadow: "-2px 2px 2px 0px rgba(0,0,0,0.3)",
            height: "19rem",
          }}
        >
          <BlueCircle />
          <p className="text-lg text-neutral-300">.png, .jpg, .pdf supported</p>
          <p className="text-center text-lg text-neutral-300">or paste text</p>
        </div>
      </div>
    </div>
  );
}
