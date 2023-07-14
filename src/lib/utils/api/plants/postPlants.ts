import API_BASE_URL from '@/lib/constants/api';
import { AuthResponseType, PlantsPostRequest } from '@/lib/types/api';

const postPlants = async ({
  name,
  type,
  status,
}: PlantsPostRequest): Promise<AuthResponseType> => {
  const response = await fetch(`${API_BASE_URL}/plants/list`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      type,
      status,
    }),
  });

  if (!response.ok) {
    throw new Error('새로운 식물을 생성하지 못하였습니다.');
  }
  const result: AuthResponseType = await response.json();

  return result;
};

export default postPlants;
