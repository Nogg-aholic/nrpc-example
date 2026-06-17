// AUTO-GENERATED FILE. DO NOT EDIT.
export type OpenApiMcpToolResponse = {
  content: Array<{ type: "text"; text: string }>; 
  role?: string;
};

export type OpenApiMcpToolDefinition = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  handler: (args: Record<string, unknown>) => Promise<OpenApiMcpToolResponse>;
};

export type OpenApiMcpToolOptions = {
  baseUrl: string;
  fetch?: typeof fetch;
  defaultHeaders?: Record<string, string>;
};

type GeneratedOpenApiRoute = {
  httpMethod: string;
  httpPath: string;
  requestContentType?: string;
  requestBodyKind: "none" | "json" | "form" | "binary" | "text";
  responseContentType?: string;
  graphqlOperationName?: string;
  graphqlRootFieldNames?: string[];
  graphqlQuery?: string;
};

export const openApiMcpToolSpecs = [{"name":"openapi_plugins_sdkplugin_text_analyzetitle","methodName":"plugins.sdkPlugin.text.analyzeTitle","description":"Invoke POST /api/plugins/sdkPlugin/text/analyzeTitle\nHTTP: POST /api/plugins/sdkPlugin/text/analyzeTitle\n---\n\n# api.plugins.sdkPlugin.text.analyzeTitle\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/analyzeTitle` | **Type:** `async function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `AnalyzeTitleInput` | Yes | - |\n\n## Returns\n\n`AnalyzeTitleResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\r\n  console.log(\"hi\")\r\n  return {\r\n    title: capitalCase(input.value),\r\n    sentence: sentenceCase(input.value),\r\n    kebab: kebabCase(input.value),\r\n    wordCount: input.value.trim().split(/\\s+/).filter(Boolean).length,\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `AnalyzeTitleInput` (interface)\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\n\n```typescript\ninterface AnalyzeTitleInput {\r\n  /** Source text to analyze and normalize. */\r\n  value: string;\r\n}\n```\n\n#### `AnalyzeTitleResult` (interface)\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\n\n```typescript\ninterface AnalyzeTitleResult {\r\n  /** Human title case form. */\r\n  title: string;\r\n  /** Sentence case form. */\r\n  sentence: string;\r\n  /** URL-friendly kebab-case form. */\r\n  kebab: string;\r\n  /** Count of whitespace-separated terms. */\r\n  wordCount: number;\r\n}\n```\n\n#### `capitalCase` (import)\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\n\n```typescript\ncapitalCase\n```\n\n#### `sentenceCase` (import)\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\n\n```typescript\nsentenceCase\n```\n\n#### `kebabCase` (import)\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\n\n```typescript\nkebabCase\n```\n\n#### `AnalyzeTitleResult` (type)\n\n**Description:** Return type","inputSchema":{"type":"object","properties":{"body":{"type":"object","required":["value"],"properties":{"value":{"type":"string","description":"Source text to analyze and normalize."}}}},"additionalProperties":false,"required":["body"]},"route":{"httpMethod":"POST","httpPath":"/api/plugins/sdkPlugin/text/analyzeTitle","requestContentType":"application/json","requestBodyKind":"json","responseContentType":"application/json"}},{"name":"openapi_plugins_sdkplugin_text_formatname","methodName":"plugins.sdkPlugin.text.formatName","description":"Invoke POST /api/plugins/sdkPlugin/text/formatName\nHTTP: POST /api/plugins/sdkPlugin/text/formatName\n---\n\n# api.plugins.sdkPlugin.text.formatName\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName` | **Type:** `async function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `FormatNameInput` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input.value),\r\n    pascal: pascalCase(input.value),\r\n    snake: snakeCase(input.value),\r\n    constant: constantCase(input.value),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameInput` (interface)\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\n\n```typescript\ninterface FormatNameInput {\r\n  /** Source text to transform. */\r\n  value: string;\r\n}\n```\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type","inputSchema":{"type":"object","properties":{"body":{"type":"object","required":["value"],"properties":{"value":{"type":"string","description":"Source text to transform."}}}},"additionalProperties":false,"required":["body"]},"route":{"httpMethod":"POST","httpPath":"/api/plugins/sdkPlugin/text/formatName","requestContentType":"application/json","requestBodyKind":"json","responseContentType":"application/json"}},{"name":"openapi_plugins_sdkplugin_text_formatnamestring","methodName":"plugins.sdkPlugin.text.formatNameString","description":"Invoke POST /api/plugins/sdkPlugin/text/formatName_string\nHTTP: POST /api/plugins/sdkPlugin/text/formatName_string\n---\n\n# api.plugins.sdkPlugin.text.formatName_string\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName_string` | **Type:** `async function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `string` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName_string(input: string): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input),\r\n    pascal: pascalCase(input),\r\n    snake: snakeCase(input),\r\n    constant: constantCase(input),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type","inputSchema":{"type":"object","properties":{"body":{"type":"string"}},"additionalProperties":false,"required":["body"]},"route":{"httpMethod":"POST","httpPath":"/api/plugins/sdkPlugin/text/formatName_string","requestContentType":"application/json","requestBodyKind":"json","responseContentType":"application/json"}},{"name":"openapi_text_analyzetitle","methodName":"text.analyzeTitle","description":"Invoke POST /api/text/analyzeTitle\nHTTP: POST /api/text/analyzeTitle\n---\n\n# text.analyzeTitle\n\n> **HTTP:** `POST /api/text/analyzeTitle` | **Type:** `async function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\n\n## Signature\n\n```typescript\nasync function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `AnalyzeTitleInput` | Yes | - |\n\n## Returns\n\n`AnalyzeTitleResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\r\n  console.log(\"hi\")\r\n  return {\r\n    title: capitalCase(input.value),\r\n    sentence: sentenceCase(input.value),\r\n    kebab: kebabCase(input.value),\r\n    wordCount: input.value.trim().split(/\\s+/).filter(Boolean).length,\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `AnalyzeTitleInput` (interface)\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\n\n```typescript\ninterface AnalyzeTitleInput {\r\n  /** Source text to analyze and normalize. */\r\n  value: string;\r\n}\n```\n\n#### `AnalyzeTitleResult` (interface)\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\n\n```typescript\ninterface AnalyzeTitleResult {\r\n  /** Human title case form. */\r\n  title: string;\r\n  /** Sentence case form. */\r\n  sentence: string;\r\n  /** URL-friendly kebab-case form. */\r\n  kebab: string;\r\n  /** Count of whitespace-separated terms. */\r\n  wordCount: number;\r\n}\n```\n\n#### `capitalCase` (import)\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\n\n```typescript\ncapitalCase\n```\n\n#### `sentenceCase` (import)\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\n\n```typescript\nsentenceCase\n```\n\n#### `kebabCase` (import)\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\n\n```typescript\nkebabCase\n```\n\n#### `AnalyzeTitleResult` (type)\n\n**Description:** Return type","inputSchema":{"type":"object","properties":{"body":{"type":"object","required":["value"],"properties":{"value":{"type":"string","description":"Source text to analyze and normalize."}}}},"additionalProperties":false,"required":["body"]},"route":{"httpMethod":"POST","httpPath":"/api/text/analyzeTitle","requestContentType":"application/json","requestBodyKind":"json","responseContentType":"application/json"}},{"name":"openapi_text_formatname","methodName":"text.formatName","description":"Invoke POST /api/text/formatName\nHTTP: POST /api/text/formatName\n---\n\n# text.formatName\n\n> **HTTP:** `POST /api/text/formatName` | **Type:** `async function text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\n\n## Signature\n\n```typescript\nasync function text.formatName(input: FormatNameInput): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `FormatNameInput` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input.value),\r\n    pascal: pascalCase(input.value),\r\n    snake: snakeCase(input.value),\r\n    constant: constantCase(input.value),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameInput` (interface)\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\n\n```typescript\ninterface FormatNameInput {\r\n  /** Source text to transform. */\r\n  value: string;\r\n}\n```\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type","inputSchema":{"type":"object","properties":{"body":{"type":"object","required":["value"],"properties":{"value":{"type":"string","description":"Source text to transform."}}}},"additionalProperties":false,"required":["body"]},"route":{"httpMethod":"POST","httpPath":"/api/text/formatName","requestContentType":"application/json","requestBodyKind":"json","responseContentType":"application/json"}},{"name":"openapi_text_formatnamestring","methodName":"text.formatNameString","description":"Invoke POST /api/text/formatName_string\nHTTP: POST /api/text/formatName_string\n---\n\n# text.formatName_string\n\n> **HTTP:** `POST /api/text/formatName_string` | **Type:** `async function text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\n\n## Signature\n\n```typescript\nasync function text.formatName_string(input: string): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `string` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName_string(input: string): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input),\r\n    pascal: pascalCase(input),\r\n    snake: snakeCase(input),\r\n    constant: constantCase(input),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type","inputSchema":{"type":"object","properties":{"body":{"type":"string"}},"additionalProperties":false,"required":["body"]},"route":{"httpMethod":"POST","httpPath":"/api/text/formatName_string","requestContentType":"application/json","requestBodyKind":"json","responseContentType":"application/json"}}] as const;

