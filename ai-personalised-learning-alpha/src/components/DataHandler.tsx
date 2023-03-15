// import { api } from "../utils/api";
// import { useState } from "react";
// import { string } from "zod";
// import { useMutation } from "@tanstack/react-query";
// import React from "react";
// import { contextProps } from '@trpc/react-query/shared';
// import { api } from '../utils/api';
export default function DataHandler() {

  return <div>ghghgh</div>
//   // const { data, error, isLoading } = await api.receivedData.mutateData.useMutation({ clientData });

//   // const [response, setResponse] = useState<{
//   //   id: string;
//   //   name: string;
//   //   message: string;
//   //   createdAt: Date;
//   // }>();
  
//   const [response, setResponse] = useState<string>();
  // const mutation = api.routers.receivedData.mutateData.useMutation();
//   const [clientData, setClientData] = useState<string>("");

//   const mutateData = api.receivedData.mutateData.useMutation({
  
//   });

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const response = await mutateData.mutateAsync({ clientData });

//     console.log(response, "response has been returned.");
//     setClientData("");
//     setResponse(response);
//   };

//   //
//   return (
//     <div style={styles}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="clientDataInput">Enter your data:</label>
//         <input
//           id="clientDataInput"
//           type="text"
//           placeholder="Type here"
//           value={clientData}
//           onChange={(e) => setClientData(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {mutation.isLoading && <p className="my-1.5 	border pl-20">Loading...</p>}
//       {mutation.error && <p>Error: {mutation.error.message}</p>}
//       {response && <p>{JSON.stringify(response)}</p>}

//       {mutation.data && <p> Received Data: {mutation.data}</p>}
//     </div>
//   );
// }

// const styles = {
//   width: "100vw",
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   textColor: "white",
//   background: "white",
};