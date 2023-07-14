import API_BASE_URL from '@/lib/constants/api';

const getProfile = async () => {
  const response = await fetch(`${API_BASE_URL}/profile`, {
    method: 'GET',
  });

  if (!response.ok) {
    console.log(response.statusText);
  }

  return response;
};

export default getProfile;
