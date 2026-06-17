// AUTO-GENERATED FILE. DO NOT EDIT.
import { createMcpHttpHandler } from '@nogg-aholic/nrpc/mcp-http-handler';
import { createOpenApiMcpTools } from '../generated/change-case-api.openapi-surface.mcp-tools.js';

const mcpHandler = createMcpHttpHandler({
  tools: createOpenApiMcpTools({ baseUrl: process.env.VERCEL_URL ?? 'http://localhost:3000' }),
  serverName: 'api',
  serverVersion: '1.0.0',
});

export default async function (req: Request) {
  return mcpHandler(req);
};
