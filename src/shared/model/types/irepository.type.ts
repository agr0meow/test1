export interface IResponse<T> {
  result: T;
  error: any;
  success: boolean;
  targetUrl: string;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}
