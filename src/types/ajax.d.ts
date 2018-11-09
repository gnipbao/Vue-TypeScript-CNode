declare namespace Ajax {
  export interface AxiosResponse {
    data: AjaxResponse;
  }
  export interface AjaxResponse {
    code: number;
    result: any;
    message?: string;
  }
}
