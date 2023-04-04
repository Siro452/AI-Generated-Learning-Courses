import SubTitle from "./subTitle";

import Slider from "./slider";

export default function filters() {
  return (
    <div className="pl-2">
      <div className="ml-10 text-white">
        <SubTitle subtitle="Professionalism" />
      </div>
      <Slider />
      <div className="ml-10 text-white">
        <SubTitle subtitle="Humor" />
      </div>

      <Slider />
      <div className="ml-10 text-white">
        <SubTitle subtitle="Simplicity" />
      </div>

      <Slider />
    </div>
  );
}
