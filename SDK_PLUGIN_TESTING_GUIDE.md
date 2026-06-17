# SDK Plugin Test Guide

This guide verifies the embedded SDK flow.

> **NOTE:** In a real-world setup, the SDK plugin would be a completely separate package/codebase that is imported and installed. For the sake of a self-contained example, we generate the SDK plugin contract from our own local service and install it recursively under `/api/plugins/sdkPlugin/...`.

## What This Example Now Contains

- plugin service in `nrpc-example/src/service.ts` (reused as the plugin)
- plugin SDK generation into `nrpc-example/src/generated/sdk-plugin.contract.ts`
- host composition in `nrpc-example/src/host-service.ts`
- final host artifact generation in `nrpc-example/src/generated/change-case-api.contract.ts`

The plugin is mounted under the namespace `/api/plugins/sdkPlugin/...`.

## Expected Behavior

- local host route remains available at `/api/text/formatName`
- embedded plugin route is available at `/api/plugins/sdkPlugin/text/formatName`
- RPC calls work for both local and embedded plugin methods
- synthetic JSON calls work for both local and embedded plugin methods
- synthetic binary calls work for both local and embedded plugin methods

## Files To Inspect

- `nrpc-example/src/service.ts`
- `nrpc-example/src/generated/sdk-plugin.contract.ts`
- `nrpc-example/src/host-service.ts`
- `nrpc-example/src/generated/change-case-api.contract.ts`
- `nrpc-example/src/server.ts`
- `nrpc-example/src/client/call-manifest.ts`
- `nrpc-example/src/client/call-noManifest.ts`

## Step 1: Generate Host & Plugin Artifacts

From `E:\nRPC_stack\nrpc-example` run:

```powershell
bun run generate
```

Expected result:

- `src/generated/sdk-plugin.contract.ts` exists
- `src/generated/change-case-api.contract.ts` exists
- no generation error is thrown

## Step 2: Confirm SDK Contract Output

Open `nrpc-example/src/generated/sdk-plugin.contract.ts` and confirm it contains:

- `sdkPluginApiRpcDefinition`
- `sdkPluginApiCodecRegistry`
- `sdkPluginApiHttpRouteManifest`
- `installSdkPluginApiNamespace`

Confirm the manifest root path is:

```ts
rootPath: ['api', 'plugins', 'sdkPlugin']
```

## Step 3: Confirm Host Composition

Open `nrpc-example/src/host-service.ts` and confirm:

- the local service is created first
- the generated installer is imported from `../../nrpc-example-sdk-plugin/src/generated/sdk-plugin.contract.js`
- the plugin service is imported from `../../nrpc-example-sdk-plugin/src/service.js`
- the plugin service is mounted with `installSdkPluginApiNamespace(...)`

## Step 5: Confirm Final Host Contract

Open `nrpc-example/src/generated/change-case-api.contract.ts` and verify it includes both:

- local routes like `text.formatName`
- plugin routes like `api.plugins.sdkPlugin.text.formatName`

Verify synthetic HTTP paths include both:

- `/api/text/formatName`
- `/api/plugins/sdkPlugin/text/formatName`

## Step 6: Start The Example Server

From `E:\nRPC_stack\nrpc-example` run:

```powershell
bun run dev
```

Expected startup output should mention:

- `/rpc`
- `/api/text/formatName`
- `/api/plugins/sdkPlugin/text/formatName`
- `/docs`
- `/mcp`

## Step 7: Run Typed Manifest Client Test

In a second terminal from `E:\nRPC_stack\nrpc-example` run:

```powershell
bun run call:manifest
```

Expected JSON output includes both local and plugin results:

- `rpcResult`
- `jsonSurfaceResult`
- `binarySurfaceResult`
- `pluginRpcResult`
- `pluginJsonSurfaceResult`
- `pluginBinarySurfaceResult`

The plugin result values should be visibly different from the local service values.

Example distinction:

- local `camel`: `manifestCallerExample`
- plugin `camel`: `plugin-manifestCallerExample`

## Step 8: Run Plain Fetch Test

In another terminal from `E:\nRPC_stack\nrpc-example` run:

```powershell
bun run call:no-manifest
```

Expected JSON output includes:

- `plainJsonFetchResult`
- `pluginJsonFetchResult`

This proves the embedded plugin is reachable through the host HTTP surface without manifest-aware client code.

## Step 9: Manual Smoke URLs

With the server running, verify:

- `http://127.0.0.1:4010/health`
- `http://127.0.0.1:4010/docs`
- `http://127.0.0.1:4010/docs/openapi.json`

Then manually POST JSON to:

- `http://127.0.0.1:4010/api/text/formatName`
- `http://127.0.0.1:4010/api/plugins/sdkPlugin/text/formatName`

Body:

```json
{ "value": "manifest caller example" }
```

## Step 10: Negative Test Suggestions

Try these if you want failure validation:

- change the plugin `rootPath` to `['api']` and confirm generation or routing now conflicts conceptually
- mount the plugin twice and confirm namespace collision protection throws
- change `host-service.ts` to assign a non-object to `hostService.api` before mounting and confirm mounting throws

## Hand-Off Notes

This repository now uses the same structure you should use for the real handoff:

- keep the plugin package separate from the host package
- generate the plugin package in `mode: 'sdk'`
- import the generated installer helper into the host package
- mount the real plugin implementation into the host service object
- generate the final host contract from the composed host root
- verify both host-local and plugin-mounted routes through the host server only

