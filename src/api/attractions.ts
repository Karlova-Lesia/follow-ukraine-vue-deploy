import axiosInstance from '@/api/axios';
import { ATTRACTIONS_URL } from '@/constants/routes';

export const getAttractionsByCategoryType = (categoryType: string) =>
  axiosInstance.get(ATTRACTIONS_URL, {
    params: {
      categoryType,
    },
  });
