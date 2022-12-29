import axiosInstance from '@/api/axios';

export const getPropositionsById = (propositionCategory: string, id: number) =>
  axiosInstance.get(propositionCategory, {
    params: {
      id,
    },
  });
