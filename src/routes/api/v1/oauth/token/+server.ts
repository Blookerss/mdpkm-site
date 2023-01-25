import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { AZURE_CLIENT_ID, AZURE_CLIENT_SECRET } from '$env/static/private';
export const POST = (async ({ request }) => {
	const { code, refreshToken } = await request.json() as RequestBody;
	if (!code && !refreshToken)
		throw error(400);
	
	return fetch('https://login.microsoftonline.com/consumers/oauth2/v2.0/token', {
		body: new URLSearchParams({
			code,
			client_id: AZURE_CLIENT_ID,
			grant_type: refreshToken ? 'refresh_token' : 'authorization_code',
			redirect_uri: 'http://localhost:3432',
			refresh_token: refreshToken,
			client_secret: AZURE_CLIENT_SECRET
		} as any),
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(r => r.json().then(json));
}) satisfies RequestHandler;

interface RequestBody {
	code?: string
	refreshToken?: string
}