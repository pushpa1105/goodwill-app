import Image from "next/image";

export const Logo = ({
  height = 85,
  width = 85,
}: {
  height?: number;
  width?: number;
}) => {
  return <Image height={height} width={width} alt="logo" src="/goodwill-logo.png" />;
};
