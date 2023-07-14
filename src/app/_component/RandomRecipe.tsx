import React from 'react';
import Image from 'next/image';
import TempImage from '$/images/tmp.png';
import DiceImage from '$/images/dice.png';

const temp =
  '[1인분]조선부추 50g, 날콩가루 7g(1⅓작은술)\n' +
  '·양념장 : 저염간장 3g(2/3작은술), 다진 대파 5g(1작은술), 다진 마늘 2g(1/2쪽), 고춧가루 2g(1/3작은술), 요리당 2g(1/3작은술), 참기름 2g(1/3작은술), 참깨 약간' +
  '[1인분]조선부추 50g, 날콩가루 7g(1⅓작은술)\n' +
  '·양념장 : 저염간장 3g(2/3작은술), 다진 대파 5g(1작은술), 다진 마늘 2g(1/2쪽), 고춧가루 2g(1/3작은술), 요리당 2g(1/3작은술), 참기름 2g(1/3작은술), 참깨 약간';

function RandomRecipe() {
  return (
    <section className="mx-auto flex w-11/12 flex-col gap-y-4">
      <h2 className="text-xl font-semibold">이런 레시피는 어떠세요?</h2>
      <div className="relative flex gap-x-3">
        <Image
          src={TempImage}
          alt="레시피 이미지 미리보기"
          style={{
            width: '30%',
            height: 'fit-content',
            borderRadius: '0.5rem',
            objectFit: 'cover',
          }}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">사과 새우 북엇국</h3>
          <div className="line-clamp-3 whitespace-pre-line text-sm">{temp}</div>
          <span className="ml-auto mt-auto text-sm text-gray-400">
            자세히 보러 가기
          </span>
        </div>
      </div>
      <button className="mx-auto flex items-center gap-x-2 rounded bg-primary-500 px-2 py-1 text-sm text-white shadow-lg">
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
