'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import AIRecipe from '@/app/_component/AIRecipe';
import TempImage from '$/images/tmp.png';
import getRecipeIngredient from '@/lib/utils/api/recipe/getRecipeIngredient';
import { RecipeIngredientResponse } from '@/lib/types/api';

type Inputs = {
  ingredient: string;
};

function RecipeSearch() {
  const [recipe, setRecipe] = useState<RecipeIngredientResponse>(
    {} as RecipeIngredientResponse,
  );

  const { register, handleSubmit, setError } = useForm<Inputs>();

  const onSearch = handleSubmit(async (data) => {
    const { ingredient } = data;

    try {
      const res = await getRecipeIngredient(ingredient);
      setRecipe(res);
    } catch (err) {
      if (err instanceof Error) {
        setError('root', { message: err.message });
      }
    }
  });

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
      <AIRecipe data={recipe.openAi} />
      <article className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
        {Array(10)
          .fill(0)
          .map(() => (
            <div key={Math.random()} className="flex flex-col gap-y-1">
              <Image src={TempImage} alt="레시피 이미지 미리보기" />
              <h3>사과 새우 북엇국</h3>
            </div>
          ))}
      </article>
    </section>
  );
}

export default RecipeSearch;
