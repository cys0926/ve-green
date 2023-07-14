import API_BASE_URL from '@/lib/constants/api';
import { AuthResponseType, PlantsPatchRequest } from '@/lib/types/api';

const patchPlants = async ({
  plantId,
  newName,
}: PlantsPatchRequest): Promise<AuthResponseType> => {
  const response = await fetch(`${API_BASE_URL}/plants/list`, {
    method: 'PATCH',
    body: JSON.stringify({
      plantId,
      newName,
    }),
  });

  if (!response.ok) {
    throw new Error('식물 이름을 수정하지 못하였습니다.');
  }
  const result: AuthResponseType = await response.json();

  return result;
};

export default patchPlants;
