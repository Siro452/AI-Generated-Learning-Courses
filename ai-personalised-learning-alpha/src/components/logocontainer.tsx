import DacreedLogo from "./DacreedLogo";

interface LogoContainerProps {
  className: string;
}

export default function LogoContainer(props: LogoContainerProps) {
  return (
    <div className={props.className}>
      <DacreedLogo className="m-12" width={400} height={100} />
    </div>
  );
}
