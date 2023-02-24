import { MockMethod } from 'vite-plugin-mock';

export default [
   {
      url: '/login',
      method: 'post',
      response: ({ body }) => {
         if (body.username === 'admin') {
            return {
               success: true,
               data: {
                  username: 'admin',
                  roles: ['admin'],
                  accessToken: 'admin',
                  refreshToken: 'adminRefresh',
               },
            };
         } else {
            return {
               success: true,
               data: {
                  username: 'common',
                  roles: ['common'],
                  accessToken: 'common',
                  refreshToken: 'commonRefresh',
               },
            };
         }
      },
   },
] as MockMethod[];
