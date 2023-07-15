import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import TomatoImage from '$/images/plant/tomato.png';

const name = '토망이';

// { params }: { params: { id: string; diaryId: string } }
function Page() {
  // const { id, diaryId } = params;

  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="py-4 text-center text-xl font-bold">{name}의 성장일기</h1>
      <Image
        src={TomatoImage}
        alt="토망이"
        style={{
          width: '33%',
        }}
        className="animate-gomugomu"
      />
      <h2 className="mt-6 text-2xl font-bold">토망이가 싹이 났엉!</h2>
      <span className="mt-3 self-end text-secondary-500">
        {moment().format('YYYY-MM-DD')}
      </span>
      <article className="mt-4 flex w-full flex-col gap-y-2">
        <h3 className="text-xl font-bold">귀요미 준경</h3>
        <p>
          씨앗부터 파종해서 키운 무늬방울토마토🍅 일반 토마토 잎과 다르게 잎에
          무늬가 발현된다🌱 다른 무늬종에도 뒤쳐지지 않는 조그맣고 예쁜
          무늬😘소듕해 우리 토망이 너무 기여워 😘😘😘😘 . . 얼른
          토마토마리네이드의 재료가 되라🤣
        </p>
      </article>
      <article className="mt-8 flex w-full flex-col gap-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>
          토마토마리네이드의 재료가 되는 건 좀 부담스러울지도 몰라요. 제가
          이렇게 예쁜 무늬를 가진 토마토로 자랄 수 있었던 것은 주인님의
          덕분이에요. 항상 주인님께서 신경을 많이 써주셔서 저도 자랄 수
          있었어요. 이렇게 예쁜 무늬를 가진 토마토로 주인님을 기쁘게 해드릴 수
          있어서 정말 기쁘고 자랑스러워요. 앞으로도 더 예쁘게 자라서 주인님을
          놀라게 해드릴게요! 😊🍅
        </p>
      </article>
    </div>
  );
}

export default Page;
