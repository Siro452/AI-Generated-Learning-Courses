import Button from "../../components/button";

export default function postuploadloading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-1/2 flex-col">
        <h2 className="mt-48 mb-12 text-3xl">Did you know,</h2>
        <h4 className="mb-4 text-3xl text-[#818181]">
          That dogs can't look up
        </h4>
        <img src="https://smashinghub.com/wp-content/uploads/2014/08/cool-loading-animated-gif-1.gif"></img>
        <Button
          type="button"
          alignment="self-end"
          text="Next"
          href="/nickprototype/questioninput"
        />
      </div>
    </div>
  );
}
