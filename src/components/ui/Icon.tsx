import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  size?: number;
}

export function Icon({ src, alt, size = 40 }: IconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="inline-block"
    />
  );
}
