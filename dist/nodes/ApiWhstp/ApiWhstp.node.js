"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiWhstp = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const GenericFunctions_1 = require("./GenericFunctions");
class ApiWhstp {
    constructor() {
        this.description = {
            displayName: 'APIWHSTP',
            name: 'apiWhstp',
            icon: 'file:apiwhstp.svg',
            group: ['output'],
            version: 1,
            subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
            description: 'Integração com API WhatsApp REST + Webhook (APIWHSTP)',
            defaults: {
                name: 'APIWHSTP',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'apiWhstpApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Recurso',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    default: 'messages',
                    options: [
                        { name: 'Mensagens', value: 'messages' },
                        { name: 'Mídia', value: 'media' },
                        { name: 'Localização', value: 'location' },
                        { name: 'Utilitários', value: 'utilities' },
                        { name: 'Grupos', value: 'groups' },
                        { name: 'Webhook', value: 'webhook' },
                        { name: 'Atendimento', value: 'attendance' },
                        { name: 'Staff', value: 'staff' },
                    ],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'sendMessage',
                    displayOptions: {
                        show: {
                            resource: ['messages'],
                        },
                    },
                    options: [{ name: 'Enviar Mensagem', value: 'sendMessage' }],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'sendMedia',
                    displayOptions: {
                        show: {
                            resource: ['media'],
                        },
                    },
                    options: [
                        { name: 'Enviar Áudio (PTT)', value: 'sendAudio' },
                        { name: 'Enviar Mídia', value: 'sendMedia' },
                    ],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'sendLocation',
                    displayOptions: {
                        show: {
                            resource: ['location'],
                        },
                    },
                    options: [{ name: 'Enviar Localização', value: 'sendLocation' }],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'checkWhatsapp',
                    displayOptions: {
                        show: {
                            resource: ['utilities'],
                        },
                    },
                    options: [{ name: 'Checar WhatsApp', value: 'checkWhatsapp' }],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'listGroups',
                    displayOptions: {
                        show: {
                            resource: ['groups'],
                        },
                    },
                    options: [
                        { name: 'Limpar Cache', value: 'clearCache' },
                        { name: 'Listar', value: 'listGroups' },
                    ],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'getConfig',
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                        },
                    },
                    options: [
                        { name: 'Obter Configuração', value: 'getConfig' },
                        { name: 'Remover Configuração', value: 'deleteConfig' },
                        { name: 'Salvar Configuração', value: 'setConfig' },
                        { name: 'Ver Preferências (Grupos)', value: 'getGroupPreferences' },
                        { name: 'Editar Preferência (Grupo)', value: 'setGroupPreference' },
                    ],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'open',
                    displayOptions: {
                        show: {
                            resource: ['attendance'],
                        },
                    },
                    options: [
                        { name: 'Abrir Atendimento', value: 'open' },
                        { name: 'Fechar Atendimento', value: 'close' },
                    ],
                },
                {
                    displayName: 'Operação',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    default: 'list',
                    displayOptions: {
                        show: {
                            resource: ['staff'],
                        },
                    },
                    options: [
                        { name: 'Adicionar', value: 'add' },
                        { name: 'Enviar Aviso', value: 'message' },
                        { name: 'Listar', value: 'list' },
                        { name: 'Remover', value: 'remove' },
                    ],
                },
                {
                    displayName: 'Destino',
                    name: 'destination',
                    type: 'options',
                    noDataExpression: true,
                    default: 'phone',
                    displayOptions: {
                        show: {
                            resource: ['messages', 'media', 'location'],
                        },
                    },
                    options: [
                        { name: 'Contato (Phone)', value: 'phone' },
                        { name: 'Grupo (Group ID)', value: 'groupId' },
                    ],
                },
                {
                    displayName: 'Phone',
                    name: 'phone',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['messages', 'media', 'location'],
                            destination: ['phone'],
                        },
                    },
                },
                {
                    displayName: 'Group ID',
                    name: 'groupId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['messages', 'media', 'location'],
                            destination: ['groupId'],
                        },
                    },
                },
                {
                    displayName: 'Mensagem',
                    name: 'message',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['messages'],
                            operation: ['sendMessage'],
                        },
                    },
                },
                {
                    displayName: 'Reply ID',
                    name: 'replyId',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['messages'],
                            operation: ['sendMessage'],
                        },
                    },
                },
                {
                    displayName: 'Base64 (Data URI)',
                    name: 'base64',
                    type: 'string',
                    typeOptions: {
                        rows: 6,
                    },
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['media'],
                            operation: ['sendMedia', 'sendAudio'],
                        },
                    },
                },
                {
                    displayName: 'Legenda',
                    name: 'caption',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['media'],
                            operation: ['sendMedia'],
                        },
                    },
                },
                {
                    displayName: 'Nome do Arquivo',
                    name: 'filename',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['media'],
                            operation: ['sendMedia'],
                        },
                    },
                },
                {
                    displayName: 'Latitude',
                    name: 'latitude',
                    type: 'number',
                    default: 0,
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['location'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Longitude',
                    name: 'longitude',
                    type: 'number',
                    default: 0,
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['location'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Título',
                    name: 'title',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['location'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Descrição',
                    name: 'description',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['location'],
                            operation: ['sendLocation'],
                        },
                    },
                },
                {
                    displayName: 'Phone',
                    name: 'checkPhone',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['utilities'],
                            operation: ['checkWhatsapp'],
                        },
                    },
                },
                {
                    displayName: 'Limite',
                    name: 'limit',
                    type: 'number',
                    typeOptions: {
                        minValue: 1,
                        maxValue: 500,
                    },
                    default: 100,
                    displayOptions: {
                        show: {
                            resource: ['groups'],
                            operation: ['listGroups'],
                        },
                    },
                },
                {
                    displayName: 'URL',
                    name: 'webhookUrl',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setConfig'],
                        },
                    },
                },
                {
                    displayName: 'Auth Header Name',
                    name: 'authHeaderName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setConfig'],
                        },
                    },
                },
                {
                    displayName: 'Auth Header Value',
                    name: 'authHeaderValue',
                    type: 'string',
                    default: '',
                    typeOptions: {
                        password: true,
                    },
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setConfig'],
                        },
                    },
                },
                {
                    displayName: 'Group ID',
                    name: 'webhookGroupId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setGroupPreference'],
                        },
                    },
                },
                {
                    displayName: 'Habilitado',
                    name: 'webhookEnabled',
                    type: 'boolean',
                    default: true,
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['webhook'],
                            operation: ['setGroupPreference'],
                        },
                    },
                },
                {
                    displayName: 'Phone',
                    name: 'attendancePhone',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['attendance'],
                            operation: ['open', 'close'],
                        },
                    },
                },
                {
                    displayName: 'Mensagem',
                    name: 'attendanceMessage',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['attendance'],
                            operation: ['open'],
                        },
                    },
                },
                {
                    displayName: 'Phone',
                    name: 'staffPhone',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['staff'],
                            operation: ['add', 'remove'],
                        },
                    },
                },
                {
                    displayName: 'Mensagem',
                    name: 'staffMessage',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['staff'],
                            operation: ['message'],
                        },
                    },
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            const resource = this.getNodeParameter('resource', itemIndex);
            const operation = this.getNodeParameter('operation', itemIndex);
            try {
                let responseData;
                if (resource === 'messages' && operation === 'sendMessage') {
                    const destination = this.getNodeParameter('destination', itemIndex);
                    const message = this.getNodeParameter('message', itemIndex);
                    const replyId = this.getNodeParameter('replyId', itemIndex) || undefined;
                    const body = destination === 'phone'
                        ? { phone: this.getNodeParameter('phone', itemIndex), message, replyId }
                        : { groupId: this.getNodeParameter('groupId', itemIndex), message, replyId };
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/send-message', { body });
                }
                else if (resource === 'media' && operation === 'sendMedia') {
                    const destination = this.getNodeParameter('destination', itemIndex);
                    const base64 = this.getNodeParameter('base64', itemIndex);
                    const caption = this.getNodeParameter('caption', itemIndex) || undefined;
                    const filename = this.getNodeParameter('filename', itemIndex) || undefined;
                    const body = destination === 'phone'
                        ? {
                            phone: this.getNodeParameter('phone', itemIndex),
                            base64,
                            caption,
                            filename,
                        }
                        : {
                            groupId: this.getNodeParameter('groupId', itemIndex),
                            base64,
                            caption,
                            filename,
                        };
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/send-media', { body });
                }
                else if (resource === 'media' && operation === 'sendAudio') {
                    const destination = this.getNodeParameter('destination', itemIndex);
                    const base64 = this.getNodeParameter('base64', itemIndex);
                    const body = destination === 'phone'
                        ? { phone: this.getNodeParameter('phone', itemIndex), base64 }
                        : { groupId: this.getNodeParameter('groupId', itemIndex), base64 };
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/send-audio', { body });
                }
                else if (resource === 'location' && operation === 'sendLocation') {
                    const destination = this.getNodeParameter('destination', itemIndex);
                    const latitude = this.getNodeParameter('latitude', itemIndex);
                    const longitude = this.getNodeParameter('longitude', itemIndex);
                    const title = this.getNodeParameter('title', itemIndex) || undefined;
                    const description = this.getNodeParameter('description', itemIndex) || undefined;
                    const body = destination === 'phone'
                        ? {
                            phone: this.getNodeParameter('phone', itemIndex),
                            latitude,
                            longitude,
                            title,
                            description,
                        }
                        : {
                            groupId: this.getNodeParameter('groupId', itemIndex),
                            latitude,
                            longitude,
                            title,
                            description,
                        };
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/send-location', { body });
                }
                else if (resource === 'utilities' && operation === 'checkWhatsapp') {
                    const phone = this.getNodeParameter('checkPhone', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'GET', '/check-whatsapp', { qs: { phone } });
                }
                else if (resource === 'groups' && operation === 'listGroups') {
                    const limit = this.getNodeParameter('limit', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'GET', '/groups', { qs: { limit } });
                }
                else if (resource === 'groups' && operation === 'clearCache') {
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/groups/cache/clear');
                }
                else if (resource === 'webhook' && operation === 'getConfig') {
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'GET', '/api/webhook');
                }
                else if (resource === 'webhook' && operation === 'setConfig') {
                    const url = this.getNodeParameter('webhookUrl', itemIndex);
                    const authHeaderName = this.getNodeParameter('authHeaderName', itemIndex) || undefined;
                    const authHeaderValue = this.getNodeParameter('authHeaderValue', itemIndex) || undefined;
                    const body = { url };
                    if (authHeaderName)
                        body.authHeaderName = authHeaderName;
                    if (authHeaderValue)
                        body.authHeaderValue = authHeaderValue;
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/api/webhook', { body });
                }
                else if (resource === 'webhook' && operation === 'deleteConfig') {
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'DELETE', '/api/webhook');
                }
                else if (resource === 'webhook' && operation === 'getGroupPreferences') {
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'GET', '/api/group-webhook');
                }
                else if (resource === 'webhook' && operation === 'setGroupPreference') {
                    const groupId = this.getNodeParameter('webhookGroupId', itemIndex);
                    const enabled = this.getNodeParameter('webhookEnabled', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'PUT', '/api/group-webhook', {
                        body: { groupId, enabled },
                    });
                }
                else if (resource === 'attendance' && operation === 'open') {
                    const phone = this.getNodeParameter('attendancePhone', itemIndex);
                    const message = this.getNodeParameter('attendanceMessage', itemIndex) || undefined;
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/attendance-open', { body: { phone, message } });
                }
                else if (resource === 'attendance' && operation === 'close') {
                    const phone = this.getNodeParameter('attendancePhone', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/attendance-close', { body: { phone } });
                }
                else if (resource === 'staff' && operation === 'list') {
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'GET', '/staff');
                }
                else if (resource === 'staff' && operation === 'add') {
                    const phone = this.getNodeParameter('staffPhone', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/staff', { body: { phone } });
                }
                else if (resource === 'staff' && operation === 'remove') {
                    const phone = this.getNodeParameter('staffPhone', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'DELETE', '/staff', { body: { phone } });
                }
                else if (resource === 'staff' && operation === 'message') {
                    const message = this.getNodeParameter('staffMessage', itemIndex);
                    responseData = await GenericFunctions_1.apiRequest.call(this, 'POST', '/staff-message', { body: { message } });
                }
                else {
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${resource}.${operation}`, {
                        itemIndex,
                    });
                }
                if (responseData === undefined || responseData === null || responseData === '') {
                    returnData.push({ json: {} });
                }
                else if (Array.isArray(responseData)) {
                    for (const entry of responseData) {
                        returnData.push({ json: entry });
                    }
                }
                else {
                    returnData.push({ json: responseData });
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const message = error instanceof Error ? error.message : String(error);
                    returnData.push({ json: { error: message } });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.ApiWhstp = ApiWhstp;
//# sourceMappingURL=ApiWhstp.node.js.map