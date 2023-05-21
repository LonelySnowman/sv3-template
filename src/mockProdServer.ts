//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import { MockMethod } from 'vite-plugin-mock';
const modules: Record<string, any> = import.meta.glob(['../mock/*.ts'], {
   eager: true,
});

const mocks: MockMethod[] = [];

Object.keys(modules).forEach((key) => {
   mocks.push(...modules[key].default);
});
export function setupProdMockServer() {
   createProdMockServer(mocks);
}
