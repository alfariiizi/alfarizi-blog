import Image from "next/image";

type Props = {
  isInVault: boolean;
  src: string;
  alt: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

const CustomImage = ({
  isInVault = true,
  src,
  alt,
  priority,
  width,
  height,
}: Props) => {
  const url = isInVault
    ? `https://raw.githubusercontent.com/alfariiizi/blogposts-vault/main/images/${src}`
    : "src";
  return (
    <div className="h-full w-full">
      <Image
        className="mx-auto rounded"
        src={url}
        alt={alt}
        priority={priority || false}
        width={width || 300}
        height={height || 300}
      />
    </div>
  );
};

export default CustomImage;
