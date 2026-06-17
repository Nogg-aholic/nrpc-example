// AUTO-GENERATED FILE. DO NOT EDIT.

type OpenApiSchema = {
  $ref?: string;
  type?: string;
  title?: string;
  description?: string;
  items?: OpenApiSchema;
  properties?: Record<string, OpenApiSchema>;
  additionalProperties?: OpenApiSchema;
  required?: string[];
  anyOf?: OpenApiSchema[];
  enum?: Array<string | number | boolean | null>;
  nullable?: boolean;
};

type OpenApiDocument = {
  openapi: '3.1.0';
  info: {
    title: string;
    version: string;
    description?: string;
  };
  tags?: Array<{
    name: string;
    description?: string;
  }>;
  paths: Record<
    string,
    {
      get?: OpenApiOperation;
      post?: OpenApiOperation;
    }
  >;
  components?: {
    schemas: Record<string, OpenApiSchema>;
  };
};

type OpenApiOperation = {
  operationId: string;
  summary?: string;
  description?: string;
  tags?: string[];
  requestBody?: {
    required: boolean;
    content: {
      'application/json': {
        schema: OpenApiSchema;
      };
    };
  };
  responses: {
    '200': {
      description: string;
      content: {
        'application/json': {
          schema: OpenApiSchema;
        };
      };
    };
  };
};

type OpenApiMethodEffects = {
  receiverMutability: 'none' | 'immutable' | 'mutable';
  mutatesReceiver: boolean;
  externalSideEffects: boolean;
  executionPurity: 'pure' | 'impure' | 'unknown';
  reason: string;
};

type OpenApiMemberAbiFlags = {
  static: boolean;
  async: boolean;
  readonly: boolean;
  abstract: boolean;
  visibility: 'public' | 'protected' | 'private';
  override: boolean;
  deprecated: boolean;
  export: boolean;
};

type OpenApiNodeAbiFlags = {
  containsThis: boolean;
  hasAsyncFunctions: boolean;
  awaitContext: boolean;
  optionalChain: boolean;
  hasImplicitReturn: boolean;
  hasExplicitReturn: boolean;
};

type OpenApiSymbolSpace = 'value' | 'type' | 'namespace';

type OpenApiSymbolKind =
  | 'unknown'
  | 'function'
  | 'method'
  | 'property'
  | 'accessor'
  | 'constructor'
  | 'class'
  | 'interface'
  | 'typeAlias'
  | 'typeParameter'
  | 'enum'
  | 'enumMember'
  | 'module'
  | 'namespace'
  | 'signature'
  | 'alias'
  | 'prototype'
  | 'objectLiteral'
  | 'typeLiteral';

type OpenApiRelationTargetRef = {
  name: string;
  path?: string[];
};

type OpenApiSymbolRelationSet = {
  aliasOf?: OpenApiRelationTargetRef;
  instantiatedFrom?: OpenApiRelationTargetRef;
  extends?: OpenApiRelationTargetRef[];
  implements?: OpenApiRelationTargetRef[];
  memberOf?: OpenApiRelationTargetRef;
  declaresTypeParameters?: string[];
  constrainedBy?: OpenApiRelationTargetRef[];
};

type OpenApiSymbolSemanticFlags = {
  symbolKind: OpenApiSymbolKind;
  spaces: OpenApiSymbolSpace[];
  isAlias: boolean;
  isOptional: boolean;
  isTypeOnly: boolean;
  isValueLike: boolean;
  isTypeLike: boolean;
  isNamespaceLike: boolean;
};

type OpenApiMethodProjection = {
  methodName: string;
  httpMethod?: 'get' | 'post';
  httpPath: string;
  requestSchema: OpenApiSchema;
  responseSchema: OpenApiSchema;
  requestRequired: boolean;
  implementationMd?: string;
  effects: OpenApiMethodEffects;
  memberAbiFlags: OpenApiMemberAbiFlags;
  nodeAbiFlags: OpenApiNodeAbiFlags;
  genericTypeParameters: string[];
  parameterNames: string[];
  parameterOptionalFlags: boolean[];
  parameterRestFlags: boolean[];
  parameterTypeTexts: string[];
  resultTypeText: string;
  symbolSemanticFlags: OpenApiSymbolSemanticFlags;
  symbolRelations: OpenApiSymbolRelationSet;
  components?: {
    schemas: Record<string, OpenApiSchema>;
  };
  docs?: {
    summary?: string;
    description?: string;
    params?: Record<string, string>;
    returnsDescription?: string;
    tags?: string[];
  };
};

type GeneratedDocsRuntimeArtifacts = {
  json: {
    openapi: string;
    info: {
      title: string;
      version: string;
      description?: string;
    };
  };
  html: string;
  methods: ReadonlyMap<string, {
    methodName: string;
    httpPath: string;
    requestSchema: unknown;
    responseSchema: unknown;
    requestRequired: boolean;
    implementationMd?: string;
    effects: OpenApiMethodEffects;
    components?: {
      schemas: Record<string, unknown>;
    };
    docs?: {
      summary?: string;
      description?: string;
      returnsDescription?: string;
      tags?: string[];
      params?: Record<string, string>;
    };
  }>;
};

type ResolveGeneratedDocsResponseOptions = {
  method: string;
  requestUrl: URL;
  acceptHeader?: string;
  routeMethodName?: string | null;
  namespacePath: string;
  artifacts: GeneratedDocsRuntimeArtifacts;
  buildMethodTitle?: (methodName: string) => string;
  buildMethodDescription?: (methodName: string) => string;
  methodVersion?: string;
};

type GeneratedDocsResponse = {
  status: number;
  kind: 'json' | 'html';
  body: unknown;
};

type RenderScalarHtmlOptions = {
  pageTitle?: string;
  cdnScriptUrl?: string;
  customCss?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', "&quot;")
    .replaceAll("'", '&#39;');
}

const renderScalarHtml: (document: OpenApiDocument, options?: RenderScalarHtmlOptions) => string = function renderScalarHtml(document, options = {}) {
  const pageTitle = options.pageTitle ?? document.info.title, cdnScriptUrl = options.cdnScriptUrl ?? "https://cdn.jsdelivr.net/npm/@scalar/api-reference", customCss = options.customCss ?? `
		.scalar-app .introduction-section h1,
		.scalar-app .introduction-section p,
		.scalar-app .introduction-section .badge,
		.scalar-app .introduction-section .servers,
		.scalar-app .introduction-section [data-testid="document-version"] {
			display: none !important;
		}

		.scalar-app .references-header {
			display: none !important;
		}

    #headlessui-portal-root {
      display: none !important;
    }

    .scalar-app .z-overlay {
      pointer-events: none !important;
      z-index: auto !important;
    }

    .scalar-app .references-layout,
    .scalar-app .api-client__layout,
    .scalar-app .reference-layout,
    .scalar-app .reference-layout__content,
    .scalar-app .reference-layout__section {
      max-width: 100% !important;
    }

		.scalar-app {
			min-height: 100vh;
		}
	`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(pageTitle)}</title>
    <style>
      * { box-sizing: border-box; }
      html, body { margin: 0; width: 100%; min-height: 100%; }
      #scalar-root { min-height: 100vh; }
    </style>
    <script src="${escapeHtml(cdnScriptUrl)}"></script>
  </head>
  <body>
    <div id="scalar-root"></div>
    <script>
      Scalar.createApiReference('#scalar-root', {
        theme: 'default',
        darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
          layout: 'modern',
          showSidebar: true,
          hideModels: false,
        documentDownloadType: 'both',
          hideTestRequestButton: false,
        hideClientButton: true,
        hiddenClients: true,
        showOperationId: false,
          showDeveloperTools: true,
        metaData: { title: ${JSON.stringify(pageTitle)} },
        customCss: ${JSON.stringify(customCss)},
        content: ${JSON.stringify(document)},
      });

      queueMicrotask(() => {
        const buttons = document.querySelectorAll('.download-container .download-button span');
        if (buttons.length >= 2) {
          buttons[0].textContent = 'Download OpenAPI JSON';
          buttons[1].textContent = 'Download OpenAPI YAML';
        }
      });
    </script>
  </body>
