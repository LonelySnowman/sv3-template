import { msgPost } from '@/utils/http';
import { LoginRequest, LoginResponse, reLoginRequest } from '@/api/user/types';

export const userLogin = async (data?: LoginRequest) => {
   return msgPost<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
   return msgPost<LoginResponse>({}, '/getUserInfo', data);
};
