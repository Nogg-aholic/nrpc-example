# api.plugins.sdkPlugin

> **HTTP:** `POST /api/api/plugins/sdkPlugin` | **Type:** `async function api.plugins.sdkPlugin(): Promise<{ text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }>` | **Location:** [`../../src/host-service.ts:12`](../../src/host-service.ts:12)

## Signature

```typescript
async function api.plugins.sdkPlugin(): Promise<{ text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }>
```

## Returns

`{ text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }`

Return value

## Implementation

```typescript
sdkPlugin: LocalHostApi;
```

## Dependencies

### Internal

#### `LocalHostApi` (type)
> **Location:** [`../../src/host-service.ts:4`](../../src/host-service.ts:4)

```typescript
type LocalHostApi = ReturnType<typeof createChangeCaseService>;
```

#### `{ text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }` (type)

**Description:** Return type
