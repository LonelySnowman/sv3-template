import { MockMethod } from 'vite-plugin-mock';
export default [
   {
      url: '/mock/api/getUserInfo',
      method: 'get',
      response: ({ body }) => {
         if (body.username === 'admin') {
            return {
               code: 1,
               success: true,
               data: {
                  username: 'admin',
                  roles: ['admin'],
                  accessToken: 'admin',
               },
            };
         } else {
            return {
               code: 1,
               success: true,
               data: {
                  username: 'common',
                  roles: ['common'],
                  accessToken: 'common',
               },
            };
         }
      },
   },
   {
      url: '/mock/api/login',
      method: 'get',
      response: ({ body }) => {
         if (body.username === 'admin') {
            return {
               code: 1,
               success: true,
               data: {
                  username: 'admin',
                  roles: ['admin'],
                  accessToken: 'admin',
               },
            };
         } else {
            return {
               code: 1,
               success: true,
               data: {
                  username: 'common',
                  roles: ['common'],
                  accessToken: 'common',
               },
            };
         }
      },
   },
] as MockMethod[];
