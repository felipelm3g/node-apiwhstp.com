# n8n-nodes-apiwhstp
Community node do n8n para integrar com a APIWHSTP (API WhatsApp REST).

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

- Mensagens: enviar texto e lista (/send-message, /send-list)
- Mídia: enviar mídia (/send-media) e áudio PTT (/send-audio)
- Localização: enviar localização (/send-location)
- Webhook: consultar/salvar/remover configuração e gerenciar preferências por grupo (/api/webhook, /api/group-webhook)
- Utilitários: checar WhatsApp (/check-whatsapp)
- Grupos: listar e limpar cache (/groups, /groups/cache/clear)
- Fila: consultar fila e remover item (/queue)
- Atendimento: consultar/abrir/fechar atendimento humano (/attendance, /attendance-open, /attendance-close)
- Staff: listar/adicionar/remover/enviar aviso (/staff, /staff-message)
