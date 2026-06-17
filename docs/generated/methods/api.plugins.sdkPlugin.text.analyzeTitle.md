# api.plugins.sdkPlugin.text.analyzeTitle

> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/analyzeTitle` | **Type:** `async function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>` | **Location:** [`../../src/service.ts:76`](../../src/service.ts:76)

## Signature

```typescript
async function api.plugins.sdkPlugin.text.analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult>
```

## Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `input` | `AnalyzeTitleInput` | Yes | - |

## Returns

`AnalyzeTitleResult`

Return value

## Implementation

```typescript
async function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {
  console.log("hi")
  return {
    title: capitalCase(input.value),
    sentence: sentenceCase(input.value),
    kebab: kebabCase(input.value),
    wordCount: input.value.trim().split(/\s+/).filter(Boolean).length,
  };
}
```

## Dependencies

### Internal

#### `AnalyzeTitleInput` (interface)
> **Location:** [`../../src/service.ts:16`](../../src/service.ts:16)

```typescript
interface AnalyzeTitleInput {
  /** Source text to analyze and normalize. */
  value: string;
}
```

#### `AnalyzeTitleResult` (interface)
> **Location:** [`../../src/service.ts:32`](../../src/service.ts:32)

```typescript
interface AnalyzeTitleResult {
  /** Human title case form. */
  title: string;
  /** Sentence case form. */
  sentence: string;
  /** URL-friendly kebab-case form. */
  kebab: string;
  /** Count of whitespace-separated terms. */
  wordCount: number;
}
```

#### `capitalCase` (import)
> **Location:** [`../../src/service.ts:3`](../../src/service.ts:3)

```typescript
capitalCase
```

#### `sentenceCase` (import)
> **Location:** [`../../src/service.ts:7`](../../src/service.ts:7)

```typescript
sentenceCase
```

#### `kebabCase` (import)
> **Location:** [`../../src/service.ts:5`](../../src/service.ts:5)

```typescript
kebabCase
```

#### `AnalyzeTitleResult` (type)

**Description:** Return type
