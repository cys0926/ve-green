import API_BASE_URL from '@/lib/constants/api';
import { RecipeResponse } from '@/lib/types/api';

const getYoutubeRecipe = async () => {
  const response = await fetch(`${API_BASE_URL}/recipe/youtube`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  });

  const responseData: RecipeResponse = await response.json();
  if (!response.ok) {
    throw new Error('레시피 정보를 불러오는데 실패했습니다.');
  }

  return responseData;
};

export default getYoutubeRecipe;
