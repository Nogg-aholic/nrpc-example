import { installSdkPluginApiNamespace } from './generated/sdk-plugin.contract.js';
import { createChangeCaseService } from './service.js';

type LocalHostApi = ReturnType<typeof createChangeCaseService>;

// NOTE: In a real-world application, the SDK plugin (sdkPlugin) would be an external package
// imported and installed here. For the sake of a self-contained example, we are generating
// the SDK plugin contract from our own local service and installing it recursively.
export type HostApi = LocalHostApi & {
  api: {
    plugins: {
      sdkPlugin: LocalHostApi;
    };
  };
};

export function createHostService() {
  const hostService = createChangeCaseService() as HostApi;
  installSdkPluginApiNamespace(hostService, createChangeCaseService());
  return hostService;
}