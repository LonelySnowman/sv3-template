import { post } from '@/utils/http';
import { TestRequest, TestResponse } from '@/api/test/types';

export const Test = async (data?: TestRequest) => {
   return post<TestResponse>({}, '/test', data);
};
