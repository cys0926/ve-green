import React from 'react';

function AiRecipe() {
  return (
    <article className="flex flex-col gap-y-1 border p-4">
      <h3 className="text-lg font-semibold">AI 추천 레시피</h3>
      <div className="flex flex-col px-2">
        <h3 className="font-semibold">사과 새우 북엇국</h3>
        <div className="whitespace-pre-line text-sm">
          1. 대파와 마늘을 다진 후 팬에 넣고 볶아주세요.
          <br />
          2. 다진 토마토를 넣고 익을 때까지 조리해주세요.
          <br />
          3. 채소(당근, 양파, 샐러리 등)를 썰어 넣고 함께 조리해주세요. <br />
          4. 식물성 육수를 넣고 약간 끓여주세요. <br />
          5. 각종 양념(소금, 후추, 파슬리 등)을 넣고 맛을 조절해주세요. <br />
          6. 적당한 시간 동안 더 조리한 후 완성입니다!
        </div>
      </div>
    </article>
  );
}

export default AiRecipe;
