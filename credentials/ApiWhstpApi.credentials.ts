import type { ICredentialType, Icon, INodeProperties } from 'n8n-workflow';

export class ApiWhstpApi implements ICredentialType {
	displayName = 'APIWHSTP API';

	name = 'apiWhstpApi';

	icon: Icon = 'file:apiwhstp.svg';

	documentationUrl = 'https://apiwhstp.com/docs';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://apiwhstp.com',
			required: true,
		},
	];
}
