import API_BASE_URL from '@/lib/constants/api';

import { User } from '@/lib/types';
import { AuthResponseType, LoginRequest } from '@/lib/types/api';

const postLogIn = async ({
  username,
  password,
}: LoginRequest): Promise<User> => {
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

  return { username };
};

export default postLogIn;
