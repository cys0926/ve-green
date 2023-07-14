import { DiaryResponse } from '@/lib/types/api';
import API_BASE_URL from '@/lib/constants/api';

const getDiary = async ({
  diaryId,
}: {
  diaryId: number;
}): Promise<DiaryResponse> => {
  const response = await fetch(`${API_BASE_URL}/diary/${diaryId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('일기를 불러오는데 실패했습니다.');
  }
  const responseData: DiaryResponse = await response.json();

  return responseData;
};

export default getDiary;
