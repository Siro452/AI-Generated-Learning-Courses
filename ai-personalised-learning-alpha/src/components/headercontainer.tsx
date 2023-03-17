interface HeaderContainerProps {
  smallTitle: string;
  largeTitle: string;
  alignment?: string;
  flexDirection?: string;
}

export default function HeaderContainer(props: HeaderContainerProps) {
  return (
    <div
      className={`my-16 mx-96 flex  ${props.flexDirection} font-black ${props.alignment}`}
    >
      <h3 className="my-6 text-xl font-normal">{props.smallTitle}</h3>
      <h2 className="text-3xl font-semibold">{props.largeTitle}</h2>
    </div>
  );
}
