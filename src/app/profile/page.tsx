import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="flex h-full flex-col justify-center gap-y-8 p-6 text-white">
      <Link
        className="bg-primary-500 p-4 shadow-lg hover:bg-primary-600"
        href="/signin"
      >
        로그인
      </Link>
      <Link
        className="bg-primary-500 p-4 shadow-lg hover:bg-primary-600"
        href="/signup"
      >
        회원가입
      </Link>
    </div>
  );
}

export default Page;
