import Button from "../../components/button";

export default function InputFile() {
  return (
    <div className="flex flex-col items-center justify-center justify-items-center font-sans">
      <div className="container m-auto flex w-full flex-col items-center justify-center gap-12">
        <div className="mt-48 flex w-1/2 flex-col items-start justify-center">
          <img
            src="https://www.dacreed.com/static/Dacreed-logo-dark-f80888dcbd37d98ef1c3c84aabb5c049.png"
            className="h-12 w-52 items-start"
          ></img>
          <h3 className="text-[#5F00BA]">AI Learning Content Creator</h3>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          <h4 className="mb-8 self-start text-xl">Hi, Admin</h4>
          <div className="flex h-48 w-full flex-row justify-end bg-gray-200">
            <input className="justify-item-end self-end" type="file"></input>
          </div>
          <h5 className="text-2xl text-[#818181]">
            Upload your learning material
          </h5>
          <Button
            type="button"
            alignment="self-end"
            text="Upload"
            href="/nickprototype/postuploadloading"
          />
        </div>
      </div>
    </div>
  );
}
