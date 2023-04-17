import { useState } from "react";
import Title from "./h1";
import SubTitle from "./subTitle";
import { useRouter } from "next/router";
import { api } from "../utils/api";

export default function LoginFormWithNoId() {
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const createUserMutation = api.createUser.createUser.useMutation({});
  const findExistingUserSessionQuery =
    api.findUser.findExistingUserSession.useQuery({
      userid: global.localStorage?.getItem("userid") ?? "",
    });
  const router = useRouter();
  const handleUserIdChange = (newUserId) => {
    setUserId(newUserId);
  };

  const handleNameChange = async (event) => {
    setUserName(username);
    const name = event.target.value;
    localStorage.setItem("userid", name);

    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const createNewUser = async () => {
          const result = await createUserMutation.mutateAsync({
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
  }
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
            // onChange={handleNameChange}
          />
        </div>
      </div>
    </div>
  );
}
