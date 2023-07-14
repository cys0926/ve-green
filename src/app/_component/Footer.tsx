import React from 'react';
import { NAV_LINKS } from '@/lib/constants/navigation';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <ul className="flex h-16 w-full items-center border-t">
      {NAV_LINKS.map(({ href, title, imageSrc }) => (
        <Link
          key={title}
          href={href}
          className="relative flex h-full flex-1 items-center justify-center"
        >
          <Image src={imageSrc} alt="배너 이미지" className="hover:scale-105" />
        </Link>
      ))}
    </ul>
  );
}

export default Footer;
