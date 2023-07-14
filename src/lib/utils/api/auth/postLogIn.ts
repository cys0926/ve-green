import API_BASE_URL from '@/lib/constants/api';
import { AuthResponseType, LoginRequest } from '@/lib/types/api';

const postLogIn = async ({
  username,
  password,
}: LoginRequest): Promise<AuthResponseType> => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const responseData: AuthResponseType = await response.json();

  if (!response.ok) {
    console.log(response.statusText);
    console.log(responseData);
  }

  return responseData;
};

export default postLogIn;
