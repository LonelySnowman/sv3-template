import axios from 'axios';
import type {
   AxiosInstance,
   AxiosRequestConfig,
   AxiosResponse,
   AxiosError,
   InternalAxiosRequestConfig,
} from 'axios';
import { BaseResponse } from './types';

const service: AxiosInstance = axios.create({
   baseURL: Boolean(import.meta.env.VITE_APP_DEV_USE_MOCK)
      ? import.meta.env.VITE_APP_MOCK_BASEURL
      : import.meta.env.VITE_APP_API_BASEURL,
   timeout: 15000,
});

// axios实例拦截请求
service.interceptors.request.use(
   (config: InternalAxiosRequestConfig) => {
      return config;
   },
   (error: AxiosError) => {
      return Promise.reject(error);
   }
);

// axios实例拦截响应
service.interceptors.response.use(
   (response: AxiosResponse) => {
      return response;
   },
   // 请求失败
   (error: any) => {
      const { response } = error;
      return Promise.reject(response.data);
   }
);

// T 为 res.data.data 的类型
// BaseResponse 为 res.data 的类型
// 此处相当于响应拦截
// 为响应数据进行定制化处理
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
   const conf = config;
   return new Promise((resolve, reject) => {
      service
         .request<any, AxiosResponse<BaseResponse>>(conf)
         .then((res: AxiosResponse<BaseResponse>) => {
            const data = res.data;
            // 如果data.code为错误代码返回message信息
            if (data.code != 0) {
               reject(data.message);
            } else {
               // 此处返回data信息 也就是 api 中配置好的 Response类型
               resolve(data.data as T);
            }
         });
   });
};

export function get<T = any, U = any>(
   config: AxiosRequestConfig,
   url: string,
   parms?: U
): Promise<T> {
   return request({ ...config, url, method: 'GET', params: parms });
}

export function post<T = any, U = any>(
   config: AxiosRequestConfig,
   url: string,
   data: U
): Promise<T> {
   return request({ ...config, url, method: 'POST', data: data });
}
