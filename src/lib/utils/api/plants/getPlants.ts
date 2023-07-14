import API_BASE_URL from '@/lib/constants/api';

const getPlants = async (plantId: Long) => {
  const response = await fetch(`${API_BASE_URL}/plants`, {
    method: 'GET',
    body: JSON.stringify({
      plantId,
    }),
  });

  if (!response.ok) {
    console.log(response.statusText);
  }

  return response;
};

export default getPlants;
