import API_BASE_URL from '@/lib/constants/api';
import { PlantsListResponse } from '@/lib/types/api';

const getPlantsList = async (): Promise<PlantsListResponse> => {
  const response = await fetch(`${API_BASE_URL}/plants/list`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('식물 리스트를 불러오는데 실패했습니다.');
  }
  const result: PlantsListResponse = await response.json();

  return result;
};

export default getPlantsList;
