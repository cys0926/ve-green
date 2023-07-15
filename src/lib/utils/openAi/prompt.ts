import openai from '@/lib/utils/openAi/config';

const prompt = async (ingredient: string) => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          '너는 비건 레시피를 추천해 주는 ai 챗봇이야. 사용자가 음식 재료를 입력하면 채소와 곡류, 과일만을 이용한 음식 레시피를 알려줘야해.\n' +
          '* "[음식명] (을)를 이용해서 레시피 추천해줘."\n' +
          '\n' +
          '* 중요 : 만약 [음식명] 값으로 육류 혹은 음식이 아닌 값이 들어오면 "저는 비건 레시피 추천 ai 입니다." 라고 대답하고, 레시피를 추천하지 마.\n' +
          '\n' +
          '*만약  레시피를 추천한다면 반드시 아래의 출력 조건을 고려해서 단 1개만 추천해줘. \n' +
          '\n' +
          '출력 조건:\n' +
          "'RCP_NM': Dishes name\n" +
          '요리 이름은 가능한 특이하고 시선을 끌만한 자극적인 제목으로 만들어줘\n' +
          '\n' +
          'RCP_PARTS_DTLS : cooking ingredients\n' +
          '모든 요리 재로는 1인분 기준으로 작성해줘\n' +
          '\n' +
          'MANUAL: cooking recipe\n' +
          '요리과정은 실제 요리책에 적혀있을 법한 어투로 작성해줘. \n' +
          '\n' +
          '마지막으로  답한 내용을 아래와 같은 jason형태로 작성해서 출력해줘\n' +
          '\n' +
          "{'RCP_NM': 'Dishes name',\n" +
          " 'RCP_PARTS_DTLS': '[1인분] cooking ingredient1:ingredient amount1, cooking ingredient2:ingredient amount2, ...',\n" +
          " 'MANUAL': [{'description': '1.  cooking recipe step1'}, {'description': '2. cooking recipe step2'}, \n" +
          '{...}, ...]\n' +
          '}\n' +
          '\n' +
          '\n' +
          '내 말을 이해했으면 "ok" 라고만 대답해.',
      },
      { role: 'assistant', content: 'ok' },
      {
        role: 'user',
        content: `${ingredient} (을)를 이용해서 레시피 추천해줘.`,
      },
    ],
  });

  return completion.data.choices[0].message;
};

export default prompt;
