'use client';

import React from 'react';
import Image from 'next/image';
import TempImage from '$/images/tmp.png';
import useRecipeStore from '@/store/recipeStore';
import { useRouter } from 'next/navigation';

function Page() {
  const recipe = useRecipeStore((state) => state.recipe);
  const router = useRouter();

  const tempMenual = [
    {
      image: TempImage,
      description:
        '1. 부추는 깨끗이 씻어 물기를 제거하고, 5cm 길이로 썰고 부추에 날콩가루를 넣고 고루 섞이도록 버무린다.',
    },
    {
      image: TempImage,
      description:
        '2. 찜기에 면보를 깔고 부추를 넣은 후 김이 오르게 쪄서 파랗게 익힌다.',
    },
    {
      image: TempImage,
      description:
        '3. 저염간장에 다진 대파, 다진 마늘, 고춧가루, 요리당 , 참기름, 참깨를 섞어 양념장을 만들고 찐 부추는 그릇에 담아낸다.',
    },
  ];

  if (!recipe) {
    router.back();
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={recipe.ATT_FILE_NO_MAIN ?? '/images/noImage.png'}
          width={100}
          height={100}
          alt="음식 이미지"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="mt-6 border-b border-t bg-white px-6 py-4">
        <h1 className="text-2xl font-bold">{recipe.RCP_NM}</h1>
        <h2 className="pt-2 text-lg font-bold">재료</h2>
        <p className="whitespace-pre-line pt-2">
          {recipe.RCP_PARTS_DTLS.replaceAll(',', '\n')
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
                style={{
                  width: '30%',
                  objectFit: 'cover',
                  height: '100%',
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
        {['당근', '양파'].map((item) => (
          <div className="flex flex-col gap-y-2" key={item}>
            <h3 className="font-bold">{item} 구매하러 가기</h3>
            <div className="flex w-full justify-between">
              {Array(3)
                .fill(0)
                .map(() => (
                  <div className="relative flex w-[30%] flex-col">
                    <Image src={TempImage} style={{}} alt="조리 순서 이미지" />
                    <h4 className="truncate">
                      부사 사과 늘품 경북 가정용 못난이 흠집 꿀사과 3kg 5kg 10kg
                    </h4>
                    <span className="font-semibold">22,900원</span>
                    <span className="text-sm text-gray-500">늘품농업회사</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
