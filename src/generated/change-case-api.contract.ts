// AUTO-GENERATED FILE. DO NOT EDIT.
import {
	NRPC_METHOD_CALLER,
	NRPC_METHOD_CODEC,
	NRPC_METHOD_REF,
	type HttpRouteManifest,
	type RpcMethodCodec,
	type RpcMethodRef,
	type RpcMethodCodecFromRef,
	type RpcMethodCallerFromCallable,
	type RpcMethodRefFromCallable,
	attachRpcMethodMetadata,
	defineRpcMethodRef,
	mountRpcNamespace,
	withRpcMethodCodec,
} from "@nogg-aholic/nrpc";
import {
	createGeneratedRpcMethodCodec,
	type GeneratedCodecShape,
} from "@nogg-aholic/nrpc/generated-codec-runtime";
const createRpcCodecRegistry = (entries: ReadonlyArray<readonly [string, RpcMethodCodec<any[], any>]>) => { const registry = new Map<string, RpcMethodCodec<any[], any>>(entries); return (methodName: string) => registry.get(methodName); };

export interface AnalyzeTitleInput {
  value: string;
}

export interface AnalyzeTitleResult {
  title: string;
  sentence: string;
  kebab: string;
  wordCount: number;
}

export interface FormatNameInput {
  value: string;
}

export interface FormatNameResult {
  camel: string;
  pascal: string;
  snake: string;
  constant: string;
}

export type ApiPluginsSdkPluginTextAnalyzeTitleArgs = {
  value: string;
};
export type ApiPluginsSdkPluginTextAnalyzeTitleResult = AnalyzeTitleResult;
export type ApiPluginsSdkPluginTextFormatNameArgs = {
  value: string;
};
export type ApiPluginsSdkPluginTextFormatNameResult = FormatNameResult;
export type ApiPluginsSdkPluginTextFormatNameStringArgs = string;
export type ApiPluginsSdkPluginTextFormatNameStringResult = FormatNameResult;
export type TextAnalyzeTitleArgs = {
  value: string;
};
export type TextAnalyzeTitleResult = AnalyzeTitleResult;
export type TextFormatNameArgs = {
  value: string;
};
export type TextFormatNameResult = FormatNameResult;
export type TextFormatNameStringArgs = string;
export type TextFormatNameStringResult = FormatNameResult;

