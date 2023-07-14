import API_BASE_URL from '@/lib/constants/api';
import { ProfileTypeResponse } from '@/lib/types/api';

const getProfile = async (): Promise<ProfileTypeResponse> => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'GET',
  });

  const responseData: ProfileTypeResponse = await response.json();
  if (!response.ok) {
    console.log(response.statusText);
    console.log(responseData);
  }

  return responseData;
};

export default getProfile;
