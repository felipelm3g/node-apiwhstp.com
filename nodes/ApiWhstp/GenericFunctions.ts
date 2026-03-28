import type {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';

type ApiWhstpContext = IExecuteFunctions | ILoadOptionsFunctions;

export async function apiRequest(
	this: ApiWhstpContext,
	method: IHttpRequestOptions['method'],
	endpoint: string,
	{
		body,
		qs,
		headers,
	}: {
		body?: IDataObject;
		qs?: IDataObject;
		headers?: IDataObject;
	} = {},
) {
	const credentials = await this.getCredentials('apiWhstpApi');

	const baseUrl = String(credentials.baseUrl || 'https://apiwhstp.com').replace(/\/$/, '');
	const apiKey = String(credentials.apiKey || '');

	const requestOptions: IHttpRequestOptions = {
		method,
		url: `${baseUrl}${endpoint}`,
		json: true,
		headers: {
			...(headers ?? {}),
			'api-key': apiKey,
		},
	};

	if (qs && Object.keys(qs).length) {
		requestOptions.qs = qs;
	}

	if (body && Object.keys(body).length) {
		requestOptions.body = body;
	}

	return await this.helpers.httpRequest(requestOptions);
}