export const apiRpcDefinition = {
	"api": {
		"plugins": {
			"sdkPlugin": {
				"text": {
					"analyzeTitle": defineRpcMethodRef(async function api_plugins_sdkPlugin_text_analyzeTitle(input: ApiPluginsSdkPluginTextAnalyzeTitleArgs): Promise<ApiPluginsSdkPluginTextAnalyzeTitleResult> {
						const methodRef = api_plugins_sdkPlugin_text_analyzeTitle as RpcMethodRefFromCallable<typeof api_plugins_sdkPlugin_text_analyzeTitle>;
						const caller = methodRef[NRPC_METHOD_CALLER] as undefined | RpcMethodCallerFromCallable<typeof api_plugins_sdkPlugin_text_analyzeTitle>;
						if (!caller) {
							throw new Error("api.plugins.sdkPlugin.text.analyzeTitle cannot be invoked directly. Resolve it through your RPC caller.");
						}
						return caller(methodRef, ...([input] as Parameters<typeof api_plugins_sdkPlugin_text_analyzeTitle>));
					}),
					"formatName": defineRpcMethodRef(async function api_plugins_sdkPlugin_text_formatName(input: ApiPluginsSdkPluginTextFormatNameArgs): Promise<ApiPluginsSdkPluginTextFormatNameResult> {
						const methodRef = api_plugins_sdkPlugin_text_formatName as RpcMethodRefFromCallable<typeof api_plugins_sdkPlugin_text_formatName>;
						const caller = methodRef[NRPC_METHOD_CALLER] as undefined | RpcMethodCallerFromCallable<typeof api_plugins_sdkPlugin_text_formatName>;
						if (!caller) {
							throw new Error("api.plugins.sdkPlugin.text.formatName cannot be invoked directly. Resolve it through your RPC caller.");
						}
						return caller(methodRef, ...([input] as Parameters<typeof api_plugins_sdkPlugin_text_formatName>));
					}),
					"formatName_string": defineRpcMethodRef(async function api_plugins_sdkPlugin_text_formatName_string(input: ApiPluginsSdkPluginTextFormatNameStringArgs): Promise<ApiPluginsSdkPluginTextFormatNameStringResult> {
						const methodRef = api_plugins_sdkPlugin_text_formatName_string as RpcMethodRefFromCallable<typeof api_plugins_sdkPlugin_text_formatName_string>;
						const caller = methodRef[NRPC_METHOD_CALLER] as undefined | RpcMethodCallerFromCallable<typeof api_plugins_sdkPlugin_text_formatName_string>;
						if (!caller) {
							throw new Error("api.plugins.sdkPlugin.text.formatName_string cannot be invoked directly. Resolve it through your RPC caller.");
						}
						return caller(methodRef, ...([input] as Parameters<typeof api_plugins_sdkPlugin_text_formatName_string>));
					}),
				},
			},
		},
	},
	"text": {
		"analyzeTitle": defineRpcMethodRef(async function text_analyzeTitle(input: TextAnalyzeTitleArgs): Promise<TextAnalyzeTitleResult> {
			const methodRef = text_analyzeTitle as RpcMethodRefFromCallable<typeof text_analyzeTitle>;
			const caller = methodRef[NRPC_METHOD_CALLER] as undefined | RpcMethodCallerFromCallable<typeof text_analyzeTitle>;
			if (!caller) {
				throw new Error("text.analyzeTitle cannot be invoked directly. Resolve it through your RPC caller.");
			}
			return caller(methodRef, ...([input] as Parameters<typeof text_analyzeTitle>));
		}),
		"formatName": defineRpcMethodRef(async function text_formatName(input: TextFormatNameArgs): Promise<TextFormatNameResult> {
			const methodRef = text_formatName as RpcMethodRefFromCallable<typeof text_formatName>;
			const caller = methodRef[NRPC_METHOD_CALLER] as undefined | RpcMethodCallerFromCallable<typeof text_formatName>;
			if (!caller) {
				throw new Error("text.formatName cannot be invoked directly. Resolve it through your RPC caller.");
			}
			return caller(methodRef, ...([input] as Parameters<typeof text_formatName>));
		}),
		"formatName_string": defineRpcMethodRef(async function text_formatName_string(input: TextFormatNameStringArgs): Promise<TextFormatNameStringResult> {
			const methodRef = text_formatName_string as RpcMethodRefFromCallable<typeof text_formatName_string>;
			const caller = methodRef[NRPC_METHOD_CALLER] as undefined | RpcMethodCallerFromCallable<typeof text_formatName_string>;
			if (!caller) {
				throw new Error("text.formatName_string cannot be invoked directly. Resolve it through your RPC caller.");
			}
			return caller(methodRef, ...([input] as Parameters<typeof text_formatName_string>));
		}),
	},
};

