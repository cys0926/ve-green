import API_BASE_URL from '@/lib/constants/api';
import { RecipeIngredientResponse } from '@/lib/types/api';

const getRecipeIngredient = async (
  ingredient: string,
): Promise<RecipeIngredientResponse> => {
  const response = await fetch(`${API_BASE_URL}/recipe/${ingredient}`, {
    method: 'GET',
  });

  const responseData: RecipeIngredientResponse = await response.json();
  if (!response.ok) {
    throw new Error('레시피 리스트를 불러오는데 실패했습니다.');
  }

  return responseData;
};

export default getRecipeIngredient;
