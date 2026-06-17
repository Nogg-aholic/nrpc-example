# api.plugins.sdkPlugin.text.formatName_string

> **HTTP:** `POST /api/api/plugins/sdkPlugin/text/formatName_string` | **Type:** `async function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>` | **Location:** [`../../src/service.ts:75`](../../src/service.ts:75)

## Signature

```typescript
async function api.plugins.sdkPlugin.text.formatName_string(input: string): Promise<FormatNameResult>
```

## Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `input` | `string` | Yes | - |

## Returns

`FormatNameResult`

Return value

## Implementation

```typescript
async function formatName_string(input: string): Promise<FormatNameResult> {
  return {
    camel: camelCase(input),
    pascal: pascalCase(input),
    snake: snakeCase(input),
    constant: constantCase(input),
  };
}
```

## Dependencies

### Internal

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
