import { json } from '@sveltejs/kit';
export const prerender = true;
export const GET = async() => {
	const modules: Record<string, ModuleData> = import.meta.glob('../posts/**/*.md', { eager: true });
	return json({
		title: 'mdpkm',
		language: 'en',
		items: [Object.entries(modules).map(([path, { metadata }]) => ({
			title: metadata.title,
			url: path.slice(2, -9),
			tags: metadata.tags.split(','),
			thumbnail_url: '',
			data_published: metadata.date
		}))]
	});
}
interface ModuleData {
	default: any
	metadata: {
		tags: string
		date: string
		title: string
		authors: string
	}
}