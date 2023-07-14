import API_BASE_URL from '@/lib/constants/api';
import { User } from '@/lib/types';
import { SignupRequest } from '@/lib/types/api';

const postSignUp = async ({
  username,
  password,
  confirmPassword,
}: SignupRequest): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      username,
      password,
      confirmPassword,
    }),
    credentials: 'include',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    mode: 'no-cors',
  });

  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }

  return { username };
};

export default postSignUp;
