'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ShopImage from '$/images/shop.jpg';

function ShopList() {
  return (
    <div className="px-6">
      <h2 className="text-xl font-semibold">못난이 농산물 구매하기</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 pt-4">
        {Array(10)
          .fill(0)
          .map(() => (
            <div className="flex cursor-pointer flex-col transition-all hover:scale-105">
              <Image src={ShopImage} alt="쇼핑몰" className="" />
              <h3 className="truncate">
                부사 사과 늘품 경북 가정용 못난이 흠집 꿀사과 3kg 5kg 10kg
              </h3>
              <span className="font-semibold">22,900원</span>
              <span className="text-sm text-gray-500">늘품농업회사</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShopList;
