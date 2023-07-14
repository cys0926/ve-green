'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DiceImage from '$/images/dice.png';
import getRecipe from '@/lib/utils/api/recipe/getRecipe';
import { RecipeResponse } from '@/lib/types/api';

function RandomRecipe() {
  const [data, setData] = useState<RecipeResponse>({} as RecipeResponse);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipe = await getRecipe();
        setData(recipe);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };

    fetchData();

    return () => {};
  }, []);

  const onClick = async () => {
    try {
      const recipe = await getRecipe();
      setData(recipe);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <section className="mx-auto flex w-11/12 flex-col gap-y-4">
      <h2 className="text-xl font-semibold">이런 레시피는 어떠세요?</h2>
      <div className="relative flex gap-x-3">
        <Image
          src={data.ATT_FILE_NO_MAIN ?? '/images/noImage.png'}
          alt="레시피 이미지 미리보기"
          width={100}
          height={100}
          style={{
            width: '30%',
            height: 'fit-content',
            borderRadius: '0.5rem',
            objectFit: 'cover',
          }}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">
            {data.RCP_NM ?? '데이터를 불러오는데 실패했습니다.'}
          </h3>
          <p className="line-clamp-3 whitespace-pre-line text-sm">
            {data.RCP_PARTS_DTLS ?? '다시 시도해주세요.'}
          </p>
          <Link
            href="/recipe/1"
            className="ml-auto mt-auto text-sm text-gray-400"
          >
            자세히 보러 가기
          </Link>
        </div>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="mx-auto flex items-center gap-x-2 rounded bg-primary-500 px-2 py-1 text-sm text-white shadow-lg"
      >
        <Image
          src={DiceImage}
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
          alt="주사위"
        />
        랜덤 레시피 추천 받기
      </button>
    </section>
  );
}

export default RandomRecipe;
