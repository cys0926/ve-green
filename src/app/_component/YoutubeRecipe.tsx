'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import TempImage from '$/images/tmp.png';
import { YoutubeResponse } from '@/lib/types/api';
import getYoutubeRecipe from '@/lib/utils/api/recipe/getYoutubeRecipe';
import shuffle from '@/lib/utils/array/shuffle';

function YoutubeRecipe() {
  const [data, setData] = useState<YoutubeResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipe = await getYoutubeRecipe();
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

  return (
    <section className="mx-auto flex w-11/12 flex-col gap-y-4">
      <h2 className="text-xl font-semibold">Youtube 채식 레시피 </h2>
      <ul className="flex gap-x-4 overflow-x-scroll scrollbar-hide">
        {shuffle(data).map((value) => (
          <li className="flex-basis flex w-[40%] flex-shrink-0 select-none flex-col gap-y-0.5">
            <a
              href={value.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex aspect-[4/3] w-full items-center overflow-hidden rounded-lg"
            >
              <Image
                src={value.thumbnailUrl ?? '/images/noImage.png'}
                width={400}
                height={300}
                alt="레시피"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                className="hover:scale-105"
              />
            </a>
            <h3 className="truncate font-semibold">{value.name}</h3>
            <span className="text-xs text-gray-400 ">{value.userName}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default YoutubeRecipe;
