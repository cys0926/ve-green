'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import TomatoImage from '$/images/plant/tomato.png';
import { DiaryResponse } from '@/lib/types/api';
import getDiary from '@/lib/utils/api/diary/getDiary';

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [, setData] = useState<DiaryResponse>({} as DiaryResponse);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const result = await getDiary({ id });
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlant();
  }, [id]);

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="py-4 text-center text-xl font-bold">토망이의 성장일기</h1>
      <span className="mb-4">1 일 째</span>
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
          <div className="flex-1 text-xl font-semibold">토망이 일기 쓰기</div>
        </Link>
      </div>
      <ul className="flex w-full flex-col gap-y-8 px-4">
        <Link
          className="flex w-full items-baseline gap-x-3 border-b pb-1"
          href={`/diary/${1}/1`}
        >
          <div className="text-xl font-bold text-primary-500"># 1</div>
          <div className="flex-1 text-xl font-semibold">
            토망이가 싹이 났엉!
          </div>
          <div className="text-sm font-light text-secondary-500">
            {moment().format('YYYY-MM-DD')}
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default Page;
