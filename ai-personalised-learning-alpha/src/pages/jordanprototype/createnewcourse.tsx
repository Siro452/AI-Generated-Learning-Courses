import Title from "../../components/h1";
import FileUpload from "../../components/fileupload";

export default function createNewCourse() {
  return (
    <div className="flex border-8 max-w-max .max-h-full ">
      <header>
        <Title title="Create new course"/>
      </header>

      <section>Sidebar</section>
      <main>
        <FileUpload />
      </main>
    </div>
  );
}
