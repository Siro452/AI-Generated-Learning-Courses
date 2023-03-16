import Image2 from "next/image";

export default function DacreedLogo() {
  return (
    <div className="flex h-40 items-start items-end pl-40">
      <Image2
        className="object-cover"
        src="https://www.dacreed.com/static/Dacreed-logo-dark-f80888dcbd37d98ef1c3c84aabb5c049.png "
        alt="company logo"
      />
    </div>
  );
}
