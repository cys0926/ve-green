import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

function Header() {
  return (
    <div className="flex h-16 w-full items-center gap-x-3 border-b px-4 py-3">
      <Link href="/">
        <Logo className="h-12 fill-primary-500" />
      </Link>
    </div>
  );
}

export default Header;
