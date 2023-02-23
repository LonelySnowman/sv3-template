import { get } from '@/utils/http';

export const userLogin = async (params?: any) => {
   return get<any>({}, '/getList', params);
};

// export const usersogin = (data?: LoginRequest) => {
//    return post<LoginResponse>({ data }, 'url');
// };
