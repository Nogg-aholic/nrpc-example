// AUTO-GENERATED FILE. DO NOT EDIT.
import { createRpcFetchRequestHandler } from '@nogg-aholic/nrpc/web-runtime';
import { createRpcMethodInvoker } from '@nogg-aholic/nrpc';
import { createHostService } from '../host-service.js';
import { apiCodecRegistry } from '../generated/change-case-api.contract.js';

const service = createHostService();
const invokeRpcMethod = createRpcMethodInvoker(service);

export default createRpcFetchRequestHandler({
  codecResolver: apiCodecRegistry,
  invokeMethod: invokeRpcMethod,
  awaitEventCode: 0x11,
  returnEventCode: 0x12,
});
