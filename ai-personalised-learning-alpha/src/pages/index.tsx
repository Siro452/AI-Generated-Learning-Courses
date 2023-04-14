import { type NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";
import DacreedLogo from "../components/DacreedLogo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dacreed - AI Alpha</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white font-sans">
        <div className="container flex flex-col justify-center gap-12 px-4 py-16 ">
          <h1 className="items-start bg-gradient-to-r from-[#F2F2F2] via-[#6567EA] via-[#364577] to-[#FFDCB3] bg-clip-text text-[180px] font-bold tracking-tight text-transparent">
            Prototype Testing
          </h1>
          <h2 className="m-2 flex h-16 flex-row items-center  bg-gradient-to-r from-[#4865A6] via-[#AFAFAF] to-[#E3E3E3] bg-clip-text text-5xl text-transparent">
            <DacreedLogo height={100} width={200} />
            AI Learning Content Creator
          </h2>
          <div className="flex justify-end">
            <Button
              type="button"
              text="Prototype 1"
              href="/prototype1/inputuser"
            />
            <Button
              type="button"
              text="Prototype 2"
              href="/prototype2"
              className="ml-20"
            />
            <Button
              type="button"
              text="Prototype 3"
              href="/prototype3/userinput"
              className="ml-20"
            />
            <Button
              type="button"
              text="Prototype 4"
              href="/prototype4/login"
              className="ml-20"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

//this is boiler plate code if you want to use authentication i.e username and password to login

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
