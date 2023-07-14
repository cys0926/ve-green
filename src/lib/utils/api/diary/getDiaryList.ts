import { DiaryListResponse } from '@/lib/types/api';
import API_BASE_URL from '@/lib/constants/api';

const getDiaryList = async (): Promise<DiaryListResponse[]> => {
  const response = await fetch(`${API_BASE_URL}/diary/list`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('일기 목록을 불러오는데 실패했습니다.');
  }
  const responseData: DiaryListResponse[] = await response.json();

  return responseData;
};

export default getDiaryList;
