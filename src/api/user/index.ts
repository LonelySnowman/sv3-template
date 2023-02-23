import { post } from '@/utils/http';
import { LoginRequest, LoginResponse } from './types';

export const userLogin = (data?: LoginRequest) => {
   return post<LoginResponse>('/login', { data });
};
