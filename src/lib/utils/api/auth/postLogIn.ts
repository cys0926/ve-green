import API_BASE_URL from '@/lib/constants/api';

import { User } from '@/lib/types';
import { LoginRequest } from '@/lib/types/api';

const postLogIn = async ({
  username,
  password,
}: LoginRequest): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('로그인에 실패하였습니다.');
  }

  return { username };
};

export default postLogIn;
