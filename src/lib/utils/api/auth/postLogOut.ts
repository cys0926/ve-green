import API_BASE_URL from '@/lib/constants/api';

const postLogOut = async () => {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: 'POST',
  });

  if (!response.ok) {
    console.log(response.statusText);
  }

  return response;
};

export default postLogOut;
