# nRPC Example

This example shows the intended split between:

- `@nogg-aholic/nrpc-cli` as a development-time generator dependency
- `@nogg-aholic/nrpc` as the runtime dependency used by the server and typed clients

The generated artifacts live in `src/generated/`.
The generation entrypoint lives in `scripts/generate.ts`.

## What This Example Shows

- generated nRPC contract artifacts
- generated codec registry
- generated synthetic route manifest
- generated self-contained docs runtime artifact
- generated MCP tools artifact
- normal nRPC RPC calls through `/rpc`
- synthetic JSON route calls through `/api/...`
- synthetic binary route calls through `/api/... .nrpc`
- external plain fetch calls that do not depend on generated manifests

## Scripts

```bash
bun install
bun run generate
bun run dev
bun run call:manifest
bun run call:no-manifest
```

## Runtime Endpoints

When the server is running locally:

- `http://127.0.0.1:4010/rpc`
- `http://127.0.0.1:4010/api/text/formatName`
- `http://127.0.0.1:4010/api/text/formatName.nrpc`
- `http://127.0.0.1:4010/docs`
- `http://127.0.0.1:4010/docs/openapi.json`
- `http://127.0.0.1:4010/api/text/formatName/_docs`
- `http://127.0.0.1:4010/mcp`

## Client Variants

`src/client/call-manifest.ts` demonstrates runtime-aware typed callers using generated artifacts:

- RPC calls through `/rpc`
- synthetic JSON calls
- synthetic binary calls
- per-call header overrides

`src/client/call-noManifest.ts` demonstrates plain external-client usage:

- no generated manifest dependency
- no `@nogg-aholic/nrpc` runtime dependency
- plain `fetch` against the synthetic JSON endpoint

## Generation Note

This example intentionally keeps generation code under `scripts/` because `@nogg-aholic/nrpc-cli` is a dev dependency only.
The runtime `src/` tree stays focused on the service, server, clients, and generated output.
