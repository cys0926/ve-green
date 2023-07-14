import API_BASE_URL from '@/lib/constants/api';
import { YoutubeResponse } from '@/lib/types/api';

const getYoutubeRecipe = async () => {
  const response = await fetch(`${API_BASE_URL}/recipe/youtube`);
  console.log(response);

  if (!response.ok) {
    throw new Error('레시피 정보를 불러오는데 실패했습니다.');
  }

  const result: YoutubeResponse[] = await response.json();

  return result;
};

export default getYoutubeRecipe;
