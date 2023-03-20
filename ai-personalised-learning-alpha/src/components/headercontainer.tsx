interface HeaderContainerProps {
  smallTitle: string;
  largeTitle: string;
  alignment?: string;
  flexDirection?: string;
}

export default function HeaderContainer(props: HeaderContainerProps) {
  return (
    <div
      className={`mx-32 my-16 flex  ${props.flexDirection} font-black ${props.alignment}`}
    >
      <h3 className="my-6 text-xl font-normal">{props.smallTitle}</h3>
      <h2 className="text-3xl font-semibold">{props.largeTitle}</h2>
    </div>
  );
}
