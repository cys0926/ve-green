import API_BASE_URL from '@/lib/constants/api';

const getRecipeIngredient = async (ingredient: string) => {
  const response = await fetch(`${API_BASE_URL}/recipe/${ingredient}`, {
    method: 'GET',
  });

  if (!response.ok) {
    console.log(response.statusText);
  }

  return response;
};

export default getRecipeIngredient;
