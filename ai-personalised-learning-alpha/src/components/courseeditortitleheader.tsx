interface courseEditorSectionTitleProps {
  placeholderTitle: string;
  title: (title: string) => void;
}

export default function CourseEditorTitleHeader(
  props: courseEditorSectionTitleProps
) {
  const courseTitleUpdate = (e) => {
    props.title(e.target.value);
  };

  return (
    <div className="my-6 h-20 w-3/4 rounded-xl border-l-[14px] border-[#8E90E7] text-[#353535] drop-shadow">
      <input
        type="text"
        placeholder={props.placeholderTitle}
        className="h-full w-full pl-2 align-middle text-2xl font-bold text-[#353535] placeholder:align-middle placeholder:text-[#353535] "
        onChange={courseTitleUpdate}
      ></input>
    </div>
  );
}
