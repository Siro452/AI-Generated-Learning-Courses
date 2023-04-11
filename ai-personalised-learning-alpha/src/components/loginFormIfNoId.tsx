import Title from "./h1";
import SubTitle from "./subTitle";

export default function LoginFormWithNoId() {


    
  return (
    <div className="grid gap-4">
      <div className="">
        <div
          className="col-span-1 row-span-1 p-4 text-left "
          style={{ marginLeft: "-60px" }}
        >
          <span className=" block text-lg text-neutral-600">
            <SubTitle subtitle="Let's get started!" />
          </span>
          <span className="mx-3"></span>
          <span className="block pb-10 text-3xl font-black font-extrabold drop-shadow-md">
            <Title title="What is your name?" />
          </span>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border-2 p-2"
          />
        </div>
      </div>
    </div>
  );
}
