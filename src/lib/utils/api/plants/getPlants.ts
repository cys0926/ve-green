import API_BASE_URL from '@/lib/constants/api';
import { PlantRequest, PlantResponse } from '@/lib/types/api';

const getPlants = async ({
  username,
}: PlantRequest): Promise<PlantResponse[]> => {
  const response = await fetch(`${API_BASE_URL}/plants/list/${username}`);

  if (!response.ok) {
    throw new Error('식물 정보를 불러오는데 실패했습니다.');
  }

  const responseData = await response.json();

  return responseData;
};

export default getPlants;
