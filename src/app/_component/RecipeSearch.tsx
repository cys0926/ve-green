'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import AIRecipe from '@/app/_component/AIRecipe';
import getRecipeIngredient from '@/lib/utils/api/recipe/getRecipeIngredient';
import { AIRecipeType, RecipeResponse } from '@/lib/types/api';
import Link from 'next/link';
import useRecipeStore from '@/store/recipeStore';

type Inputs = {
  ingredient: string;
};

function RecipeSearch() {
  const [recipeList, setRecipeList] = useState<RecipeResponse[]>(
    [] as RecipeResponse[],
  );
  const setRecipe = useRecipeStore((state) => state.setRecipe);

  const [aiData, setAiData] = useState<AIRecipeType>({} as AIRecipeType);

  const { register, handleSubmit, setError } = useForm<Inputs>();

  const onSearch = handleSubmit(async (data) => {
    const { ingredient } = data;

    try {
      const res = await getRecipeIngredient(ingredient);
      // const aiRes = await getAIRecipe(ingredient);
      setRecipeList(res);
      // setAiData(aiRes);
    } catch (err) {
      if (err instanceof Error) {
        setError('root', { message: err.message });
      }
    }
  });

  const onLinkClick = (data: RecipeResponse) => () => {
    setRecipe(data);
  };

  return (
    <section className="mx-auto flex w-11/12 flex-col gap-y-4">
      <h2 className="text-xl font-semibold">레시피 검색하기</h2>
      <form onSubmit={onSearch} className="flex w-full border px-4 py-4">
        <input
          placeholder="원하는 음식 재료와 유형을 검색해보세요. 예) 바질, 토마토, 당근"
          className="w-full"
          {...register('ingredient', {
            required: { value: true, message: '아이디를 입력해주세요.' },
          })}
        />
        <div className="flex items-center">
          <input type="submit" value="" />
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
      </form>
      <AIRecipe data={aiData} />
      <article className="flex flex-col gap-y-3 border p-4">
        <h3 className="text-lg font-semibold">레시피 검색 결과</h3>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-6">
          {recipeList.map((data) => (
            <Link
              href={`/recipe/${data.RCP_NM}`}
              onClick={onLinkClick(data)}
              key={data.RCP_NM}
              className="flex flex-col gap-y-1"
            >
              <div className="aspect-square overflow-hidden border">
                <Image
                  width={300}
                  height={300}
                  src={data.ATT_FILE_NO_MAIN ?? '/images/noImage.png'}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  alt="레시피 이미지 미리보기"
                />
              </div>
              <h3>{data.RCP_NM ?? '데이터를 불러오는데 실패했습니다.'}</h3>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}

export default RecipeSearch;
