'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import TomatoImage from '$/images/plant/tomato.png';

const name = '토망이';

function Page() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const result = await get({ username: user!.username });
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDiary();
  });

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="py-4 text-center text-xl font-bold">{name}의 성장일기</h1>
      <span className="mb-4">47 일 째</span>
      <Image
        src={TomatoImage}
        alt="토망이"
        style={{
          width: '33%',
        }}
        className="animate-gomugomu"
      />
      <div className="flex w-full flex-col-reverse px-4 py-8">
        <Link
          className="flex w-full items-baseline  gap-x-3 border-b pb-1 text-gray-500"
          href="/diary/1/write"
        >
          <PencilSquareIcon className="h-6 w-12 self-center justify-self-center" />
          <div className="flex-1 text-xl font-semibold">{name} 일기 쓰기</div>
        </Link>
      </div>
      <ul className="flex w-full flex-col-reverse gap-y-8 px-4">
        {Array(20)
          .fill(0)
          .map((value, index) => {
            return (
              <Link
                className="flex w-full items-baseline gap-x-3 border-b pb-1"
                href={`/diary/1/${value}`}
              >
                <div className="text-xl font-bold text-primary-500">
                  # {index + 1}
                </div>
                <div className="flex-1 text-xl font-semibold">
                  {name}와 함께한지 {index + 1}일
                </div>
                <div className="text-sm font-light text-secondary-500">
                  {moment().format('YYYY-MM-DD')}
                </div>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default Page;
