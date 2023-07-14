import API_BASE_URL from '@/lib/constants/api';
import { RecipeResponse } from '@/lib/types/api';

const getRecipe = async (): Promise<RecipeResponse> => {
  const response = await fetch(`${API_BASE_URL}/recipe`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('레시피 정보를 불러오는데 실패했습니다.');
  }

  const responseData = await response.json();

  return responseData;
};

export default getRecipe;
