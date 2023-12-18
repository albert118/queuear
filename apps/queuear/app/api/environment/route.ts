import { Environment } from '@queuear/models';

export async function GET(request: Request) {
  const environmentInfo = {
    name: 'Dev2',
    welcomeMessage: 'Welcome!',
  } as Environment;

  return new Response(JSON.stringify(environmentInfo));
}
