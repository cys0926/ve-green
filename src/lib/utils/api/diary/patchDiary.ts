import { AuthResponseType, DiaryPatchRequest } from '@/lib/types/api';
import API_BASE_URL from '@/lib/constants/api';

const patchDiary = async (
  data: DiaryPatchRequest,
): Promise<AuthResponseType> => {
  const response = await fetch(`${API_BASE_URL}/diary`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('일기 수정에 실패했습니다.');
  }

  const responseData: AuthResponseType = await response.json();
  return responseData;
};

export default patchDiary;
