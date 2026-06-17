# api.plugins

> **HTTP:** `POST /api/api/plugins` | **Type:** `async function api.plugins(): Promise<{ sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }>` | **Location:** [`../../src/host-service.ts:11`](../../src/host-service.ts:11)

## Signature

```typescript
async function api.plugins(): Promise<{ sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }>
```

## Returns

`{ sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }`

Return value

## Implementation

```typescript
plugins: {
      sdkPlugin: LocalHostApi;
    };
```

## Dependencies

### Internal

#### `LocalHostApi` (type)
> **Location:** [`../../src/host-service.ts:4`](../../src/host-service.ts:4)

```typescript
type LocalHostApi = ReturnType<typeof createChangeCaseService>;
```

#### `{ sdkPlugin: { text: { formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }; }; }` (type)

**Description:** Return type
