# n8n-nodes-apiwhstp
Community node do n8n para integrar com a APIWHSTP (API WhatsApp REST).

## Importante (Webhook)

Este node **não inclui** os endpoints de **Webhook** da APIWHSTP. Ele foi feito somente para os endpoints REST de envio/gestão. Se você precisar de webhook, use o node **Webhook** nativo do n8n apontando para o seu endpoint e trate os eventos no fluxo.

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
- Fila: consultar fila e remover item (/queue)
- Atendimento: consultar/abrir/fechar atendimento humano (/attendance, /attendance-open, /attendance-close)
- Staff: listar/adicionar/remover/enviar aviso (/staff, /staff-message)
