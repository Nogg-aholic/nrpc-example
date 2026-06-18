import path from "node:path";
import { fileURLToPath } from "node:url";

import { generateDocsArtifacts, renderGeneratedDocsArtifactsModule } from "../../nrpc-cli/src/docs.js";
import { generateEndpointSurface } from "../../nrpc-cli/src/endpoint-surface-generator.js";
import { generatePackageTargetArtifacts } from "../../nrpc-cli/src/package-target-generator.js";
import { generateOpenApiSurface, requireOpenApiSurfaceOutput } from "../../nrpc-cli/src/openapi-surface-generator.js";
import { generateVercelArtifacts } from "../../nrpc-cli/src/index.js";
import { writeMdDocsToDisk } from "../../nrpc-cli/src/md-docs-generator.js";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const projectSrcDir = path.join(currentDir, "..", "src");
const generatedDir = path.join(projectSrcDir, "generated");
const apiDir = path.join(projectSrcDir, "api");
const sdkEntryFile = path.join(projectSrcDir, "service.ts");
const entryFile = path.join(projectSrcDir, "host-service.ts");
const outFile = path.join(generatedDir, "change-case-api.surface.ts");
const contractOutFile = outFile.replace(/\.surface\.ts$/, ".contract.ts");
const docsOutFile = outFile.replace(/\.surface\.ts$/, ".surface.docs.ts");
const openApiSurfaceMcpOutFile = path.join(generatedDir, "change-case-api.openapi-surface.mcp-tools.ts");

await generatePackageTargetArtifacts({
  name: "sdk-plugin",
  mode: "sdk",
  entryFile: sdkEntryFile,
  rootType: "ChangeCaseApi",
  title: "SDK Plugin API",
  globalName: "sdkPluginApi",
  rootPath: ["api", "plugins", "sdkPlugin"],
  rootTypeName: "ChangeCaseApi",
  outDir: generatedDir,
  moduleSpecifier: "@nogg-aholic/nrpc",
  runtimeImportPath: "@nogg-aholic/nrpc/generated-codec-runtime",
});

const surface = generateEndpointSurface({
  entryFile,
  rootType: "HostApi",
  outputImportPath: outFile,
  moduleSpecifier: "@nogg-aholic/nrpc",
  runtimeImportPath: "@nogg-aholic/nrpc/generated-codec-runtime",
  rootPath: ["api"],
  globalName: "api",
});

const docsArtifacts = generateDocsArtifacts({
  entryFile,
  rootType: "HostApi",
  basePath: "/",
  rootPath: ["api"],
  title: "Change Case API",
  version: "0.1.0",
});

await Bun.write(contractOutFile, surface.contractText);
await Bun.write(docsOutFile, renderGeneratedDocsArtifactsModule(docsArtifacts));

const openApiSurface = generateOpenApiSurface({
  openApiDocument: docsArtifacts.json,
  outputImportPath: openApiSurfaceMcpOutFile,
  rootTypeName: "ChangeCaseOpenApiSurface",
  globalName: "openApi",
  outputs: {
    mcp: true,
  },
});

await Bun.write(openApiSurfaceMcpOutFile, requireOpenApiSurfaceOutput(openApiSurface.mcpToolsText, "mcp"));

/*
TEMP , WILL BE CHANGED!!
 
await generateVercelArtifacts({
  entryFile,
  outDir: apiDir,
  rootType: "HostApi",
  globalName: "api",
  rootPath: ["api"],
  contractFile: contractOutFile,
  docsFile: docsOutFile,
  openApiSurface: { mcpToolsText: openApiSurface.mcpToolsText },
});

*/

writeMdDocsToDisk({
  entryFile,
  rootType: "HostApi",
  outputDir: path.join(currentDir, "..", "docs", "generated"),
  includeImplementation: true,
  includeExternalDeps: false,
});

console.log("Generated nRPC artifacts at", generatedDir);
console.log("Generated Vercel API files at", apiDir);
