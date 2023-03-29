// import { api } from "../../utils/api";
// import { useState } from "react";
// import Button from "../../components/button";
// import { nanoid } from "nanoid";
// import Link from "next/link";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import { FormEventHandler } from "react";

// export default function InputUser() {
//   const [name, setName] = useState("");
//   const createUser = api.createUser.createUser.useMutation({});
//   const findUser = api.findUser.findExistingUserSession.useQuery();

//   const handleSubmit = async (e: React.FormEvent) => {
//     const handleFindUser = async () => {
//       if (findUser.data?.username === name) {
//         console.log("user exists");
//       } else {
//         e.preventDefault();
//         try {
//           const createNewUser = async () => {
//             await createUser.mutateAsync({
//               username: name,
//               sessions: [
//                 {
//                   sessionDate: new Date().toISOString(),
//                   event: [
//                     {
//                       eventType: "User Created",
//                       eventDescription: "User Created",
//                       eventStatus: "Success",
//                     },
//                   ],
//                 },
//               ],
//             });
//           };
//           await createNewUser();
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     };
//     await handleFindUser();
//   };

//   return (
//     <div className="flex items-center justify-center font-sans">
//       {/* //localstorage useitem */}
//       <form
//         className="items-left m-72 flex w-full flex-col
//         justify-center gap-4"
//         // onSubmit={handleSubmit}
//       >
//         <label className="mb-16 items-start  text-5xl tracking-tight ">
//           What&apos;s Your Name?
//         </label>
//         <input
//           className="placeholder: mb-8 h-14 rounded-full bg-[#E9E9E9]
//           py-[2]
//           pl-[14px]"
//           type="text"
//           // value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//           placeholder="Enter your name"
//         />
//         <input
//           className="m-4 rounded-full bg-gradient-to-r from-[#8197FA] via-[#BB416D] via-[#A663CC] to-[#4765E8] p-1"
//           type="submit"
//           value="submit"
//         ></input>
//         {/* // why is this component not working? as submit */}
//         {/* <Button
//           type="button"
//           alignment="self-end"
//           text="Next"
//           href="/nickprototype/inputfile"
//         /> */}
//       </form>
//     </div>
//   );
// }

import { api } from "../../utils/api";
import { useState } from "react";
import Button from "../../components/button";
import { nanoid } from "nanoid";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { FormEventHandler } from "react";

export default function InputUser() {
  const [name, setName] = useState("");
  const createUser = api.createUser.createUser.useMutation({});
  const findUser = api.findUser.findExistingUserSession.useQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    const handleFindUser = async () => {
      if (findUser.data?.username === name) {
        console.log("user exists");
      } else {
        e.preventDefault();
        try {
          const createNewUser = async () => {
            await createUser.mutateAsync({
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
          };
          await createNewUser();
        } catch (error) {
          console.log(error);
        }
      }
    };
    await handleFindUser();
  };

  return (
    <div className="flex items-center justify-center font-sans">
      {/* //localstorage useitem */}
      <form
        className="items-left m-72 flex w-full flex-col
        justify-center gap-4"
        // onSubmit={handleSubmit}
      >
        <label className="mb-16 items-start  text-5xl tracking-tight ">
          What&apos;s Your Name?
        </label>
        <input
          className="placeholder: mb-8 h-14 rounded-full bg-[#E9E9E9]
          py-[2]
          pl-[14px]"
          type="text"
          // value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <input
          className="m-4 rounded-full bg-gradient-to-r from-[#8197FA] via-[#BB416D] via-[#A663CC] to-[#4765E8] p-1"
          type="submit"
          value="submit"
        ></input>
        {/* // why is this component not working? as submit */}
        {/* <Button
          type="button"
          alignment="self-end"
          text="Next"
          href="/nickprototype/inputfile"
        /> */}
      </form>
    </div>
  );
}
