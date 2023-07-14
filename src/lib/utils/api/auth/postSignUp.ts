import API_BASE_URL from '@/lib/constants/api';
import { SignupRequest } from '@/lib/types';

const postSignUp = async ({
  username,
  password,
  confirmPassword,
}: SignupRequest) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      confirmPassword,
    }),
  });

  if (!response.ok) {
    console.log(response.statusText);
  }

  return response;
};

export default postSignUp;
