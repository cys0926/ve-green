'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import tomato from '$/images/plant/tomato.png';
import useAuthStore from '@/store/authStore';

function Page() {
  const router = useRouter();
  // const user = useAuthStore((state) => state.user);
  const user = { username: '쁘띠 준경' };

  return (
    <div className="bg-gradient-dirt flex h-full w-full flex-col items-center gap-y-12 py-12">
      {user && (
        <div className="mt-auto flex h-1/2 items-end">
          <Image
            src={tomato}
            style={{
              width: '130px',
              height: 'fit-content',
            }}
            alt="캐릭터"
            className="animat scale-y-110 animate-bounce cursor-pointer duration-700"
            onClick={() => {
              router.push('/diary/1');
            }}
          />
        </div>
      )}

      <div className="mt-auto flex w-11/12 items-center justify-center rounded bg-primary-400 py-4 text-center text-white">
        {user ? (
          <>
            환영합니다, 주인님!
            <br />
            제가 하루 종일 광합성을 통해 모은 에너지처럼 주인님의 하루가 햇빛과
            <br />
            긍정적인 에너지로 가득했으면 좋겠어요.
            <br />
            이야기도 나눠보면 어떨까요?
          </>
        ) : (
          <Link href="/signin" className="py-4">
            식물 일기를 작성하려면 로그인이 필요합니다.
          </Link>
        )}
      </div>
    </div>
  );
}

export default Page;
