import { api } from "../../utils/api";
import { useState } from "react";
import Button from "../../components/button";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { FormEventHandler } from "react";
import { useRouter } from "next/router";

export default function InputUser() {
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
    router.push("/prototype1/inputfile");
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
    <div className="flex items-center justify-center font-sans">
      <form
        className="items-left m-72 flex w-full flex-col
        justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <label className="mb-16 items-start  text-5xl tracking-tight ">
          What&apos;s Your Name?
        </label>
        <input
          className="placeholder: mb-8 h-14 rounded-full bg-[#E9E9E9]
          py-[2]
          pl-[14px]"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <label className="m-4 flex w-fit justify-center self-end rounded-full bg-gradient-to-r from-[#8197FA] via-[#BB416D] via-[#A663CC] to-[#4765E8] p-1">
          <input
            className="block rounded-full bg-white px-4 py-2 font-semibold text-black"
            type="submit"
            value="Submit"
          ></input>
        </label>
      </form>
    </div>
  );
}