export const apiCodecShapeEntries: ReadonlyArray<readonly [string, { args: GeneratedCodecShape; result: GeneratedCodecShape }]> = [
	["api.plugins.sdkPlugin.text.analyzeTitle", { args: {"kind":"tuple","elements":[{"kind":"object","properties":[{"name":"value","shape":{"kind":"primitive","primitive":"string"},"description":"Source text to analyze and normalize."}]}]}, result: {"kind":"object","properties":[{"name":"title","shape":{"kind":"primitive","primitive":"string"},"description":"Human title case form."},{"name":"sentence","shape":{"kind":"primitive","primitive":"string"},"description":"Sentence case form."},{"name":"kebab","shape":{"kind":"primitive","primitive":"string"},"description":"URL-friendly kebab-case form."},{"name":"wordCount","shape":{"kind":"primitive","primitive":"number","numericKind":"u32"},"description":"Count of whitespace-separated terms."}]} }] as const,
	["api.plugins.sdkPlugin.text.formatName", { args: {"kind":"tuple","elements":[{"kind":"object","properties":[{"name":"value","shape":{"kind":"primitive","primitive":"string"},"description":"Source text to transform."}]}]}, result: {"kind":"object","properties":[{"name":"camel","shape":{"kind":"primitive","primitive":"string"},"description":"Lower camelCase form."},{"name":"pascal","shape":{"kind":"primitive","primitive":"string"},"description":"Upper PascalCase form."},{"name":"snake","shape":{"kind":"primitive","primitive":"string"},"description":"lower_snake_case form."},{"name":"constant","shape":{"kind":"primitive","primitive":"string"},"description":"UPPER_CONSTANT_CASE form."}]} }] as const,
	["api.plugins.sdkPlugin.text.formatName_string", { args: {"kind":"tuple","elements":[{"kind":"primitive","primitive":"string"}]}, result: {"kind":"object","properties":[{"name":"camel","shape":{"kind":"primitive","primitive":"string"},"description":"Lower camelCase form."},{"name":"pascal","shape":{"kind":"primitive","primitive":"string"},"description":"Upper PascalCase form."},{"name":"snake","shape":{"kind":"primitive","primitive":"string"},"description":"lower_snake_case form."},{"name":"constant","shape":{"kind":"primitive","primitive":"string"},"description":"UPPER_CONSTANT_CASE form."}]} }] as const,
	["text.analyzeTitle", { args: {"kind":"tuple","elements":[{"kind":"object","properties":[{"name":"value","shape":{"kind":"primitive","primitive":"string"},"description":"Source text to analyze and normalize."}]}]}, result: {"kind":"object","properties":[{"name":"title","shape":{"kind":"primitive","primitive":"string"},"description":"Human title case form."},{"name":"sentence","shape":{"kind":"primitive","primitive":"string"},"description":"Sentence case form."},{"name":"kebab","shape":{"kind":"primitive","primitive":"string"},"description":"URL-friendly kebab-case form."},{"name":"wordCount","shape":{"kind":"primitive","primitive":"number","numericKind":"u32"},"description":"Count of whitespace-separated terms."}]} }] as const,
	["text.formatName", { args: {"kind":"tuple","elements":[{"kind":"object","properties":[{"name":"value","shape":{"kind":"primitive","primitive":"string"},"description":"Source text to transform."}]}]}, result: {"kind":"object","properties":[{"name":"camel","shape":{"kind":"primitive","primitive":"string"},"description":"Lower camelCase form."},{"name":"pascal","shape":{"kind":"primitive","primitive":"string"},"description":"Upper PascalCase form."},{"name":"snake","shape":{"kind":"primitive","primitive":"string"},"description":"lower_snake_case form."},{"name":"constant","shape":{"kind":"primitive","primitive":"string"},"description":"UPPER_CONSTANT_CASE form."}]} }] as const,
	["text.formatName_string", { args: {"kind":"tuple","elements":[{"kind":"primitive","primitive":"string"}]}, result: {"kind":"object","properties":[{"name":"camel","shape":{"kind":"primitive","primitive":"string"},"description":"Lower camelCase form."},{"name":"pascal","shape":{"kind":"primitive","primitive":"string"},"description":"Upper PascalCase form."},{"name":"snake","shape":{"kind":"primitive","primitive":"string"},"description":"lower_snake_case form."},{"name":"constant","shape":{"kind":"primitive","primitive":"string"},"description":"UPPER_CONSTANT_CASE form."}]} }] as const,
] as const;

export const apiCodecEntries = apiCodecShapeEntries.map(([methodName, shape]) => [methodName, createGeneratedRpcMethodCodec(shape.args, shape.result)] as const);

