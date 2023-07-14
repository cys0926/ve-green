import API_BASE_URL from '@/lib/constants/api';
import { User } from '@/lib/types';

const getProfile = async (): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'GET',
  });

  const responseData: User = await response.json();

  if (!response.ok) {
    throw new Error('프로필 가져오는데 실패하였습니다.');
  }

  return responseData;
};

export default getProfile;
