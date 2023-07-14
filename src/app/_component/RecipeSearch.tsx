import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import AIRecipe from '@/app/_component/AIRecipe';
import TempImage from '$/images/tmp.png';

function RecipeSearch() {
  return (
    <section className="mx-auto flex w-11/12 flex-col gap-y-4">
      <h2 className="text-xl font-semibold">레시피 검색하기</h2>
      <form className="flex w-full border px-4 py-2">
        <input
          placeholder="원하는 음식 재료와 유형을 검색해보세요."
          className="flex-1"
        />
        <button type="button">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </form>
      <AIRecipe />
      <article className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
        {Array(10)
          .fill(0)
          .map(() => (
            <div className="flex flex-col gap-y-1">
              <Image src={TempImage} alt="레시피 이미지 미리보기" />
              <h3>사과 새우 북엇국</h3>
            </div>
          ))}
      </article>
    </section>
  );
}

export default RecipeSearch;
