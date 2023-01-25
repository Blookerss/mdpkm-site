<script>
	export let date;
	export let title;
	export let authors;
</script>
	
<article>
	<h1>{title}</h1>
	<div class="metadata">
		<p class="authors">by {authors}</p>
		<p class="date">
			{new Date(date).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric', month: 'long' })}
		</p>
	</div>
	<slot/>
</article>

<svelte:head>
	<title>{title}</title>
	<meta content={title} property="og:title"/>
</svelte:head>

<style>
	h1 {
		margin-bottom: 4px;
	}
	article {
		padding: 1rem 6rem;
	}

	article :global(img) {
		border-radius: 8px;
	}
	article :global(p:not(:first-child)) {
		margin-bottom: 1em;
	}
	article :global(h1:not(:first-child)) {
		margin-top: 32px;
	}

	.metadata {
		margin-bottom: 24px;
	}
	.metadata p {
		margin: 0;
	}
	.metadata .authors {
		font-size: 1.25rem;
		font-weight: 700;
	}
	.metadata .date {
		color: var(--color-secondary);
		font-size: 1rem;
		margin-top: 8px;
		font-weight: 600;
	}
</style>