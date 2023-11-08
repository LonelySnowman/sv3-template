import { MockMethod } from 'vite-plugin-mock';
export default [
   {
      url: '/mock/api/test',
      method: 'post',
      response: ({ body }) => {
         return body;
      },
   },
] as MockMethod[];
