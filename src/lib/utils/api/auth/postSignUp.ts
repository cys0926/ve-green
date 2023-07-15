import { User } from '@/lib/types';
import { SignupRequest } from '@/lib/types/api';
import API_BASE_URL from '@/lib/constants/api';

const postSignUp = async ({
  username,
  password,
  confirmPassword,
}: SignupRequest): Promise<User> => {
  console.log(
    JSON.stringify({
      username,
      password,
      confirmPassword,
    }),
  );
  const response = await fetch(`${API_BASE_URL}/signup2`, {
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
  });

  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }

  const result = await response.text();

  console.log(result);

  return { username };
};

export default postSignUp;
