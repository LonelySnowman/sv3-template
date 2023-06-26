declare global {
   /**
    * @description 项目构建全局配置
    */
   interface SV3Config {
      viteMockServer: {
         /** 本地是否开启 mock 服务 */
         localEnabled: boolean;
         /** 生产环境是否开启 mock 服务 */
         prodEnabled: boolean;
      };
   }
}
