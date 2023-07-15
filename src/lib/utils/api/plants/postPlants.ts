import API_BASE_URL from '@/lib/constants/api';
import { PlantsPostRequest } from '@/lib/types/api';

const postPlants = async ({
  name,
  type,
  username,
}: PlantsPostRequest): Promise<string> => {
  const response = await fetch(
    `${API_BASE_URL}/plants/${name}/${type}/${username}`,
    {
      method: 'POST',
    },
  );

  if (!response.ok) {
    throw new Error('새로운 식물을 생성하지 못하였습니다.');
  }

  return response.text();
};

export default postPlants;
