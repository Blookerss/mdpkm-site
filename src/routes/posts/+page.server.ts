import type { ModuleData } from '../feed.json/+server';
import type { PageServerLoad } from './$types';

export const prerender = true;
export const load = (() => {
	const modules: Record<string, ModuleData> = import.meta.glob('./**/*.md', { eager: true });
	return {
		posts: Object.entries(modules).map(([path, { metadata }]) => ({
			url: 'posts' + path.slice(1, -9),
			date: metadata.date,
			tags: metadata.tags.split('|'),
			title: metadata.title,
			authors: metadata.authors.split(', ')
		}))
	};
}) satisfies PageServerLoad;