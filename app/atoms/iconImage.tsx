import Image from 'next/image';

export interface IconImageProps {
  src: string;
  alt: string;
}

export const IconImage = ({ src, alt }: IconImageProps) => {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 64px, 80px"
        className="object-contain drop-shadow-sm"
      />
    </div>
  );
};