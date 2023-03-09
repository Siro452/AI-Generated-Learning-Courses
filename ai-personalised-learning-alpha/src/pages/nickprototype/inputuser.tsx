import { api } from "../../utils/api";
import { useState } from "react";
import Button from "../../components/button";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function InputUser() {
  const [name, setName] = useState("");

  // const createUser = api.createUser.createUser.useMutation({});
  // const createEvent = api.createUser.createEvent.useMutation({});

  // async function handleSubmit(e: any) {
  //   e.preventDefault();
  //   await createUser.mutateAsync({
  //     username: name,
  //     sessionID: nanoid(),
  //     eventID: nanoid(),
  //   });
  //   setName("");
  //   await createEvent.mutateAsync({
  //     eventType: "registration",
  //     eventDescription: "Registration button clicked",
  //     eventStatus: "on",
  //   });
  // }

  return (
    <div className="flex items-center justify-center font-sans">
      {/* //localstorage useitem */}
      <form
        className="items-left m-72 flex w-full flex-col
        justify-center gap-4"
        // onSubmit={handleSubmit}
      >
        <label className="mb-16 items-start  text-5xl tracking-tight ">
          What's Your Name?
        </label>
        <input
          className="placeholder: mb-8 h-14 rounded-full bg-[#E9E9E9]
          py-[2]
          pl-[14px]"
          type="text"
          // value={name}
          // onChange={(e) => {
          //   setName(e.target.value);
          // }}
          placeholder="Enter your name"
        />

        <Button
          alignment="self-end"
          text="Next"
          href="/nickprototype/inputfile"
        />
      </form>
    </div>
  );
}
