import API_BASE_URL from '@/lib/constants/api';
import { SellingResponse } from '@/lib/types/api';

const getSelling = async (): Promise<SellingResponse> => {
  const response = await fetch(`${API_BASE_URL}/store`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('스토어 목록 조회에 실패하였습니다.');
  }

  const responseData: SellingResponse = await response.json();

  return responseData;
};

export default getSelling;
