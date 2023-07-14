import API_BASE_URL from '@/lib/constants/api';
import { LoginRequest } from '@/lib/types';

const postLogIn = async ({ username, password }: LoginRequest) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    console.log(response.statusText);
  }

  return response;
};

export default postLogIn;
