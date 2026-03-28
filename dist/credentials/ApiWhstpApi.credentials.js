"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiWhstpApi = void 0;
class ApiWhstpApi {
    constructor() {
        this.displayName = 'APIWHSTP API';
        this.name = 'apiWhstpApi';
        this.icon = 'file:apiwhstp.svg';
        this.documentationUrl = 'https://apiwhstp.com/docs';
        this.properties = [
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
}
exports.ApiWhstpApi = ApiWhstpApi;
//# sourceMappingURL=ApiWhstpApi.credentials.js.map