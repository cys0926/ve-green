import React from 'react';
import Image from 'next/image';
import shuffle from '@/lib/utils/array/shuffle';
import SHOP_LIST from '@/lib/constants/shop';

function ShopList() {
  return (
    <div className="px-6">
      <h2 className="text-xl font-semibold">못난이 농산물 구매하기</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 pt-4">
        {shuffle(SHOP_LIST).map((value) => (
          <a
            href={value.productLink}
            className="flex cursor-pointer flex-col transition-all hover:scale-105"
            key={value.name}
            target="_blank"
            rel="noreferrer"
          >
            <div className="aspect-square w-full overflow-hidden">
              <Image
                src={value.imgUrl}
                width={100}
                height={100}
                alt="쇼핑몰"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 className="truncate">{value.name}</h3>
            <span className="font-semibold">{value.price}</span>
            <span className="text-sm text-gray-500">{value.mall}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ShopList;
