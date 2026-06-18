import { createBunServer, createRpcMethodInvoker } from '@nogg-aholic/nrpc/bun-server';

import { createHostService } from './host-service.js';
import {
  apiCodecRegistry,
  apiHttpRouteManifest,
} from './generated/change-case-api.contract.js';
import { generatedDocsRuntime } from './generated/change-case-api.surface.docs.js';
import { createOpenApiMcpTools } from './generated/change-case-api.openapi-surface.mcp-tools.js';

const service = createHostService();
const invokeRpcMethod = createRpcMethodInvoker(service);

const server = createBunServer({
  invokeMethod: invokeRpcMethod,
  codecResolver: apiCodecRegistry,
  manifest: apiHttpRouteManifest,
  docsRuntime: generatedDocsRuntime,
  mcpTools: createOpenApiMcpTools({
    baseUrl: `http://127.0.0.1:${process.env.PORT ?? 4010}`,
  }),
  serviceName: 'Change Case API',
  serviceVersion: '0.1.0',
  port: Number.parseInt(process.env.PORT ?? '4010', 10),
});

console.log(`Synthetic JSON route: http://127.0.0.1:${server.port}/api/text/formatName`);
console.log(`Plugin synthetic JSON route: http://127.0.0.1:${server.port}/api/plugins/sdkPlugin/text/formatName`);
console.log(`Synthetic binary route: http://127.0.0.1:${server.port}/api/text/formatName.nrpc`);
console.log(`Plugin synthetic binary route: http://127.0.0.1:${server.port}/api/plugins/sdkPlugin/text/formatName.nrpc`);
console.log(`Docs index: http://127.0.0.1:${server.port}/docs`);
console.log(`Docs JSON: http://127.0.0.1:${server.port}/docs/openapi.json`);
console.log(`Method docs: http://127.0.0.1:${server.port}/api/text/formatName/_docs`);
