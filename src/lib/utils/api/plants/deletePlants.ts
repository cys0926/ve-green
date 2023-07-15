import API_BASE_URL from '@/lib/constants/api';
import { AuthResponseType } from '@/lib/types/api';

const deletePlants = async ({
  plantId,
}: {
  plantId: number;
}): Promise<AuthResponseType> => {
  const response = await fetch(`${API_BASE_URL}/plants`, {
    method: 'DELETE',
    body: JSON.stringify({
      plantId,
    }),
  });

  if (!response.ok) {
    throw new Error('식물을 삭제하지 못하였습니다.');
  }
  const result: AuthResponseType = await response.json();

  return result;
};

export default deletePlants;
