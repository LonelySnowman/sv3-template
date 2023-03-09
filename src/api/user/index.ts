import { post } from '@/utils/http';
import { LoginRequest, LoginResponse, reLoginRequest } from '@/api/user/types';

export const userLogin = async (data?: LoginRequest) => {
   return post<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
   return post<LoginResponse>({}, '/getUserInfo', data);
};
