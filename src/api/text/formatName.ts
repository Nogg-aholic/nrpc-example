// AUTO-GENERATED FILE. DO NOT EDIT.
import { createSyntheticHttpRouteHandler } from '@nogg-aholic/nrpc/web-runtime';
import { createRpcMethodInvoker } from '@nogg-aholic/nrpc';
import { createHostService } from '../../host-service.js';
import { apiCodecRegistry } from '../../generated/change-case-api.contract.js';
import { generatedDocsRuntime } from '../../generated/change-case-api.surface.docs.js';

const service = createHostService();
const invokeRpcMethod = createRpcMethodInvoker(service);

const handler = createSyntheticHttpRouteHandler({
  manifest: {
  "id": "api",
  "rootPath": [
    "api",
    "text"
  ],
  "basePath": "",
  "protocolMode": "both",
  "routes": [
    {
      "methodName": "text.formatName",
      "pathParts": [
        "api",
        "text",
        "formatName"
      ],
      "httpPath": "/api/text/formatName",
      "codecLookupKey": "text.formatName",
      "protocolMode": "both"
    }
  ]
},
  codecResolver: apiCodecRegistry,
  invokeMethod: invokeRpcMethod,
});

export default async function (req: Request) {
  const url = new URL(req.url);
  if (url.searchParams.has('__docs')) {
    const docsResponse = generatedDocsRuntime.resolve(req);
    if (docsResponse) {
      return docsResponse.kind === 'json'
        ? Response.json(docsResponse.body, { status: docsResponse.status })
        : new Response(String(docsResponse.body), {
            status: docsResponse.status,
            headers: { 'content-type': 'text/html; charset=utf-8' },
          });
    }
  }
  return handler(req);
};