export const apiCodecRegistry = createRpcCodecRegistry(apiCodecEntries as ReadonlyArray<readonly [string, RpcMethodCodec<any[], any>]>);

const attachGeneratedRpcMethodMetadata = <TMethod extends RpcMethodRef<any[], any>>(target: TMethod, methodName: string): TMethod => {
	attachRpcMethodMetadata(target, methodName);
	withRpcMethodCodec(target, apiCodecRegistry(methodName) as RpcMethodCodecFromRef<TMethod>);
	return target;
};

const apiMethodMetadataEntries = [
	[apiRpcDefinition["api"]["plugins"]["sdkPlugin"]["text"]["analyzeTitle"], "api.plugins.sdkPlugin.text.analyzeTitle"] as const,
	[apiRpcDefinition["api"]["plugins"]["sdkPlugin"]["text"]["formatName"], "api.plugins.sdkPlugin.text.formatName"] as const,
	[apiRpcDefinition["api"]["plugins"]["sdkPlugin"]["text"]["formatName_string"], "api.plugins.sdkPlugin.text.formatName_string"] as const,
	[apiRpcDefinition["text"]["analyzeTitle"], "text.analyzeTitle"] as const,
	[apiRpcDefinition["text"]["formatName"], "text.formatName"] as const,
	[apiRpcDefinition["text"]["formatName_string"], "text.formatName_string"] as const,
] as const;

for (const [target, methodName] of apiMethodMetadataEntries) {
	attachGeneratedRpcMethodMetadata(target, methodName);
}

export const apiHttpRouteManifest: HttpRouteManifest = {
  "id": "api",
  "rootPath": [
    "api"
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
      "protocolMode": "both",
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ]
    },
    {
      "methodName": "text.formatName_string",
      "pathParts": [
        "api",
        "text",
        "formatName_string"
      ],
      "httpPath": "/api/text/formatName_string",
      "codecLookupKey": "text.formatName_string",
      "protocolMode": "both",
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ]
    },
    {
      "methodName": "text.analyzeTitle",
      "pathParts": [
        "api",
        "text",
        "analyzeTitle"
      ],
      "httpPath": "/api/text/analyzeTitle",
      "codecLookupKey": "text.analyzeTitle",
      "protocolMode": "both",
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ]
    },
    {
      "methodName": "api.plugins.sdkPlugin.text.formatName",
      "pathParts": [
        "api",
        "plugins",
        "sdkPlugin",
        "text",
        "formatName"
      ],
      "httpPath": "/api/plugins/sdkPlugin/text/formatName",
      "codecLookupKey": "api.plugins.sdkPlugin.text.formatName",
      "protocolMode": "both",
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ]
    },
    {
      "methodName": "api.plugins.sdkPlugin.text.formatName_string",
      "pathParts": [
        "api",
        "plugins",
        "sdkPlugin",
        "text",
        "formatName_string"
      ],
      "httpPath": "/api/plugins/sdkPlugin/text/formatName_string",
      "codecLookupKey": "api.plugins.sdkPlugin.text.formatName_string",
      "protocolMode": "both",
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ]
    },
    {
      "methodName": "api.plugins.sdkPlugin.text.analyzeTitle",
      "pathParts": [
        "api",
        "plugins",
        "sdkPlugin",
        "text",
        "analyzeTitle"
      ],
      "httpPath": "/api/plugins/sdkPlugin/text/analyzeTitle",
      "codecLookupKey": "api.plugins.sdkPlugin.text.analyzeTitle",
      "protocolMode": "both",
      "parameterNames": [
        "input"
      ],
      "parameterOptionalFlags": [
        false
      ],
      "parameterRestFlags": [
        false
      ]
    }
  ]
};

export function installApiNamespace<TTarget extends Record<string, unknown>, TSurface>(
	target: TTarget,
	surface: TSurface,
): TTarget {
	return mountRpcNamespace(target, apiHttpRouteManifest, surface);
}
