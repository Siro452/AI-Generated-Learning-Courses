import HeaderContainer from "../components/headercontainer";

export default function DragDrop() {
  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center pr-20">
      {/* <div
        className="col-span-1 row-span-1 p-4 text-left "
        style={{ marginLeft: "-60px" }}
      ></div> */}

      <span className="w-100 text-xl flex items-center h-2 pb-20 text-indigo-800 whitespace-nowrap">
        <HeaderContainer
          smallTitle=""
          largeTitle="Drag & Drop your files here"
        />
      </span>
      <div
        className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2"
        style={{
          boxShadow: "-2px 2px 2px 0px rgba(0,0,0,0.3)",
          height: "28rem",
          width: "26rem"
        }}
      >
        <p className="text-lg text-neutral-300 ">Drag & drop your files here</p>
        <p className="text-center text-lg text-neutral-300">
          or click to upload
        </p>
        {/* <input type="file" className="flex block h-0 w-0 flex-col items-center justify-center rounded-xl border-none p-0 m-0"></input> */}
      </div>
    </div>
  );
}