</html>`;
};

function resolveGeneratedDocsResponse(options: ResolveGeneratedDocsResponseOptions): GeneratedDocsResponse | null {
  const normalizedMethod = options.method.toUpperCase();
  if (normalizedMethod !== 'GET') {
    return null;
  }

  const docsJsonPath = `${trimTrailingSlash(options.namespacePath)}/__docs/openapi.json`;
  if (options.requestUrl.pathname === docsJsonPath) {
    return {
      status: 200,
      kind: 'json',
      body: options.artifacts.json,
    };
  }

  const docsHtmlPath = `${trimTrailingSlash(options.namespacePath)}/__docs/scalar`;
  if (options.requestUrl.pathname === docsHtmlPath) {
    return {
      status: 200,
      kind: 'html',
      body: options.artifacts.html,
    };
  }

  if (!options.routeMethodName) {
    return null;
  }

  const projection = options.artifacts.methods.get(options.routeMethodName);
  if (!projection) {
    return {
      status: 404,
      kind: 'json',
      body: { ok: false, error: `No generated docs found for ${options.routeMethodName}.` },
    };
  }

  const document = buildOpenApiMethodDocumentFromProjection(projection as OpenApiMethodProjection, {
    title: options.buildMethodTitle?.(options.routeMethodName) ?? options.routeMethodName,
    version: options.methodVersion ?? options.artifacts.json.info.version,
    description: options.buildMethodDescription?.(options.routeMethodName)
      ?? `Generated method documentation for ${options.routeMethodName}.`,
  });

  if (resolveDocsFormat(options.requestUrl, options.acceptHeader) === 'json') {
    return {
      status: 200,
      kind: 'json',
      body: document,
    };
  }

  return {
    status: 200,
    kind: 'html',
    body: renderScalarHtml(document, {
      pageTitle: options.buildMethodTitle?.(options.routeMethodName) ?? options.routeMethodName,
    }),
  };
}

function buildOpenApiMethodDocumentFromProjection(
  projection: OpenApiMethodProjection,
  options: { title: string; version: string; description?: string },
): OpenApiDocument {
  const tagNames = projection.docs?.tags?.length
    ? projection.docs.tags
    : inferTags(projection.methodName);

  return {
    openapi: '3.1.0',
    info: {
      title: options.title,
      version: options.version,
      ...(options.description ? { description: options.description } : {}),
    },
    ...(tagNames.length > 0 ? { tags: tagNames.map((name) => ({ name })) } : {}),
    paths: {
      [projection.httpPath]: {
        [projection.httpMethod ?? 'post']: {
          operationId: projection.methodName,
          ...(projection.docs?.summary ? { summary: projection.docs.summary } : {}),
          ...(projection.docs?.description || projection.implementationMd ? { description: [projection.docs?.description, projection.implementationMd ? `\n\n---\n\n${projection.implementationMd}` : undefined].filter(Boolean).join("\n\n") } : {}),
          ...(projection.docs?.tags?.length ? { tags: projection.docs.tags } : { tags: inferTags(projection.methodName) }),
          ...(projection.httpMethod === 'get' ? {} : {
            requestBody: {
              required: projection.requestRequired,
              content: {
                'application/json': {
                  schema: projection.requestSchema,
                },
              },
            },
          }),
          responses: {
            '200': {
              description: projection.docs?.returnsDescription ?? `Result of ${projection.methodName}.`,
              content: {
                'application/json': {
                  schema: projection.responseSchema,
                },
              },
            },
          },
        },
      },
    },
    ...(projection.components?.schemas ? { components: { schemas: projection.components.schemas } } : {}),
  };
}

function inferTags(methodName: string): string[] {
  const firstDot = methodName.indexOf('.');
  if (firstDot <= 0) {
    return ['rpc'];
  }
  return [methodName.slice(0, firstDot)];
}

function resolveDocsFormat(requestUrl: URL, acceptHeader: string | undefined): 'json' | 'html' {
  const explicit = requestUrl.searchParams.get('__docs')?.toLowerCase();
  if (explicit === 'json') return 'json';
  if (explicit === 'html') return 'html';
  if (acceptHeader?.includes('application/vnd.nrpc.openapi+json')) return 'json';
  return 'html';
}

function trimTrailingSlash(value: string): string {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}


export const docsJson = {
  "openapi": "3.1.0",
  "info": {
    "title": "Change Case API",
    "version": "0.1.0"
  },
  "tags": [
    {
      "name": "api.plugins.sdkPlugin.text"
    },
    {
      "name": "text"
    }
  ],
  "paths": {
    "/api/plugins/sdkPlugin/text/analyzeTitle": {
      "post": {
        "operationId": "api.plugins.sdkPlugin.text.analyzeTitle",
        "description": "\n\n---\n\n# api.plugins.sdkPlugin.text.analyzeTitle\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/analyzeTitle` | **Type:** `async function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `AnalyzeTitleInput` | Yes | - |\n\n## Returns\n\n`AnalyzeTitleResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\r\n  console.log(\"hi\")\r\n  return {\r\n    title: capitalCase(input.value),\r\n    sentence: sentenceCase(input.value),\r\n    kebab: kebabCase(input.value),\r\n    wordCount: input.value.trim().split(/\\s+/).filter(Boolean).length,\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `AnalyzeTitleInput` (interface)\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\n\n```typescript\ninterface AnalyzeTitleInput {\r\n  /** Source text to analyze and normalize. */\r\n  value: string;\r\n}\n```\n\n#### `AnalyzeTitleResult` (interface)\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\n\n```typescript\ninterface AnalyzeTitleResult {\r\n  /** Human title case form. */\r\n  title: string;\r\n  /** Sentence case form. */\r\n  sentence: string;\r\n  /** URL-friendly kebab-case form. */\r\n  kebab: string;\r\n  /** Count of whitespace-separated terms. */\r\n  wordCount: number;\r\n}\n```\n\n#### `capitalCase` (import)\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\n\n```typescript\ncapitalCase\n```\n\n#### `sentenceCase` (import)\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\n\n```typescript\nsentenceCase\n```\n\n#### `kebabCase` (import)\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\n\n```typescript\nkebabCase\n```\n\n#### `AnalyzeTitleResult` (type)\n\n**Description:** Return type\n",
        "tags": [
          "api.plugins.sdkPlugin.text"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AnalyzeTitleInput"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result of api.plugins.sdkPlugin.text.analyzeTitle.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AnalyzeTitleResult"
                }
              }
            }
          }
        }
      }
    },
    "/api/plugins/sdkPlugin/text/formatName": {
      "post": {
        "operationId": "api.plugins.sdkPlugin.text.formatName",
        "description": "\n\n---\n\n# api.plugins.sdkPlugin.text.formatName\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName` | **Type:** `async function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `FormatNameInput` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input.value),\r\n    pascal: pascalCase(input.value),\r\n    snake: snakeCase(input.value),\r\n    constant: constantCase(input.value),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameInput` (interface)\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\n\n```typescript\ninterface FormatNameInput {\r\n  /** Source text to transform. */\r\n  value: string;\r\n}\n```\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
        "tags": [
          "api.plugins.sdkPlugin.text"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FormatNameInput"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result of api.plugins.sdkPlugin.text.formatName.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FormatNameResult"
                }
              }
            }
          }
        }
      }
    },
    "/api/plugins/sdkPlugin/text/formatName_string": {
      "post": {
        "operationId": "api.plugins.sdkPlugin.text.formatName_string",
        "description": "\n\n---\n\n# api.plugins.sdkPlugin.text.formatName_string\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName_string` | **Type:** `async function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `string` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName_string(input: string): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input),\r\n    pascal: pascalCase(input),\r\n    snake: snakeCase(input),\r\n    constant: constantCase(input),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
        "tags": [
          "api.plugins.sdkPlugin.text"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "string"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result of api.plugins.sdkPlugin.text.formatName_string.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FormatNameResult"
                }
              }
            }
          }
        }
      }
    },
    "/api/text/analyzeTitle": {
      "post": {
        "operationId": "text.analyzeTitle",
        "description": "\n\n---\n\n# text.analyzeTitle\n\n> **HTTP:** `POST /api/text/analyzeTitle` | **Type:** `async function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\n\n## Signature\n\n```typescript\nasync function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `AnalyzeTitleInput` | Yes | - |\n\n## Returns\n\n`AnalyzeTitleResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\r\n  console.log(\"hi\")\r\n  return {\r\n    title: capitalCase(input.value),\r\n    sentence: sentenceCase(input.value),\r\n    kebab: kebabCase(input.value),\r\n    wordCount: input.value.trim().split(/\\s+/).filter(Boolean).length,\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `AnalyzeTitleInput` (interface)\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\n\n```typescript\ninterface AnalyzeTitleInput {\r\n  /** Source text to analyze and normalize. */\r\n  value: string;\r\n}\n```\n\n#### `AnalyzeTitleResult` (interface)\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\n\n```typescript\ninterface AnalyzeTitleResult {\r\n  /** Human title case form. */\r\n  title: string;\r\n  /** Sentence case form. */\r\n  sentence: string;\r\n  /** URL-friendly kebab-case form. */\r\n  kebab: string;\r\n  /** Count of whitespace-separated terms. */\r\n  wordCount: number;\r\n}\n```\n\n#### `capitalCase` (import)\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\n\n```typescript\ncapitalCase\n```\n\n#### `sentenceCase` (import)\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\n\n```typescript\nsentenceCase\n```\n\n#### `kebabCase` (import)\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\n\n```typescript\nkebabCase\n```\n\n#### `AnalyzeTitleResult` (type)\n\n**Description:** Return type\n",
        "tags": [
          "text"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AnalyzeTitleInput"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result of text.analyzeTitle.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AnalyzeTitleResult"
                }
              }
            }
          }
        }
      }
    },
    "/api/text/formatName": {
      "post": {
        "operationId": "text.formatName",
        "description": "\n\n---\n\n# text.formatName\n\n> **HTTP:** `POST /api/text/formatName` | **Type:** `async function text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\n\n## Signature\n\n```typescript\nasync function text.formatName(input: FormatNameInput): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `FormatNameInput` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input.value),\r\n    pascal: pascalCase(input.value),\r\n    snake: snakeCase(input.value),\r\n    constant: constantCase(input.value),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameInput` (interface)\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\n\n```typescript\ninterface FormatNameInput {\r\n  /** Source text to transform. */\r\n  value: string;\r\n}\n```\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
        "tags": [
          "text"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FormatNameInput"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result of text.formatName.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FormatNameResult"
                }
              }
            }
          }
        }
      }
    },
    "/api/text/formatName_string": {
      "post": {
        "operationId": "text.formatName_string",
        "description": "\n\n---\n\n# text.formatName_string\n\n> **HTTP:** `POST /api/text/formatName_string` | **Type:** `async function text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\n\n## Signature\n\n```typescript\nasync function text.formatName_string(input: string): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `string` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName_string(input: string): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input),\r\n    pascal: pascalCase(input),\r\n    snake: snakeCase(input),\r\n    constant: constantCase(input),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
        "tags": [
          "text"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "string"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result of text.formatName_string.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FormatNameResult"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AnalyzeTitleInput": {
        "type": "object",
        "properties": {
          "value": {
            "type": "string",
            "description": "Source text to analyze and normalize."
          }
        },
        "required": [
          "value"
        ]
      },
      "AnalyzeTitleResult": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "Human title case form."
          },
          "sentence": {
            "type": "string",
            "description": "Sentence case form."
          },
          "kebab": {
            "type": "string",
            "description": "URL-friendly kebab-case form."
          },
          "wordCount": {
            "type": "number",
            "description": "Count of whitespace-separated terms."
          }
        },
        "required": [
          "title",
          "sentence",
          "kebab",
          "wordCount"
        ]
      },
      "FormatNameInput": {
        "type": "object",
        "properties": {
          "value": {
            "type": "string",
            "description": "Source text to transform."
          }
        },
        "required": [
          "value"
        ]
      },
      "FormatNameResult": {
        "type": "object",
        "properties": {
          "camel": {
            "type": "string",
            "description": "Lower camelCase form."
          },
          "pascal": {
            "type": "string",
            "description": "Upper PascalCase form."
          },
          "snake": {
            "type": "string",
            "description": "lower_snake_case form."
          },
          "constant": {
            "type": "string",
            "description": "UPPER_CONSTANT_CASE form."
          }
        },
        "required": [
          "camel",
          "pascal",
          "snake",
          "constant"
        ]
      }
    }
  }
};

