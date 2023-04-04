import LogoContainer from "../../components/logocontainer";
import HeaderContainer from "../../components/headercontainer";
import { api } from "../../utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function InputName() {
  const [name, setName] = useState("");
  const createUser = api.createUser.createUser.useMutation({});
  const findExistingUserSession = api.findUser.findExistingUserSession.useQuery(
    {
      userid: global.localStorage?.getItem("userid") ?? "",
    }
  );
  const router = useRouter();
  if (
    !findExistingUserSession.isLoading &&
    findExistingUserSession.data !== null &&
    findExistingUserSession.data !== undefined
  ) {
    // User not found.
    console.log(findExistingUserSession.data);
    router.push("/prototype4/uploadfile");
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const createNewUser = async () => {
        const result = await createUser.mutateAsync({
          username: name,
          sessions: [
            {
              sessionDate: new Date(),
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

  return (
    <div className="h-screen bg-white">
      <div className="] h-3/4 -translate-y-40 -skew-y-6 bg-gradient-to-r from-[#7778e5]  via-[#a887d4] via-[#6c88e4]    to-[#9e87d7] ">
        <div className="translate-y-40  skew-y-6">
          <LogoContainer className="m-16" />
        </div>

        <div className="flex w-full  justify-center">
          <div className="flex h-2/5 w-1/2 translate-y-40 skew-y-6 justify-center rounded-md bg-white bg-opacity-20 p-36 backdrop-blur-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center  "
            >
              <label className="mt-4 mb-6 -translate-y-16 -translate-x-24 self-start text-2xl font-bold text-[#202B81]">
                What is your name?
              </label>
              <input
                className="mr-4 h-14 w-full rounded-md border-white  bg-white bg-opacity-20  p-4 backdrop-blur-md placeholder:text-white"
                placeholder="Enter your name here"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="submit"
                value="Next >"
                className="my-12 translate-x-24 self-end py-4 px-9 text-xl font-bold text-yellow-400 blur-none"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
