interface IconProps {
  src: string;
  alt: string;
  size?: number;
}

export function Icon({ src, alt, size = 40 }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="inline-block"
    />
  );
}
