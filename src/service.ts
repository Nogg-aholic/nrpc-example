import {
  camelCase,
  capitalCase,
  constantCase,
  kebabCase,
  pascalCase,
  sentenceCase,
  snakeCase,
} from 'change-case';

interface FormatNameInput {
  /** Source text to transform. */
  value: string;
}

interface AnalyzeTitleInput {
  /** Source text to analyze and normalize. */
  value: string;
}

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

async function formatName(input: FormatNameInput): Promise<FormatNameResult> {
  return {
    camel: camelCase(input.value),
    pascal: pascalCase(input.value),
    snake: snakeCase(input.value),
    constant: constantCase(input.value),
  };
}

async function formatName_string(input: string): Promise<FormatNameResult> {
  return {
    camel: camelCase(input),
    pascal: pascalCase(input),
    snake: snakeCase(input),
    constant: constantCase(input),
  };
}

async function analyzeTitle(input: AnalyzeTitleInput): Promise<AnalyzeTitleResult> {
  console.log("hi")
  return {
    title: capitalCase(input.value),
    sentence: sentenceCase(input.value),
    kebab: kebabCase(input.value),
    wordCount: input.value.trim().split(/\s+/).filter(Boolean).length,
  };
}

export function createChangeCaseService() {
  return {
    text: {
      formatName,
      formatName_string,
      analyzeTitle,
    },
  };
}
export type ChangeCaseApi = ReturnType<typeof createChangeCaseService>;
