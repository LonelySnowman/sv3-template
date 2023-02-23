import {
   API_BASE_URL,
   API_TARGET_URL,
   MOCK_API_BASE_URL,
   MOCK_API_TARGET_URL,
} from '../config';
import { ProxyOptions } from 'vite';
type ProxyTargetList = Record<string, ProxyOptions>;

const proxy: ProxyTargetList = {
   // test
   [API_BASE_URL]: {
      target: API_TARGET_URL,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
   },
   // mock
   [MOCK_API_BASE_URL]: {
      target: MOCK_API_TARGET_URL,
      changeOrigin: true,
      rewrite: (path) =>
         path.replace(new RegExp(`^${MOCK_API_BASE_URL}`), '/api'),
   },
};

export default proxy;
