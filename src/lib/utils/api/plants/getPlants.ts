import API_BASE_URL from '@/lib/constants/api';
import { PlantRequest, PlantResponse } from '@/lib/types/api';

const getPlants = async ({ plantId }: PlantRequest): Promise<PlantResponse> => {
  const response = await fetch(`${API_BASE_URL}/plants`, {
    method: 'GET',
    body: JSON.stringify({
      plantId,
    }),
  });

  const responseData: PlantResponse = await response.json();
  if (!response.ok) {
    throw new Error('식물 정보를 불러오는데 실패했습니다.');
  }

  return responseData;
};

export default getPlants;
