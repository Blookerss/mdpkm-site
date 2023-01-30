<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="posts">
	{#each data.posts as post}
		<a class="post" href={post.url}>
			{post.title}
			<p class="date">
				{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric', month: 'long' })}
			</p>
			{#each post.tags as tag}
				<p class="tag">{tag}</p>
			{/each}
		</a>
	{/each}
</div>
this page is incomplete

<style>
	.posts {
		margin: 32px;
	}
	.post {
		color: var(--color-primary);
		margin: 24px 0;
		display: flex;
		padding: 12px 16px 16px;
		font-size: 1.4em;
		background: var(--button-background);
		font-weight: 600;
		text-decoration: none;
	}
	.post .date {
		margin: 10px 16px 0;
		font-size: .6em;
		font-weight: 400;
	}
	.post .tag {
		margin: 4px 0 0;
		height: fit-content;
		border: 1px solid #ffffff40;
		padding: 4px 4px;
		font-size: .5em;
		font-weight: 400;
		border-radius: 4px;
		text-transform: uppercase;
	}
</style>