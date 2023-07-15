import React from 'react';
import { AIRecipeType } from '@/lib/types/api';

function AiRecipe({
  data,
  isLoading,
}: {
  data: AIRecipeType;
  isLoading: boolean;
}) {
  return (
    <article className="flex flex-col gap-y-1 border p-4">
      <h3 className="text-lg font-semibold">AI 추천 레시피</h3>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <div className="flex w-full justify-center">
          <span className="loader" />
        </div>
      ) : data?.MANUAL ? (
        <div className="flex flex-col px-2">
          <h3 className="font-semibold">{data.RCP_NM}</h3>
          <div className="whitespace-pre-line text-sm">
            {data.MANUAL.map((step) => (
              <div key={step.description}>{step.description}</div>
            ))}
          </div>
        </div>
      ) : (
        <div>AI 추천 레시피가 없습니다.</div>
      )}
    </article>
  );
}

export default AiRecipe;
