import { Category } from '../redux/types/prestation';
import { useQuery } from 'react-query';
const API = "https://www.wecasa.fr/api/techtest";

interface PrestationsResponse {
  categories: Category[];
}

export const useGetPrestationsQuery = () => {
  return useQuery<PrestationsResponse, Error>('getPrestations', async () => {
    const response = await fetch(`${API}/universe`);
    if (!response.ok) {
      throw new Error('Failed to fetch prestations');
    }
    const data: PrestationsResponse = await response.json();
    return data;
  }, {
    cacheTime: 60 * 60 * 1000 //cache data for 1 hour 
  });
};
