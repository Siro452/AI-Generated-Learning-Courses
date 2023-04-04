import DacreedLogo from "./DacreedLogo";

interface LogoContainerProps {
  className: string;
}

export default function LogoContainer(props: LogoContainerProps) {
  return (
    <div className={props.className}>
      <DacreedLogo className="mx-12" width={200} height={50} />
      <p className="mx-12 my-2 text-sm text-blue-900">
        AI Learning Content Creator
      </p>
    </div>
  );
}
