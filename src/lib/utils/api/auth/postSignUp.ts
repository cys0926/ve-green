import { User } from '@/lib/types';
import { SignupRequest } from '@/lib/types/api';

const postSignUp = async ({
  username,
  password,
  confirmPassword,
}: SignupRequest): Promise<User> => {
  const response = await fetch(`/api/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      confirmPassword,
    }),
    credentials: 'include',
    mode: 'cors',
  });

  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }

  const result = await response.text();

  console.log(result);

  return { username };
};

export default postSignUp;