export const docsHtml = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Change Case API</title>\n    <style>\n      * { box-sizing: border-box; }\n      html, body { margin: 0; width: 100%; min-height: 100%; }\n      #scalar-root { min-height: 100vh; }\n    </style>\n    <script src=\"https://cdn.jsdelivr.net/npm/@scalar/api-reference\"></script>\n  </head>\n  <body>\n    <div id=\"scalar-root\"></div>\n    <script>\n      Scalar.createApiReference('#scalar-root', {\n        theme: 'default',\n        darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,\n          layout: 'modern',\n          showSidebar: true,\n          hideModels: false,\n        documentDownloadType: 'both',\n          hideTestRequestButton: false,\n        hideClientButton: true,\n        hiddenClients: true,\n        showOperationId: false,\n          showDeveloperTools: true,\n        metaData: { title: \"Change Case API\" },\n        customCss: \"\\n\\t\\t.scalar-app .introduction-section h1,\\n\\t\\t.scalar-app .introduction-section p,\\n\\t\\t.scalar-app .introduction-section .badge,\\n\\t\\t.scalar-app .introduction-section .servers,\\n\\t\\t.scalar-app .introduction-section [data-testid=\\\"document-version\\\"] {\\n\\t\\t\\tdisplay: none !important;\\n\\t\\t}\\n\\n\\t\\t.scalar-app .references-header {\\n\\t\\t\\tdisplay: none !important;\\n\\t\\t}\\n\\n    #headlessui-portal-root {\\n      display: none !important;\\n    }\\n\\n    .scalar-app .z-overlay {\\n      pointer-events: none !important;\\n      z-index: auto !important;\\n    }\\n\\n    .scalar-app .references-layout,\\n    .scalar-app .api-client__layout,\\n    .scalar-app .reference-layout,\\n    .scalar-app .reference-layout__content,\\n    .scalar-app .reference-layout__section {\\n      max-width: 100% !important;\\n    }\\n\\n\\t\\t.scalar-app {\\n\\t\\t\\tmin-height: 100vh;\\n\\t\\t}\\n\\t\",\n        content: {\"openapi\":\"3.1.0\",\"info\":{\"title\":\"Change Case API\",\"version\":\"0.1.0\"},\"tags\":[{\"name\":\"api.plugins.sdkPlugin.text\"},{\"name\":\"text\"}],\"paths\":{\"/api/plugins/sdkPlugin/text/analyzeTitle\":{\"post\":{\"operationId\":\"api.plugins.sdkPlugin.text.analyzeTitle\",\"description\":\"\\n\\n---\\n\\n# api.plugins.sdkPlugin.text.analyzeTitle\\n\\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/analyzeTitle` | **Type:** `async function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\\n\\n## Signature\\n\\n```typescript\\nasync function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\\n```\\n\\n## Parameters\\n\\n| Name | Type | Required | Description |\\n|------|------|----------|-------------|\\n| `input` | `AnalyzeTitleInput` | Yes | - |\\n\\n## Returns\\n\\n`AnalyzeTitleResult`\\n\\nReturn value\\n\\n## Implementation\\n\\n```typescript\\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\\r\\n  console.log(\\\"hi\\\")\\r\\n  return {\\r\\n    title: capitalCase(input.value),\\r\\n    sentence: sentenceCase(input.value),\\r\\n    kebab: kebabCase(input.value),\\r\\n    wordCount: input.value.trim().split(/\\\\s+/).filter(Boolean).length,\\r\\n  };\\r\\n}\\n```\\n\\n## Dependencies\\n\\n### Internal\\n\\n#### `AnalyzeTitleInput` (interface)\\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\\n\\n```typescript\\ninterface AnalyzeTitleInput {\\r\\n  /** Source text to analyze and normalize. */\\r\\n  value: string;\\r\\n}\\n```\\n\\n#### `AnalyzeTitleResult` (interface)\\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\\n\\n```typescript\\ninterface AnalyzeTitleResult {\\r\\n  /** Human title case form. */\\r\\n  title: string;\\r\\n  /** Sentence case form. */\\r\\n  sentence: string;\\r\\n  /** URL-friendly kebab-case form. */\\r\\n  kebab: string;\\r\\n  /** Count of whitespace-separated terms. */\\r\\n  wordCount: number;\\r\\n}\\n```\\n\\n#### `capitalCase` (import)\\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\\n\\n```typescript\\ncapitalCase\\n```\\n\\n#### `sentenceCase` (import)\\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\\n\\n```typescript\\nsentenceCase\\n```\\n\\n#### `kebabCase` (import)\\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\\n\\n```typescript\\nkebabCase\\n```\\n\\n#### `AnalyzeTitleResult` (type)\\n\\n**Description:** Return type\\n\",\"tags\":[\"api.plugins.sdkPlugin.text\"],\"requestBody\":{\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AnalyzeTitleInput\"}}}},\"responses\":{\"200\":{\"description\":\"Result of api.plugins.sdkPlugin.text.analyzeTitle.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AnalyzeTitleResult\"}}}}}}},\"/api/plugins/sdkPlugin/text/formatName\":{\"post\":{\"operationId\":\"api.plugins.sdkPlugin.text.formatName\",\"description\":\"\\n\\n---\\n\\n# api.plugins.sdkPlugin.text.formatName\\n\\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName` | **Type:** `async function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\\n\\n## Signature\\n\\n```typescript\\nasync function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>\\n```\\n\\n## Parameters\\n\\n| Name | Type | Required | Description |\\n|------|------|----------|-------------|\\n| `input` | `FormatNameInput` | Yes | - |\\n\\n## Returns\\n\\n`FormatNameResult`\\n\\nReturn value\\n\\n## Implementation\\n\\n```typescript\\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\\r\\n  return {\\r\\n    camel: camelCase(input.value),\\r\\n    pascal: pascalCase(input.value),\\r\\n    snake: snakeCase(input.value),\\r\\n    constant: constantCase(input.value),\\r\\n  };\\r\\n}\\n```\\n\\n## Dependencies\\n\\n### Internal\\n\\n#### `FormatNameInput` (interface)\\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\\n\\n```typescript\\ninterface FormatNameInput {\\r\\n  /** Source text to transform. */\\r\\n  value: string;\\r\\n}\\n```\\n\\n#### `FormatNameResult` (interface)\\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\\n\\n```typescript\\ninterface FormatNameResult {\\r\\n  /** Lower camelCase form. */\\r\\n  camel: string;\\r\\n  /** Upper PascalCase form. */\\r\\n  pascal: string;\\r\\n  /** lower_snake_case form. */\\r\\n  snake: string;\\r\\n  /** UPPER_CONSTANT_CASE form. */\\r\\n  constant: string;\\r\\n}\\n```\\n\\n#### `camelCase` (import)\\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\\n\\n```typescript\\ncamelCase\\n```\\n\\n#### `pascalCase` (import)\\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\\n\\n```typescript\\npascalCase\\n```\\n\\n#### `snakeCase` (import)\\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\\n\\n```typescript\\nsnakeCase\\n```\\n\\n#### `constantCase` (import)\\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\\n\\n```typescript\\nconstantCase\\n```\\n\\n#### `FormatNameResult` (type)\\n\\n**Description:** Return type\\n\",\"tags\":[\"api.plugins.sdkPlugin.text\"],\"requestBody\":{\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/FormatNameInput\"}}}},\"responses\":{\"200\":{\"description\":\"Result of api.plugins.sdkPlugin.text.formatName.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/FormatNameResult\"}}}}}}},\"/api/plugins/sdkPlugin/text/formatName_string\":{\"post\":{\"operationId\":\"api.plugins.sdkPlugin.text.formatName_string\",\"description\":\"\\n\\n---\\n\\n# api.plugins.sdkPlugin.text.formatName_string\\n\\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName_string` | **Type:** `async function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\\n\\n## Signature\\n\\n```typescript\\nasync function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>\\n```\\n\\n## Parameters\\n\\n| Name | Type | Required | Description |\\n|------|------|----------|-------------|\\n| `input` | `string` | Yes | - |\\n\\n## Returns\\n\\n`FormatNameResult`\\n\\nReturn value\\n\\n## Implementation\\n\\n```typescript\\nasync function formatName_string(input: string): Promise<FormatNameResult> {\\r\\n  return {\\r\\n    camel: camelCase(input),\\r\\n    pascal: pascalCase(input),\\r\\n    snake: snakeCase(input),\\r\\n    constant: constantCase(input),\\r\\n  };\\r\\n}\\n```\\n\\n## Dependencies\\n\\n### Internal\\n\\n#### `FormatNameResult` (interface)\\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\\n\\n```typescript\\ninterface FormatNameResult {\\r\\n  /** Lower camelCase form. */\\r\\n  camel: string;\\r\\n  /** Upper PascalCase form. */\\r\\n  pascal: string;\\r\\n  /** lower_snake_case form. */\\r\\n  snake: string;\\r\\n  /** UPPER_CONSTANT_CASE form. */\\r\\n  constant: string;\\r\\n}\\n```\\n\\n#### `camelCase` (import)\\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\\n\\n```typescript\\ncamelCase\\n```\\n\\n#### `pascalCase` (import)\\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\\n\\n```typescript\\npascalCase\\n```\\n\\n#### `snakeCase` (import)\\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\\n\\n```typescript\\nsnakeCase\\n```\\n\\n#### `constantCase` (import)\\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\\n\\n```typescript\\nconstantCase\\n```\\n\\n#### `FormatNameResult` (type)\\n\\n**Description:** Return type\\n\",\"tags\":[\"api.plugins.sdkPlugin.text\"],\"requestBody\":{\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"type\":\"string\"}}}},\"responses\":{\"200\":{\"description\":\"Result of api.plugins.sdkPlugin.text.formatName_string.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/FormatNameResult\"}}}}}}},\"/api/text/analyzeTitle\":{\"post\":{\"operationId\":\"text.analyzeTitle\",\"description\":\"\\n\\n---\\n\\n# text.analyzeTitle\\n\\n> **HTTP:** `POST /api/text/analyzeTitle` | **Type:** `async function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\\n\\n## Signature\\n\\n```typescript\\nasync function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\\n```\\n\\n## Parameters\\n\\n| Name | Type | Required | Description |\\n|------|------|----------|-------------|\\n| `input` | `AnalyzeTitleInput` | Yes | - |\\n\\n## Returns\\n\\n`AnalyzeTitleResult`\\n\\nReturn value\\n\\n## Implementation\\n\\n```typescript\\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\\r\\n  console.log(\\\"hi\\\")\\r\\n  return {\\r\\n    title: capitalCase(input.value),\\r\\n    sentence: sentenceCase(input.value),\\r\\n    kebab: kebabCase(input.value),\\r\\n    wordCount: input.value.trim().split(/\\\\s+/).filter(Boolean).length,\\r\\n  };\\r\\n}\\n```\\n\\n## Dependencies\\n\\n### Internal\\n\\n#### `AnalyzeTitleInput` (interface)\\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\\n\\n```typescript\\ninterface AnalyzeTitleInput {\\r\\n  /** Source text to analyze and normalize. */\\r\\n  value: string;\\r\\n}\\n```\\n\\n#### `AnalyzeTitleResult` (interface)\\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\\n\\n```typescript\\ninterface AnalyzeTitleResult {\\r\\n  /** Human title case form. */\\r\\n  title: string;\\r\\n  /** Sentence case form. */\\r\\n  sentence: string;\\r\\n  /** URL-friendly kebab-case form. */\\r\\n  kebab: string;\\r\\n  /** Count of whitespace-separated terms. */\\r\\n  wordCount: number;\\r\\n}\\n```\\n\\n#### `capitalCase` (import)\\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\\n\\n```typescript\\ncapitalCase\\n```\\n\\n#### `sentenceCase` (import)\\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\\n\\n```typescript\\nsentenceCase\\n```\\n\\n#### `kebabCase` (import)\\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\\n\\n```typescript\\nkebabCase\\n```\\n\\n#### `AnalyzeTitleResult` (type)\\n\\n**Description:** Return type\\n\",\"tags\":[\"text\"],\"requestBody\":{\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AnalyzeTitleInput\"}}}},\"responses\":{\"200\":{\"description\":\"Result of text.analyzeTitle.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/AnalyzeTitleResult\"}}}}}}},\"/api/text/formatName\":{\"post\":{\"operationId\":\"text.formatName\",\"description\":\"\\n\\n---\\n\\n# text.formatName\\n\\n> **HTTP:** `POST /api/text/formatName` | **Type:** `async function text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\\n\\n## Signature\\n\\n```typescript\\nasync function text.formatName(input: FormatNameInput): Promise<FormatNameResult>\\n```\\n\\n## Parameters\\n\\n| Name | Type | Required | Description |\\n|------|------|----------|-------------|\\n| `input` | `FormatNameInput` | Yes | - |\\n\\n## Returns\\n\\n`FormatNameResult`\\n\\nReturn value\\n\\n## Implementation\\n\\n```typescript\\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\\r\\n  return {\\r\\n    camel: camelCase(input.value),\\r\\n    pascal: pascalCase(input.value),\\r\\n    snake: snakeCase(input.value),\\r\\n    constant: constantCase(input.value),\\r\\n  };\\r\\n}\\n```\\n\\n## Dependencies\\n\\n### Internal\\n\\n#### `FormatNameInput` (interface)\\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\\n\\n```typescript\\ninterface FormatNameInput {\\r\\n  /** Source text to transform. */\\r\\n  value: string;\\r\\n}\\n```\\n\\n#### `FormatNameResult` (interface)\\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\\n\\n```typescript\\ninterface FormatNameResult {\\r\\n  /** Lower camelCase form. */\\r\\n  camel: string;\\r\\n  /** Upper PascalCase form. */\\r\\n  pascal: string;\\r\\n  /** lower_snake_case form. */\\r\\n  snake: string;\\r\\n  /** UPPER_CONSTANT_CASE form. */\\r\\n  constant: string;\\r\\n}\\n```\\n\\n#### `camelCase` (import)\\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\\n\\n```typescript\\ncamelCase\\n```\\n\\n#### `pascalCase` (import)\\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\\n\\n```typescript\\npascalCase\\n```\\n\\n#### `snakeCase` (import)\\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\\n\\n```typescript\\nsnakeCase\\n```\\n\\n#### `constantCase` (import)\\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\\n\\n```typescript\\nconstantCase\\n```\\n\\n#### `FormatNameResult` (type)\\n\\n**Description:** Return type\\n\",\"tags\":[\"text\"],\"requestBody\":{\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/FormatNameInput\"}}}},\"responses\":{\"200\":{\"description\":\"Result of text.formatName.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/FormatNameResult\"}}}}}}},\"/api/text/formatName_string\":{\"post\":{\"operationId\":\"text.formatName_string\",\"description\":\"\\n\\n---\\n\\n# text.formatName_string\\n\\n> **HTTP:** `POST /api/text/formatName_string` | **Type:** `async function text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\\n\\n## Signature\\n\\n```typescript\\nasync function text.formatName_string(input: string): Promise<FormatNameResult>\\n```\\n\\n## Parameters\\n\\n| Name | Type | Required | Description |\\n|------|------|----------|-------------|\\n| `input` | `string` | Yes | - |\\n\\n## Returns\\n\\n`FormatNameResult`\\n\\nReturn value\\n\\n## Implementation\\n\\n```typescript\\nasync function formatName_string(input: string): Promise<FormatNameResult> {\\r\\n  return {\\r\\n    camel: camelCase(input),\\r\\n    pascal: pascalCase(input),\\r\\n    snake: snakeCase(input),\\r\\n    constant: constantCase(input),\\r\\n  };\\r\\n}\\n```\\n\\n## Dependencies\\n\\n### Internal\\n\\n#### `FormatNameResult` (interface)\\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\\n\\n```typescript\\ninterface FormatNameResult {\\r\\n  /** Lower camelCase form. */\\r\\n  camel: string;\\r\\n  /** Upper PascalCase form. */\\r\\n  pascal: string;\\r\\n  /** lower_snake_case form. */\\r\\n  snake: string;\\r\\n  /** UPPER_CONSTANT_CASE form. */\\r\\n  constant: string;\\r\\n}\\n```\\n\\n#### `camelCase` (import)\\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\\n\\n```typescript\\ncamelCase\\n```\\n\\n#### `pascalCase` (import)\\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\\n\\n```typescript\\npascalCase\\n```\\n\\n#### `snakeCase` (import)\\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\\n\\n```typescript\\nsnakeCase\\n```\\n\\n#### `constantCase` (import)\\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\\n\\n```typescript\\nconstantCase\\n```\\n\\n#### `FormatNameResult` (type)\\n\\n**Description:** Return type\\n\",\"tags\":[\"text\"],\"requestBody\":{\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"type\":\"string\"}}}},\"responses\":{\"200\":{\"description\":\"Result of text.formatName_string.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/components/schemas/FormatNameResult\"}}}}}}}},\"components\":{\"schemas\":{\"AnalyzeTitleInput\":{\"type\":\"object\",\"properties\":{\"value\":{\"type\":\"string\",\"description\":\"Source text to analyze and normalize.\"}},\"required\":[\"value\"]},\"AnalyzeTitleResult\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"Human title case form.\"},\"sentence\":{\"type\":\"string\",\"description\":\"Sentence case form.\"},\"kebab\":{\"type\":\"string\",\"description\":\"URL-friendly kebab-case form.\"},\"wordCount\":{\"type\":\"number\",\"description\":\"Count of whitespace-separated terms.\"}},\"required\":[\"title\",\"sentence\",\"kebab\",\"wordCount\"]},\"FormatNameInput\":{\"type\":\"object\",\"properties\":{\"value\":{\"type\":\"string\",\"description\":\"Source text to transform.\"}},\"required\":[\"value\"]},\"FormatNameResult\":{\"type\":\"object\",\"properties\":{\"camel\":{\"type\":\"string\",\"description\":\"Lower camelCase form.\"},\"pascal\":{\"type\":\"string\",\"description\":\"Upper PascalCase form.\"},\"snake\":{\"type\":\"string\",\"description\":\"lower_snake_case form.\"},\"constant\":{\"type\":\"string\",\"description\":\"UPPER_CONSTANT_CASE form.\"}},\"required\":[\"camel\",\"pascal\",\"snake\",\"constant\"]}}}},\n      });\n\n      queueMicrotask(() => {\n        const buttons = document.querySelectorAll('.download-container .download-button span');\n        if (buttons.length >= 2) {\n          buttons[0].textContent = 'Download OpenAPI JSON';\n          buttons[1].textContent = 'Download OpenAPI YAML';\n        }\n      });\n    </script>\n  </body>\n</html>";

