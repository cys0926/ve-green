import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  image: StaticImageData;
  href: string;
};

function Banner({ href, title, image }: Props) {
  return (
    <Link
      href={href}
      className="relative flex aspect-video w-4/5 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-xl transition-all hover:scale-105 hover:brightness-110"
    >
      <Image
        src={image}
        alt="레시피 배너"
        style={{
          position: 'absolute',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          filter: 'brightness(0.7)',
          zIndex: -1,
        }}
      />
      <span className="text-3xl font-semibold tracking-widest text-white">
        {title}
      </span>
    </Link>
  );
}

export default Banner;
