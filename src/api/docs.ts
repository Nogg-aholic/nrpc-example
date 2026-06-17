// AUTO-GENERATED FILE. DO NOT EDIT.
import { generatedDocsRuntime } from '../generated/change-case-api.surface.docs.js';

export default async function handler(req: Request) {
  const docsResponse = generatedDocsRuntime.resolve(req);
  if (docsResponse) {
    return docsResponse.kind === 'json'
      ? Response.json(docsResponse.body, { status: docsResponse.status })
      : new Response(String(docsResponse.body), {
          status: docsResponse.status,
          headers: { 'content-type': 'text/html; charset=utf-8' },
        });
  }
  return Response.json({ error: { message: 'Not found' } }, { status: 404 });
};
