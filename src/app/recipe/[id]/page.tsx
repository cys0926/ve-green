'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useRecipeStore from '@/store/recipeStore';
import SHOP_LIST from '@/lib/constants/shop';

function Page() {
  const recipe = useRecipeStore((state) => state.recipe);
  const router = useRouter();

  if (!recipe) {
    router.back();
  }

  return (
    <div className="flex flex-col bg-primary-200">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={recipe.ATT_FILE_NO_MAIN ?? '/images/noImage.png'}
          width={100}
          height={100}
          alt="음식 이미지"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className=" border-b border-t bg-white px-6 py-4">
        <h1 className="text-2xl font-bold">{recipe.RCP_NM}</h1>
        <h2 className="pt-2 text-lg font-bold">재료</h2>
        <p className="whitespace-pre-line pt-2">
          {recipe.RCP_PARTS_DTLS?.replaceAll(',', '\n')
            .replaceAll('·', '\n● ')
            .replaceAll(']', ']\n ')
            .replaceAll(':', '\n')}
        </p>
      </div>
      <div className="mt-6 bg-white px-6 py-4">
        <h2 className="pt-2 text-lg font-bold">레시피</h2>
        <ul className="mt-3 flex flex-col gap-y-3">
          {recipe.MANUAL.map((item) => (
            <li className="flex gap-x-3" key={item.description}>
              <Image
                src={item.image}
                width={120}
                height={120}
                style={{
                  width: '30%',
                  minWidth: '30%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
                alt="조리 순서 이미지"
              />
              <p className="leading-tight">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-col gap-y-2 bg-white px-6 py-4">
        <h2 className="pt-2 text-lg font-bold">요리 재료 구매하기</h2>
        {['당근', '양파', '토마토'].map((item) => {
          const filteredShop = SHOP_LIST.filter((shop) =>
            shop.name.includes(item),
          );

          return (
            <div className="flex flex-col gap-y-2" key={item}>
              <h3 className="font-bold">{item} 구매하러 가기</h3>
              <div className="flex w-full justify-between gap-x-6 overflow-x-scroll scrollbar-hide">
                {filteredShop.map((value) => (
                  <a
                    href={value.productLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative flex w-[30%] transform flex-col"
                  >
                    <Image
                      src={value.imgUrl}
                      width={100}
                      height={100}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      className="transition-all duration-200 hover:scale-105"
                      alt="조리 순서 이미지"
                    />
                    <h4 className="truncate py-1">{value.name}</h4>
                    <span className="font-semibold">{value.price}</span>
                    <span className="text-sm text-gray-500">{value.mall}</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
