'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import tomato from '$/images/plant/tomato.png';
import potato from '$/images/plant/potato.png';
import tangerine from '$/images/plant/tangerine.png';
import useAuthStore from '@/store/authStore';
import getPlantList from '@/lib/utils/api/plants/getPlantList';
import { PlantResponse } from '@/lib/types/api';
import useStore from '@/lib/hooks/useStore';

const PLANT_IMAGE_MAP = [tomato, potato, tangerine];

function Page() {
  const [plantList, setPlantList] = useState<PlantResponse[]>(
    [] as PlantResponse[],
  );
  const user = useStore(useAuthStore, (state) => state.user);
  const router = useRouter();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const result = await getPlantList({ username: user!.username });
        setPlantList(result);
      } catch (err) {
        console.error(err);
      }
    };

    if (!user) {
      return;
    }

    fetchPlants();
  }, [user]);

  return (
    <div className="bg-gradient-dirt relative flex h-full w-full flex-col items-center py-12">
      <Link
        className="absolute right-6 top-6 flex cursor-pointer items-center gap-x-1 rounded-lg bg-primary-500 p-2 text-white"
        href="/diary/create"
      >
        <PlusCircleIcon className="h-6 hover:scale-105" /> 반려 식물 만들기
      </Link>
      {user ? (
        <div className="mt-auto flex w-full flex-1 items-end justify-around">
          {plantList.map((plant, idx) => (
            <Image
              key={plant.id}
              src={PLANT_IMAGE_MAP[idx % 3]}
              style={{
                width: '130px',
                height: 'fit-content',
              }}
              alt="캐릭터"
              className="animat scale-y-110 animate-bounce cursor-pointer duration-700"
              onClick={() => {
                router.push(`/diary/${plant.id}}`);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-auto flex w-full flex-1 items-end justify-around">
          <Image
            src={PLANT_IMAGE_MAP[0]}
            style={{
              width: '130px',
              height: 'fit-content',
            }}
            alt="캐릭터"
            className="animat scale-y-110 animate-bounce cursor-pointer duration-700"
          />
        </div>
      )}

      <div className="mt-12 flex w-11/12 items-center justify-center rounded bg-primary-400 py-4 text-center text-white">
        {/* eslint-disable-next-line no-nested-ternary */}
        {user ? (
          plantList.length > 0 ? (
            <>
              환영합니다, 주인님!
              <br />
              제가 하루 종일 광합성을 통해 모은 에너지처럼 주인님의 하루가
              햇빛과
              <br />
              긍정적인 에너지로 가득했으면 좋겠어요.
              <br />
              이야기도 나눠보면 어떨까요?
            </>
          ) : (
            <span className="py-4">
              반려 식물을 추가하고 식물 일기를 작성해보세요.
            </span>
          )
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
