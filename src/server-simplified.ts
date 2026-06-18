import { createNodeHttpServer, createRpcMethodInvoker } from '@nogg-aholic/nrpc/node-server';

import { createHostService } from './host-service.js';
import {
  apiCodecRegistry,
  apiHttpRouteManifest,
} from './generated/change-case-api.contract.js';
import { generatedDocsRuntime } from './generated/change-case-api.surface.docs.js';
import { createOpenApiMcpTools } from './generated/change-case-api.openapi-surface.mcp-tools.js';

const service = createHostService();
const invokeRpcMethod = createRpcMethodInvoker(service);

const server = createNodeHttpServer({
  invokeMethod: invokeRpcMethod,
  codecResolver: apiCodecRegistry,
  manifest: apiHttpRouteManifest,
  docsRuntime: generatedDocsRuntime,
  mcpTools: createOpenApiMcpTools({
    baseUrl: `http://127.0.0.1:${process.env.PORT ?? 4010}`,
  }),
  serverName: 'Change Case API',
  serverVersion: '0.1.0',
  port: Number.parseInt(process.env.PORT ?? '4010', 10),
});

const address = server.address();
const port = typeof address === 'object' && address ? address.port : 4010;

console.log(`nrpc-example listening on http://127.0.0.1:${port}`);
