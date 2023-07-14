import React from 'react';
import Image from 'next/image';
import TomatoImage from '$/images/plant/tomato.png';
import moment from 'moment';

const name = '토망이';

function Page({ params }: { params: { id: string; diaryId: string } }) {
  const { id, diaryId } = params;

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
      <h2 className="mt-6 text-2xl font-bold">토망이를 처음 먹은날</h2>
      <span className="mt-3 self-end text-secondary-500">
        {moment().format('YYYY-MM-DD')}
      </span>
      <article className="mt-4 flex w-full flex-col gap-y-2">
        <h3 className="text-xl font-bold">귀요미 준경</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
          blanditiis corporis cumque cupiditate debitis deserunt doloremque
          eligendi, facere in itaque labore molestiae molestias, necessitatibus
          nulla optio possimus, quo quod sed similique sit sunt ullam
        </p>
      </article>
      <article className="mt-8 flex w-full flex-col gap-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
          blanditiis corporis cumque cupiditate debitis deserunt doloremque
          eligendi, facere in itaque labore molestiae molestias, necessitatibus
          nulla optio possimus, quo quod sed similique sit sunt ullam
        </p>
      </article>
    </div>
  );
}

export default Page;