export const docsMethods: ReadonlyMap<string, { methodName: string; httpPath: string; requestSchema: unknown; responseSchema: unknown; requestRequired: boolean; implementationMd?: string; effects: OpenApiMethodEffects; genericTypeParameters?: string[]; parameterNames?: string[]; parameterOptionalFlags?: boolean[]; parameterRestFlags?: boolean[]; parameterTypeTexts?: string[]; resultTypeText?: string; symbolSemanticFlags?: OpenApiSymbolSemanticFlags; symbolRelations?: OpenApiSymbolRelationSet; memberAbiFlags?: OpenApiMemberAbiFlags; nodeAbiFlags?: OpenApiNodeAbiFlags; components?: { schemas: Record<string, unknown> }; docs?: { summary?: string; description?: string; returnsDescription?: string; tags?: string[]; params?: Record<string, string> } }> = new Map([
  [
    "api.plugins.sdkPlugin.text.analyzeTitle",
    {
      "methodName": "api.plugins.sdkPlugin.text.analyzeTitle",
      "httpMethod": "post",
      "httpPath": "/api/plugins/sdkPlugin/text/analyzeTitle",
      "requestSchema": {
        "$ref": "#/components/schemas/AnalyzeTitleInput"
      },
      "responseSchema": {
        "$ref": "#/components/schemas/AnalyzeTitleResult"
      },
      "requestRequired": true,
      "implementationMd": "# api.plugins.sdkPlugin.text.analyzeTitle\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/analyzeTitle` | **Type:** `async function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `AnalyzeTitleInput` | Yes | - |\n\n## Returns\n\n`AnalyzeTitleResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\r\n  console.log(\"hi\")\r\n  return {\r\n    title: capitalCase(input.value),\r\n    sentence: sentenceCase(input.value),\r\n    kebab: kebabCase(input.value),\r\n    wordCount: input.value.trim().split(/\\s+/).filter(Boolean).length,\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `AnalyzeTitleInput` (interface)\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\n\n```typescript\ninterface AnalyzeTitleInput {\r\n  /** Source text to analyze and normalize. */\r\n  value: string;\r\n}\n```\n\n#### `AnalyzeTitleResult` (interface)\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\n\n```typescript\ninterface AnalyzeTitleResult {\r\n  /** Human title case form. */\r\n  title: string;\r\n  /** Sentence case form. */\r\n  sentence: string;\r\n  /** URL-friendly kebab-case form. */\r\n  kebab: string;\r\n  /** Count of whitespace-separated terms. */\r\n  wordCount: number;\r\n}\n```\n\n#### `capitalCase` (import)\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\n\n```typescript\ncapitalCase\n```\n\n#### `sentenceCase` (import)\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\n\n```typescript\nsentenceCase\n```\n\n#### `kebabCase` (import)\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\n\n```typescript\nkebabCase\n```\n\n#### `AnalyzeTitleResult` (type)\n\n**Description:** Return type\n",
      "effects": {
        "receiverMutability": "none",
        "mutatesReceiver": false,
        "externalSideEffects": false,
        "executionPurity": "unknown",
        "reason": "no receiver; purity cannot be proven from declaration alone"
      },
      "genericTypeParameters": [],
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ],
      "parameterTypeTexts": [
        "AnalyzeTitleInput"
      ],
      "resultTypeText": "AnalyzeTitleResult",
      "symbolSemanticFlags": {
        "symbolKind": "property",
        "spaces": [
          "value"
        ],
        "isAlias": false,
        "isOptional": false,
        "isTypeOnly": false,
        "isValueLike": true,
        "isTypeLike": false,
        "isNamespaceLike": false
      },
      "symbolRelations": {},
      "memberAbiFlags": {
        "static": false,
        "async": true,
        "readonly": false,
        "abstract": false,
        "visibility": "public",
        "override": false,
        "deprecated": false,
        "export": false
      },
      "nodeAbiFlags": {
        "containsThis": false,
        "hasAsyncFunctions": false,
        "awaitContext": false,
        "optionalChain": false,
        "hasImplicitReturn": false,
        "hasExplicitReturn": false
      },
      "components": {
        "schemas": {
          "AnalyzeTitleInput": {
            "type": "object",
            "properties": {
              "value": {
                "type": "string",
                "description": "Source text to analyze and normalize."
              }
            },
            "required": [
              "value"
            ]
          },
          "AnalyzeTitleResult": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Human title case form."
              },
              "sentence": {
                "type": "string",
                "description": "Sentence case form."
              },
              "kebab": {
                "type": "string",
                "description": "URL-friendly kebab-case form."
              },
              "wordCount": {
                "type": "number",
                "description": "Count of whitespace-separated terms."
              }
            },
            "required": [
              "title",
              "sentence",
              "kebab",
              "wordCount"
            ]
          }
        }
      }
    }
  ],
  [
    "api.plugins.sdkPlugin.text.formatName",
    {
      "methodName": "api.plugins.sdkPlugin.text.formatName",
      "httpMethod": "post",
      "httpPath": "/api/plugins/sdkPlugin/text/formatName",
      "requestSchema": {
        "$ref": "#/components/schemas/FormatNameInput"
      },
      "responseSchema": {
        "$ref": "#/components/schemas/FormatNameResult"
      },
      "requestRequired": true,
      "implementationMd": "# api.plugins.sdkPlugin.text.formatName\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName` | **Type:** `async function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.formatName(input: FormatNameInput): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `FormatNameInput` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input.value),\r\n    pascal: pascalCase(input.value),\r\n    snake: snakeCase(input.value),\r\n    constant: constantCase(input.value),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameInput` (interface)\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\n\n```typescript\ninterface FormatNameInput {\r\n  /** Source text to transform. */\r\n  value: string;\r\n}\n```\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
      "effects": {
        "receiverMutability": "none",
        "mutatesReceiver": false,
        "externalSideEffects": false,
        "executionPurity": "unknown",
        "reason": "no receiver; purity cannot be proven from declaration alone"
      },
      "genericTypeParameters": [],
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ],
      "parameterTypeTexts": [
        "FormatNameInput"
      ],
      "resultTypeText": "FormatNameResult",
      "symbolSemanticFlags": {
        "symbolKind": "property",
        "spaces": [
          "value"
        ],
        "isAlias": false,
        "isOptional": false,
        "isTypeOnly": false,
        "isValueLike": true,
        "isTypeLike": false,
        "isNamespaceLike": false
      },
      "symbolRelations": {},
      "memberAbiFlags": {
        "static": false,
        "async": true,
        "readonly": false,
        "abstract": false,
        "visibility": "public",
        "override": false,
        "deprecated": false,
        "export": false
      },
      "nodeAbiFlags": {
        "containsThis": false,
        "hasAsyncFunctions": false,
        "awaitContext": false,
        "optionalChain": false,
        "hasImplicitReturn": false,
        "hasExplicitReturn": false
      },
      "components": {
        "schemas": {
          "FormatNameInput": {
            "type": "object",
            "properties": {
              "value": {
                "type": "string",
                "description": "Source text to transform."
              }
            },
            "required": [
              "value"
            ]
          },
          "FormatNameResult": {
            "type": "object",
            "properties": {
              "camel": {
                "type": "string",
                "description": "Lower camelCase form."
              },
              "pascal": {
                "type": "string",
                "description": "Upper PascalCase form."
              },
              "snake": {
                "type": "string",
                "description": "lower_snake_case form."
              },
              "constant": {
                "type": "string",
                "description": "UPPER_CONSTANT_CASE form."
              }
            },
            "required": [
              "camel",
              "pascal",
              "snake",
              "constant"
            ]
          }
        }
      }
    }
  ],
  [
    "api.plugins.sdkPlugin.text.formatName_string",
    {
      "methodName": "api.plugins.sdkPlugin.text.formatName_string",
      "httpMethod": "post",
      "httpPath": "/api/plugins/sdkPlugin/text/formatName_string",
      "requestSchema": {
        "type": "string"
      },
      "responseSchema": {
        "$ref": "#/components/schemas/FormatNameResult"
      },
      "requestRequired": true,
      "implementationMd": "# api.plugins.sdkPlugin.text.formatName_string\n\n> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName_string` | **Type:** `async function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\n\n## Signature\n\n```typescript\nasync function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `string` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName_string(input: string): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input),\r\n    pascal: pascalCase(input),\r\n    snake: snakeCase(input),\r\n    constant: constantCase(input),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
      "effects": {
        "receiverMutability": "none",
        "mutatesReceiver": false,
        "externalSideEffects": false,
        "executionPurity": "unknown",
        "reason": "no receiver; purity cannot be proven from declaration alone"
      },
      "genericTypeParameters": [],
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ],
      "parameterTypeTexts": [
        "string"
      ],
      "resultTypeText": "FormatNameResult",
      "symbolSemanticFlags": {
        "symbolKind": "property",
        "spaces": [
          "value"
        ],
        "isAlias": false,
        "isOptional": false,
        "isTypeOnly": false,
        "isValueLike": true,
        "isTypeLike": false,
        "isNamespaceLike": false
      },
      "symbolRelations": {},
      "memberAbiFlags": {
        "static": false,
        "async": true,
        "readonly": false,
        "abstract": false,
        "visibility": "public",
        "override": false,
        "deprecated": false,
        "export": false
      },
      "nodeAbiFlags": {
        "containsThis": false,
        "hasAsyncFunctions": false,
        "awaitContext": false,
        "optionalChain": false,
        "hasImplicitReturn": false,
        "hasExplicitReturn": false
      },
      "components": {
        "schemas": {
          "FormatNameResult": {
            "type": "object",
            "properties": {
              "camel": {
                "type": "string",
                "description": "Lower camelCase form."
              },
              "pascal": {
                "type": "string",
                "description": "Upper PascalCase form."
              },
              "snake": {
                "type": "string",
                "description": "lower_snake_case form."
              },
              "constant": {
                "type": "string",
                "description": "UPPER_CONSTANT_CASE form."
              }
            },
            "required": [
              "camel",
              "pascal",
              "snake",
              "constant"
            ]
          }
        }
      }
    }
  ],
  [
    "text.analyzeTitle",
    {
      "methodName": "text.analyzeTitle",
      "httpMethod": "post",
      "httpPath": "/api/text/analyzeTitle",
      "requestSchema": {
        "$ref": "#/components/schemas/AnalyzeTitleInput"
      },
      "responseSchema": {
        "$ref": "#/components/schemas/AnalyzeTitleResult"
      },
      "requestRequired": true,
      "implementationMd": "# text.analyzeTitle\n\n> **HTTP:** `POST /api/text/analyzeTitle` | **Type:** `async function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`src/service.ts:76`](src/service.ts:76)\n\n## Signature\n\n```typescript\nasync function text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `AnalyzeTitleInput` | Yes | - |\n\n## Returns\n\n`AnalyzeTitleResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {\r\n  console.log(\"hi\")\r\n  return {\r\n    title: capitalCase(input.value),\r\n    sentence: sentenceCase(input.value),\r\n    kebab: kebabCase(input.value),\r\n    wordCount: input.value.trim().split(/\\s+/).filter(Boolean).length,\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `AnalyzeTitleInput` (interface)\n> **Location:** [`src/service.ts:16`](src/service.ts:16)\n\n```typescript\ninterface AnalyzeTitleInput {\r\n  /** Source text to analyze and normalize. */\r\n  value: string;\r\n}\n```\n\n#### `AnalyzeTitleResult` (interface)\n> **Location:** [`src/service.ts:32`](src/service.ts:32)\n\n```typescript\ninterface AnalyzeTitleResult {\r\n  /** Human title case form. */\r\n  title: string;\r\n  /** Sentence case form. */\r\n  sentence: string;\r\n  /** URL-friendly kebab-case form. */\r\n  kebab: string;\r\n  /** Count of whitespace-separated terms. */\r\n  wordCount: number;\r\n}\n```\n\n#### `capitalCase` (import)\n> **Location:** [`src/service.ts:3`](src/service.ts:3)\n\n```typescript\ncapitalCase\n```\n\n#### `sentenceCase` (import)\n> **Location:** [`src/service.ts:7`](src/service.ts:7)\n\n```typescript\nsentenceCase\n```\n\n#### `kebabCase` (import)\n> **Location:** [`src/service.ts:5`](src/service.ts:5)\n\n```typescript\nkebabCase\n```\n\n#### `AnalyzeTitleResult` (type)\n\n**Description:** Return type\n",
      "effects": {
        "receiverMutability": "none",
        "mutatesReceiver": false,
        "externalSideEffects": false,
        "executionPurity": "unknown",
        "reason": "no receiver; purity cannot be proven from declaration alone"
      },
      "genericTypeParameters": [],
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ],
      "parameterTypeTexts": [
        "AnalyzeTitleInput"
      ],
      "resultTypeText": "AnalyzeTitleResult",
      "symbolSemanticFlags": {
        "symbolKind": "property",
        "spaces": [
          "value"
        ],
        "isAlias": false,
        "isOptional": false,
        "isTypeOnly": false,
        "isValueLike": true,
        "isTypeLike": false,
        "isNamespaceLike": false
      },
      "symbolRelations": {},
      "memberAbiFlags": {
        "static": false,
        "async": true,
        "readonly": false,
        "abstract": false,
        "visibility": "public",
        "override": false,
        "deprecated": false,
        "export": false
      },
      "nodeAbiFlags": {
        "containsThis": false,
        "hasAsyncFunctions": false,
        "awaitContext": false,
        "optionalChain": false,
        "hasImplicitReturn": false,
        "hasExplicitReturn": false
      },
      "components": {
        "schemas": {
          "AnalyzeTitleInput": {
            "type": "object",
            "properties": {
              "value": {
                "type": "string",
                "description": "Source text to analyze and normalize."
              }
            },
            "required": [
              "value"
            ]
          },
          "AnalyzeTitleResult": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "Human title case form."
              },
              "sentence": {
                "type": "string",
                "description": "Sentence case form."
              },
              "kebab": {
                "type": "string",
                "description": "URL-friendly kebab-case form."
              },
              "wordCount": {
                "type": "number",
                "description": "Count of whitespace-separated terms."
              }
            },
            "required": [
              "title",
              "sentence",
              "kebab",
              "wordCount"
            ]
          }
        }
      }
    }
  ],
  [
    "text.formatName",
    {
      "methodName": "text.formatName",
      "httpMethod": "post",
      "httpPath": "/api/text/formatName",
      "requestSchema": {
        "$ref": "#/components/schemas/FormatNameInput"
      },
      "responseSchema": {
        "$ref": "#/components/schemas/FormatNameResult"
      },
      "requestRequired": true,
      "implementationMd": "# text.formatName\n\n> **HTTP:** `POST /api/text/formatName` | **Type:** `async function text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`src/service.ts:74`](src/service.ts:74)\n\n## Signature\n\n```typescript\nasync function text.formatName(input: FormatNameInput): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `FormatNameInput` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName(input: FormatNameInput): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input.value),\r\n    pascal: pascalCase(input.value),\r\n    snake: snakeCase(input.value),\r\n    constant: constantCase(input.value),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameInput` (interface)\n> **Location:** [`src/service.ts:11`](src/service.ts:11)\n\n```typescript\ninterface FormatNameInput {\r\n  /** Source text to transform. */\r\n  value: string;\r\n}\n```\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
      "effects": {
        "receiverMutability": "none",
        "mutatesReceiver": false,
        "externalSideEffects": false,
        "executionPurity": "unknown",
        "reason": "no receiver; purity cannot be proven from declaration alone"
      },
      "genericTypeParameters": [],
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ],
      "parameterTypeTexts": [
        "FormatNameInput"
      ],
      "resultTypeText": "FormatNameResult",
      "symbolSemanticFlags": {
        "symbolKind": "property",
        "spaces": [
          "value"
        ],
        "isAlias": false,
        "isOptional": false,
        "isTypeOnly": false,
        "isValueLike": true,
        "isTypeLike": false,
        "isNamespaceLike": false
      },
      "symbolRelations": {},
      "memberAbiFlags": {
        "static": false,
        "async": true,
        "readonly": false,
        "abstract": false,
        "visibility": "public",
        "override": false,
        "deprecated": false,
        "export": false
      },
      "nodeAbiFlags": {
        "containsThis": false,
        "hasAsyncFunctions": false,
        "awaitContext": false,
        "optionalChain": false,
        "hasImplicitReturn": false,
        "hasExplicitReturn": false
      },
      "components": {
        "schemas": {
          "FormatNameInput": {
            "type": "object",
            "properties": {
              "value": {
                "type": "string",
                "description": "Source text to transform."
              }
            },
            "required": [
              "value"
            ]
          },
          "FormatNameResult": {
            "type": "object",
            "properties": {
              "camel": {
                "type": "string",
                "description": "Lower camelCase form."
              },
              "pascal": {
                "type": "string",
                "description": "Upper PascalCase form."
              },
              "snake": {
                "type": "string",
                "description": "lower_snake_case form."
              },
              "constant": {
                "type": "string",
                "description": "UPPER_CONSTANT_CASE form."
              }
            },
            "required": [
              "camel",
              "pascal",
              "snake",
              "constant"
            ]
          }
        }
      }
    }
  ],
  [
    "text.formatName_string",
    {
      "methodName": "text.formatName_string",
      "httpMethod": "post",
      "httpPath": "/api/text/formatName_string",
      "requestSchema": {
        "type": "string"
      },
      "responseSchema": {
        "$ref": "#/components/schemas/FormatNameResult"
      },
      "requestRequired": true,
      "implementationMd": "# text.formatName_string\n\n> **HTTP:** `POST /api/text/formatName_string` | **Type:** `async function text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`src/service.ts:75`](src/service.ts:75)\n\n## Signature\n\n```typescript\nasync function text.formatName_string(input: string): Promise<FormatNameResult>\n```\n\n## Parameters\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n| `input` | `string` | Yes | - |\n\n## Returns\n\n`FormatNameResult`\n\nReturn value\n\n## Implementation\n\n```typescript\nasync function formatName_string(input: string): Promise<FormatNameResult> {\r\n  return {\r\n    camel: camelCase(input),\r\n    pascal: pascalCase(input),\r\n    snake: snakeCase(input),\r\n    constant: constantCase(input),\r\n  };\r\n}\n```\n\n## Dependencies\n\n### Internal\n\n#### `FormatNameResult` (interface)\n> **Location:** [`src/service.ts:21`](src/service.ts:21)\n\n```typescript\ninterface FormatNameResult {\r\n  /** Lower camelCase form. */\r\n  camel: string;\r\n  /** Upper PascalCase form. */\r\n  pascal: string;\r\n  /** lower_snake_case form. */\r\n  snake: string;\r\n  /** UPPER_CONSTANT_CASE form. */\r\n  constant: string;\r\n}\n```\n\n#### `camelCase` (import)\n> **Location:** [`src/service.ts:2`](src/service.ts:2)\n\n```typescript\ncamelCase\n```\n\n#### `pascalCase` (import)\n> **Location:** [`src/service.ts:6`](src/service.ts:6)\n\n```typescript\npascalCase\n```\n\n#### `snakeCase` (import)\n> **Location:** [`src/service.ts:8`](src/service.ts:8)\n\n```typescript\nsnakeCase\n```\n\n#### `constantCase` (import)\n> **Location:** [`src/service.ts:4`](src/service.ts:4)\n\n```typescript\nconstantCase\n```\n\n#### `FormatNameResult` (type)\n\n**Description:** Return type\n",
      "effects": {
        "receiverMutability": "none",
        "mutatesReceiver": false,
        "externalSideEffects": false,
        "executionPurity": "unknown",
        "reason": "no receiver; purity cannot be proven from declaration alone"
      },
      "genericTypeParameters": [],
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ],
      "parameterTypeTexts": [
        "string"
      ],
      "resultTypeText": "FormatNameResult",
      "symbolSemanticFlags": {
        "symbolKind": "property",
        "spaces": [
          "value"
        ],
        "isAlias": false,
        "isOptional": false,
        "isTypeOnly": false,
        "isValueLike": true,
        "isTypeLike": false,
        "isNamespaceLike": false
      },
      "symbolRelations": {},
      "memberAbiFlags": {
        "static": false,
        "async": true,
        "readonly": false,
        "abstract": false,
        "visibility": "public",
        "override": false,
        "deprecated": false,
        "export": false
      },
      "nodeAbiFlags": {
        "containsThis": false,
        "hasAsyncFunctions": false,
        "awaitContext": false,
        "optionalChain": false,
        "hasImplicitReturn": false,
        "hasExplicitReturn": false
      },
      "components": {
        "schemas": {
          "FormatNameResult": {
            "type": "object",
            "properties": {
              "camel": {
                "type": "string",
                "description": "Lower camelCase form."
              },
              "pascal": {
                "type": "string",
                "description": "Upper PascalCase form."
              },
              "snake": {
                "type": "string",
                "description": "lower_snake_case form."
              },
              "constant": {
                "type": "string",
                "description": "UPPER_CONSTANT_CASE form."
              }
            },
            "required": [
              "camel",
              "pascal",
              "snake",
              "constant"
            ]
          }
        }
      }
    }
  ]
]) as ReadonlyMap<string, { methodName: string; httpPath: string; requestSchema: unknown; responseSchema: unknown; requestRequired: boolean; implementationMd?: string; effects: OpenApiMethodEffects; genericTypeParameters?: string[]; parameterNames?: string[]; parameterOptionalFlags?: boolean[]; parameterRestFlags?: boolean[]; parameterTypeTexts?: string[]; resultTypeText?: string; symbolSemanticFlags?: OpenApiSymbolSemanticFlags; symbolRelations?: OpenApiSymbolRelationSet; memberAbiFlags?: OpenApiMemberAbiFlags; nodeAbiFlags?: OpenApiNodeAbiFlags; components?: { schemas: Record<string, unknown> }; docs?: { summary?: string; description?: string; returnsDescription?: string; tags?: string[]; params?: Record<string, string> } }>;

