import { get } from '@/utils/http';

export const userLogin = async (params?: any) => {
   return get<any>({}, '/login', params);
};
