# api

> **HTTP:** `POST /api/api` | **Type:** `async function api(): Promise<{ plugins: { sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }; }>` | **Location:** [`../../src/host-service.ts:10`](../../src/host-service.ts:10)

## Signature

```typescript
async function api(): Promise<{ plugins: { sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }; }>
```

## Returns

`{ plugins: { sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }; }`

Return value

## Implementation

```typescript
api: {
    plugins: {
      sdkPlugin: LocalHostApi;
    };
  };
```

## Dependencies

### Internal

#### `LocalHostApi` (type)
> **Location:** [`../../src/host-service.ts:4`](../../src/host-service.ts:4)

```typescript
type LocalHostApi = ReturnType<typeof createChangeCaseService>;
```

#### `{ plugins: { sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }; }` (type)

**Description:** Return type
