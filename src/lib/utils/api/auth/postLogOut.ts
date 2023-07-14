import API_BASE_URL from '@/lib/constants/api';
import { AuthResponseType } from '@/lib/types/api';

const postLogOut = async () => {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: 'POST',
  });

  const responseData: AuthResponseType = await response.json();

  if (!response.ok) {
    console.log(response.statusText);
    console.log(responseData);
  }

  return responseData;
};

export default postLogOut;