const generatedDocsRuntimeArtifacts: GeneratedDocsRuntimeArtifacts = {
  json: docsJson,
  html: docsHtml,
  methods: docsMethods as ReadonlyMap<string, { methodName: string; httpPath: string; requestSchema: unknown; responseSchema: unknown; requestRequired: boolean; implementationMd?: string; effects: OpenApiMethodEffects; components?: { schemas: Record<string, unknown> }; docs?: { summary?: string; description?: string; returnsDescription?: string; tags?: string[]; params?: Record<string, string> } }>,
};

export const generatedDocsRuntime = {
  ...generatedDocsRuntimeArtifacts,
  routeMethodNameByDocsPath: new Map([...docsMethods.values()].map((projection) => [`${projection.httpPath}/_docs`, projection.methodName])),
  resolve(request: Request) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/docs/openapi.json') {
      return { status: 200, kind: 'json', body: docsJson } as const;
    }
    if (request.method === 'GET' && url.pathname === '/docs') {
      return resolveGeneratedDocsResponse({
        method: request.method,
        requestUrl: new URL(`${url.origin}/docs/__docs/scalar${url.search}`),
        acceptHeader: request.headers.get('accept') ?? undefined,
        namespacePath: '/docs',
        artifacts: generatedDocsRuntimeArtifacts,
      });
    }
    const routeMethodName = this.routeMethodNameByDocsPath.get(url.pathname);
    if (request.method === 'GET' && routeMethodName) {
      return resolveGeneratedDocsResponse({
        method: request.method,
        requestUrl: url,
        acceptHeader: request.headers.get('accept') ?? undefined,
        routeMethodName,
        namespacePath: '/docs',
        artifacts: generatedDocsRuntimeArtifacts,
      });
    }
    return null;
  },
};
