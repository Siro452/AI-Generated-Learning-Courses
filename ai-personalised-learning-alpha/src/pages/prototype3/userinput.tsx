import HeaderContainer from "../../components/headercontainer";
import LogoContainer from "../../components/logocontainer";
import Button from "../../components/button";
import { api } from "../../utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UserInput() {
  const [name, setName] = useState("");
  const createUser = api.createUser.createUser.useMutation({});
  const findUser = api.findUser.findUser.useQuery({
    userid: global.localStorage?.getItem("userid") ?? "",
  });
  const router = useRouter();

  if (
    !findUser.isLoading &&
    findUser.data !== null &&
    findUser.data !== undefined
  ) {
    // User not found.
    console.log(findUser.data);
    router.push("/prototype3/uploadfile");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    const handleFindUser = async () => {
      e.preventDefault();
      try {
        const createNewUser = async () => {
          const result = await createUser.mutateAsync({
            username: name,
            sessions: [
              {
                sessionDate: new Date().toISOString(),
                event: [
                  {
                    eventType: "User Created",
                    eventDescription: "User Created",
                    eventStatus: "Success",
                  },
                ],
              },
            ],
          });
          localStorage.setItem("userid", result.id);
        };
        await createNewUser();
      } catch (error) {
        console.log(error);
      }
    };
    await handleFindUser();
  };

  return (
    <div>
      <LogoContainer className="" />
      <HeaderContainer
        smallTitle="Let's get started"
        largeTitle="What is your name?"
        flexDirection="flex-col"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center"
      >
        <input
          className="mr-4 h-14 w-1/4 rounded-md border border-[#e7e7e7] p-4"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Submit"
          className="rounded-full bg-gradient-to-br from-[#354678]  to-[#8088F1] py-4 px-9 text-xl font-bold text-white"
        ></input>
      </form>
    </div>
  );
}
