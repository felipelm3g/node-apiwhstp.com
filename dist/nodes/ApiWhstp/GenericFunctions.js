"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequest = apiRequest;
async function apiRequest(method, endpoint, { body, qs, headers, } = {}) {
    const credentials = await this.getCredentials('apiWhstpApi');
    const baseUrl = String(credentials.baseUrl || 'https://apiwhstp.com').replace(/\/$/, '');
    const apiKey = String(credentials.apiKey || '');
    const requestOptions = {
        method,
        url: `${baseUrl}${endpoint}`,
        json: true,
        headers: {
            ...(headers !== null && headers !== void 0 ? headers : {}),
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
//# sourceMappingURL=GenericFunctions.js.map