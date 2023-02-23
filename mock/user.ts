import { MockMethod } from 'vite-plugin-mock';

export default [
   {
      url: '/mock/api/getList',
      method: 'get',
      response: () => {
         return {
            data: {
               title: '我是mock',
               subTitle: '你使用成功啦',
            },
         };
      },
   },
] as MockMethod[];
