import { createMcpHttpHandler } from '@nogg-aholic/nrpc/mcp-http-handler';
import { createRpcFetchRequestHandler, createRpcMethodInvoker, createSyntheticHttpRouteHandler } from '@nogg-aholic/nrpc/web-runtime';

import { createHostService } from './host-service.js';
import {
  apiCodecRegistry,
  apiHttpRouteManifest,
} from './generated/change-case-api.contract.js';
import {
  generatedDocsRuntime,
} from './generated/change-case-api.surface.docs.js';
import { createOpenApiMcpTools } from './generated/change-case-api.openapi-surface.mcp-tools.js';

const service = createHostService();
const invokeRpcMethod = createRpcMethodInvoker(service);

const rpcHandler = createRpcFetchRequestHandler({
  codecResolver: apiCodecRegistry,
  invokeMethod: invokeRpcMethod,
  awaitEventCode: 0x11,
  returnEventCode: 0x12,
});

const syntheticRouteHandler = createSyntheticHttpRouteHandler({
  manifest: apiHttpRouteManifest,
  codecResolver: apiCodecRegistry,
  invokeMethod: invokeRpcMethod,
});

const port = Number.parseInt(process.env.PORT ?? '4010', 10);
const mcpHandler = createMcpHttpHandler({
  tools: createOpenApiMcpTools({
    baseUrl: `http://127.0.0.1:${String(port)}`,
  }),
  serverName: 'Change Case API',
  serverVersion: '0.1.0',
  endpointPath: '/mcp',
});

Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);

    const docsResponse = generatedDocsRuntime.resolve(request);
    if (docsResponse) {
      return docsResponse.kind === 'json'
        ? Response.json(docsResponse.body, { status: docsResponse.status })
        : new Response(String(docsResponse.body), {
            status: docsResponse.status,
            headers: {
              'content-type': 'text/html; charset=utf-8',
            },
          });
    }

    if (request.method === 'POST' && url.pathname === '/rpc') {
      return rpcHandler(request);
    }

    if (request.method === 'GET' && url.pathname === '/health') {
      return Response.json({ ok: true });
    }

    const mcpResponse = await mcpHandler(request);
    if (mcpResponse) {
      return mcpResponse;
    }

    const syntheticResponse = await syntheticRouteHandler(request);
    if (syntheticResponse) {
      return syntheticResponse;
    }

    return Response.json({ error: { message: 'Route not found', type: 'not_found' } }, { status: 404 });
  },
});

console.log(`nrpc-example listening on http://127.0.0.1:${String(port)}`);
console.log(`RPC endpoint: http://127.0.0.1:${String(port)}/rpc`);
console.log(`Synthetic JSON route: http://127.0.0.1:${String(port)}/api/text/formatName`);
console.log(`Plugin synthetic JSON route: http://127.0.0.1:${String(port)}/api/plugins/sdkPlugin/text/formatName`);
console.log(`Synthetic binary route: http://127.0.0.1:${String(port)}/api/text/formatName.nrpc`);
console.log(`Plugin synthetic binary route: http://127.0.0.1:${String(port)}/api/plugins/sdkPlugin/text/formatName.nrpc`);
console.log(`Docs index: http://127.0.0.1:${String(port)}/docs`);
console.log(`Docs JSON: http://127.0.0.1:${String(port)}/docs/openapi.json`);
console.log(`Method docs: http://127.0.0.1:${String(port)}/api/text/formatName/_docs`);
console.log(`MCP endpoint: http://127.0.0.1:${String(port)}/mcp`);
