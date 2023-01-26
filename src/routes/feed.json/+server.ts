import { json } from '@sveltejs/kit';
export const prerender = true;
export const GET = async() => {
	const modules: Record<string, ModuleData> = import.meta.glob('../posts/**/*.md', { eager: true });
	const raw = import.meta.glob('../posts/**/*.md', { as: 'raw', eager: true });
	return json({
		title: 'mdpkm',
		language: 'en',
		items: Object.entries(modules).map(([path, { metadata }]) => ({
			title: metadata.title,
			url: path.slice(2, -9),
			tags: metadata.tags.split('|'),
			authors: metadata.authors.split(', '),
			thumbnail_url: metadata.thumbnail,
			data_published: metadata.date,
			body: raw[path]
		}))
	});
}
interface ModuleData {
	default: any
	metadata: {
		tags: string
		date: string
		title: string
		authors: string
		thumbnail: string
	}
}