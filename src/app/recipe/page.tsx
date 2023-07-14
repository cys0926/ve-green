import React from 'react';
import Image from 'next/image';
import tomato from '$/images/plant/cherry_tomato.png';

function Page() {
  return (
    <div className="bg-gradient-dirt flex h-full w-full flex-col items-center gap-y-12 py-12">
      <div className="mt-auto flex h-1/2 items-end">
        <Image
          src={tomato}
          style={{
            width: '120px',
            height: 'fit-content',
          }}
          alt="캐릭터"
          className="animat scale-y-110 animate-bounce duration-700"
        />
      </div>
      <div className="flex w-11/12 items-center justify-center rounded bg-primary-400 py-4 text-center">
        환영합니다, 주인님!
        <br />
        제가 하루 종일 광합성을 통해 모은 에너지처럼 주인님의 하루가 햇빛과
        <br />
        긍정적인 에너지로 가득했으면 좋겠어요.
        <br />
        이야기도 나눠보면 어떨까요?
      </div>
    </div>
  );
}

export default Page;
