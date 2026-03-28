# n8n-nodes-apiwhstp
Community node do n8n para integrar com a APIWHSTP (API WhatsApp REST + Webhook).

## Instalação

No seu n8n:

```bash
npm install n8n-nodes-apiwhstp
```

Depois reinicie o n8n e procure por “APIWHSTP” na lista de nodes.

## Credenciais

- API Key: gerada no painel em https://apiwhstp.com/
- Base URL: https://apiwhstp.com

## Operações

- Mensagens: enviar texto (/send-message)
- Mídia: enviar mídia (/send-media) e áudio PTT (/send-audio)
- Localização: enviar localização (/send-location)
- Utilitários: checar WhatsApp (/check-whatsapp)
- Grupos: listar e limpar cache (/groups, /groups/cache/clear)
- Webhook: configurar e filtrar eventos de grupos (/api/webhook, /api/group-webhook)
- Atendimento: abrir/fechar atendimento humano (/attendance-open, /attendance-close)
- Staff: listar/adicionar/remover/enviar aviso (/staff, /staff-message)
