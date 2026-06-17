# text.formatName

> **HTTP:** `POST /api/text/formatName` | **Type:** `async function text.formatName(input: FormatNameInput): Promise<FormatNameResult>` | **Location:** [`../../src/service.ts:74`](../../src/service.ts:74)

## Signature

```typescript
async function text.formatName(input: FormatNameInput): Promise<FormatNameResult>
```

## Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `input` | `FormatNameInput` | Yes | - |

## Returns

`FormatNameResult`

Return value

## Implementation

```typescript
async function formatName(input: FormatNameInput): Promise<FormatNameResult> {
  return {
    camel: camelCase(input.value),
    pascal: pascalCase(input.value),
    snake: snakeCase(input.value),
    constant: constantCase(input.value),
  };
}
```

## Dependencies

### Internal

#### `FormatNameInput` (interface)
> **Location:** [`../../src/service.ts:11`](../../src/service.ts:11)

```typescript
interface FormatNameInput {
  /** Source text to transform. */
  value: string;
}
```

#### `FormatNameResult` (interface)
> **Location:** [`../../src/service.ts:21`](../../src/service.ts:21)

```typescript
interface FormatNameResult {
  /** Lower camelCase form. */
  camel: string;
  /** Upper PascalCase form. */
  pascal: string;
  /** lower_snake_case form. */
  snake: string;
  /** UPPER_CONSTANT_CASE form. */
  constant: string;
}
```

#### `camelCase` (import)
> **Location:** [`../../src/service.ts:2`](../../src/service.ts:2)

```typescript
camelCase
```

#### `pascalCase` (import)
> **Location:** [`../../src/service.ts:6`](../../src/service.ts:6)

```typescript
pascalCase
```

#### `snakeCase` (import)
> **Location:** [`../../src/service.ts:8`](../../src/service.ts:8)

```typescript
snakeCase
```

#### `constantCase` (import)
> **Location:** [`../../src/service.ts:4`](../../src/service.ts:4)

```typescript
constantCase
```

#### `FormatNameResult` (type)

**Description:** Return type
