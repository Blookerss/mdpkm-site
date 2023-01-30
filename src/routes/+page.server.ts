import type { PageServerLoad } from './$types';
export const load = (async ({ request, setHeaders }) => {
	const userAgent = request.headers.get('user-agent')?.toLowerCase();
	if (!userAgent)
		return { release: {} };

	const response = await fetch('https://api.voxelified.com/v1/app/mdpkm/release/latest');
	const release: AppRelease = await response.json();
	const platform = Object.keys(release.platforms).find(p => userAgent.includes(p.split('-')[0]));
	if (!platform)
		return {
			release: {
				version: release.version,
				download_url: release.url
			}
		};
	
	setHeaders({
		age: response.headers.get('age')!,
    	'cache-control': response.headers.get('cache-control')!
	});
	return {
		release: {
			version: release.version,
			platform,
			download_url: release.platforms[platform].url
		}
	}
}) satisfies PageServerLoad

export interface AppRelease {
	url: string
	body: string
	title: string
	version: string
	platforms: Record<string, {
		url: string
		signature: string
	}>
	date_published: string
}