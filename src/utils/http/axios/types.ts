// 返回res.data的interface
export interface BaseResponse<T = any> {
   code: number | string;
   message: string;
   data: T;
}
