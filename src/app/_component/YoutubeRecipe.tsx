import React from 'react';
import Image from 'next/image';
import TempImage from '$/images/tmp.png';

function YoutubeRecipe() {
  return (
    <section className="mx-auto flex w-11/12 flex-col gap-y-4">
      <h2 className="text-xl font-semibold">Youtube 채식 레시피 </h2>
      <ul className="flex gap-x-4 overflow-x-scroll scrollbar-hide">
        {Array(10)
          .fill(0)
          .map(() => (
            <li className="flex-basis flex w-[40%] flex-shrink-0 select-none flex-col gap-y-0.5">
              <div className="relative flex aspect-[4/3] w-full items-center overflow-hidden rounded-lg">
                <Image
                  src={TempImage}
                  alt="레시피"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <h3 className="font-semibold ">새우 사과 북어국</h3>
              <span className="text-xs text-gray-400 ">승우아빠</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default YoutubeRecipe;
