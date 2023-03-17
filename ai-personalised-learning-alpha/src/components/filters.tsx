import SubTitle from "./subTitle";

import Slider from "./slider";

export default function filters() {
  return (
    <div className="pl-2">
      <div className="ml-3">
        <SubTitle subtitle="Professionalism" />
      </div>
      <Slider />
      <div className="ml-3">
        <SubTitle subtitle="Humor" />
      </div>

      <Slider />
      <div className="ml-3">
        <SubTitle subtitle="Simplicity" />
      </div>

      <Slider />
      <div className="ml-3">
        <SubTitle subtitle="Synonyms" />
      </div>

      <Slider />
    </div>
  );
}
