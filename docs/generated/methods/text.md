# text

> **HTTP:** `POST /api/text` | **Type:** `async function text(): Promise<{ formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }>` | **Location:** [`../../src/service.ts:73`](../../src/service.ts:73)

## Signature

```typescript
async function text(): Promise<{ formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }>
```

## Returns

`{ formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }`

Return value

## Implementation

```typescript
{
      formatName,
      formatName_string,
      analyzeTitle,
    }
```

## Dependencies

### Internal

#### `{ formatName: (input: FormatNameInput) => Promise<FormatNameResult>; formatName_string: (input: string) => Promise<FormatNameResult>; analyzeTitle: (input: AnalyzeTitleInput) => Promise<AnalyzeTitleResult>; }` (type)

**Description:** Return type
