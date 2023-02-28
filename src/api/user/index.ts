import { post } from '@/utils/http';
import { LoginRequest, LoginResponse } from '@/api/user/types';

export const userLogin = async (data?: LoginRequest) => {
   return post<LoginResponse>({}, '/login', data);
};

export const getUserInfo = async (data?: LoginRequest) => {
   return post<LoginResponse>({}, '/getUserInfo', data);
};