function toTextResponse(value: unknown): OpenApiMcpToolResponse {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(value, null, 2),
      },
    ],
  };
}

function toFormUrlEncoded(value: unknown): string {
  if (!value || typeof value !== "object") {
    return "";
  }
  const params = new URLSearchParams();
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (entry === undefined || entry === null) continue;
    if (Array.isArray(entry)) {
      for (const item of entry) {
        params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(entry));
  }
  return params.toString();
}

function toBinaryBody(value: unknown): BodyInit {
  if (value instanceof Uint8Array) {
    if (value.buffer instanceof ArrayBuffer) {
      return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }
    return Uint8Array.from(value);
  }
  if (value instanceof ArrayBuffer) return value;
  if (value instanceof Blob) return value;
  if (typeof value === "string") return value;
  return JSON.stringify(value);
}

async function parseResponseBody(response: Response, route: GeneratedOpenApiRoute): Promise<unknown> {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  const contentType = response.headers.get("content-type") ?? route.responseContentType ?? "";
  if (contentType.includes("application/json") || contentType.endsWith("+json")) {
    const parsed = await response.json();
    if (route.graphqlOperationName && parsed && typeof parsed === "object") {
      const data = (parsed as { data?: unknown }).data;
      if (!route.graphqlRootFieldNames || route.graphqlRootFieldNames.length === 0) return data;
      if (route.graphqlRootFieldNames.length === 1 && data && typeof data === "object") {
        return (data as Record<string, unknown>)[route.graphqlRootFieldNames[0]!];
      }
      return data;
    }
    return parsed;
  }
  if (contentType.startsWith("text/")) {
    return await response.text();
  }
  if (contentType.includes("application/octet-stream") || contentType.startsWith("image/")) {
    return Array.from(new Uint8Array(await response.arrayBuffer()));
  }
  const raw = await response.text();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

export function createOpenApiMcpTools(options: OpenApiMcpToolOptions): OpenApiMcpToolDefinition[] {
  const fetchImpl = options.fetch ?? fetch;
  return openApiMcpToolSpecs.map((spec) => ({
    name: spec.name,
    description: spec.description,
    inputSchema: spec.inputSchema as Record<string, unknown>,
    handler: async (args) => {
      const route = spec.route as GeneratedOpenApiRoute;
      const url = new URL(route.httpPath, options.baseUrl);
      const headers: Record<string, string> = { ...(options.defaultHeaders ?? {}) };
      const input = args && typeof args === "object" ? args as Record<string, unknown> : {};
      const pathArgs = input.path && typeof input.path === "object" ? input.path as Record<string, unknown> : {};
      const queryArgs = input.query && typeof input.query === "object" ? input.query as Record<string, unknown> : {};
      const headerArgs = input.header && typeof input.header === "object" ? input.header as Record<string, unknown> : {};

      for (const [key, value] of Object.entries(pathArgs)) {
        url.pathname = url.pathname.replace(`{${key}}`, encodeURIComponent(String(value)));
      }
      for (const [key, value] of Object.entries(queryArgs)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            url.searchParams.append(key, String(item));
          }
          continue;
        }
        url.searchParams.set(key, String(value));
      }
      for (const [key, value] of Object.entries(headerArgs)) {
        if (typeof value === "string" && value.length > 0) {
          headers[key] = value;
        }
      }

      const init: RequestInit = { method: route.httpMethod, headers };
      if (input.body !== undefined && route.requestBodyKind !== "none") {
        switch (route.requestBodyKind) {
          case "form":
            init.body = toFormUrlEncoded(input.body);
            headers["content-type"] = route.requestContentType ?? "application/x-www-form-urlencoded";
            break;
          case "binary":
            init.body = toBinaryBody(input.body);
            if (route.requestContentType) headers["content-type"] = route.requestContentType;
            break;
          case "text":
            init.body = typeof input.body === "string" ? input.body : String(input.body);
            headers["content-type"] = route.requestContentType ?? "text/plain";
            break;
          case "json":
          default:
            init.body = JSON.stringify(input.body);
            headers["content-type"] = route.requestContentType ?? "application/json";
            break;
        }
      }
      if (route.graphqlOperationName) {
        const graphQlVariables = input.body !== undefined ? input.body : input;
        init.body = JSON.stringify({
          operationName: route.graphqlOperationName,
          query: route.graphqlQuery,
          ...(graphQlVariables && typeof graphQlVariables === "object" ? graphQlVariables : { variables: graphQlVariables }),
        });
        headers["content-type"] = route.requestContentType ?? "application/json";
      }

      const response = await fetchImpl(url, init);
      const body = await parseResponseBody(response, route);
      return toTextResponse({
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: url.toString(),
        headers: Object.fromEntries(response.headers.entries()),
        body,
      });
    },
  }));
}
