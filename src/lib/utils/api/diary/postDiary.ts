import API_BASE_URL from '@/lib/constants/api';
import { DiaryPostRequest, DiaryPostResponse } from '@/lib/types/api';

const postDiary = async (
  data: DiaryPostRequest,
): Promise<DiaryPostResponse> => {
  const response = await fetch(`${API_BASE_URL}/diary`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('일기 작성에 실패했습니다.');
  }

  const responseData: DiaryPostResponse = await response.json();

  return responseData;
};

export default postDiary;
