import { AuthResponseType, DiaryDeleteRequest } from '@/lib/types/api';
import API_BASE_URL from '@/lib/constants/api';

const getDiaryList = async (
  data: DiaryDeleteRequest,
): Promise<AuthResponseType> => {
  const response = await fetch(`${API_BASE_URL}/diary`, {
    method: 'DELETE',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('일기를 삭제하는데 실패했습니다.');
  }
  const responseData: AuthResponseType = await response.json();

  return responseData;
};

export default getDiaryList;
