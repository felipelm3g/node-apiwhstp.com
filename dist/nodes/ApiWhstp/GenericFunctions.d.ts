import type { IDataObject, IExecuteFunctions, IHttpRequestOptions, ILoadOptionsFunctions } from 'n8n-workflow';
type ApiWhstpContext = IExecuteFunctions | ILoadOptionsFunctions;
export declare function apiRequest(this: ApiWhstpContext, method: IHttpRequestOptions['method'], endpoint: string, { body, qs, headers, }?: {
    body?: IDataObject;
    qs?: IDataObject;
    headers?: IDataObject;
}): Promise<any>;
export {};
