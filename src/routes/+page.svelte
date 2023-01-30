<script lang="ts">
	import { t } from '$lib/localization';
	import type { PageData } from './$types';

	export let data: PageData;
	const { release: { version, platform, download_url } } = data;
</script>

<div class="landing">
	<h1 class="header">mdpkm</h1>
	<p class="summary">no information 👍</p>
	<a class="download" href={download_url} class:no-platform="{!platform}">
		{$t(version ? 'home.download.version' : 'home.download', [version])}
		{#if platform}
			<p>{$t('home.download.platform', [platform])}</p>
		{/if}
	</a>
</div>

<div class="features">
	<h1>{$t('home.features')}</h1>
	featureless
</div>

can't believe that there's nothing here

<style lang="scss">
	.landing {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.header {
		margin: 64px 0 0;
		font-size: 3em;
	}
	.summary {
		margin: 16px 0 32px;
		font-size: 1.2em;
	}

	.download {
		color: #fff;
		width: 256px;
		padding: 12px 24px;
		font-size: 1.2em;
		text-align: center;
		box-shadow: 0 8px 16px 0 #0000001a;
		background: var(--button-background);
		font-weight: 600;
		user-select: none;
		font-family: var(--font-tertiary);
		border-radius: 8px;
		text-decoration: none;
		&:hover {
			background: var(--button-background-hover);
		}
	}
	.download.no-platform {
		padding: 16px 24px;
		font-size: 1.4em;
	}
	.download p {
		margin: 2px 0 0;
		font-size: 14px;
		font-weight: 300;
		font-family: var(--font-secondary);
	}

	.features {
		height: 16rem;
		margin: 40vh 0;
		padding: 24px 32px;
		background: var(--background-header);
	}
	.features h1 {
		margin: 0 0 8px;
		font-size: 2.5em;
		font-weight: 800;
	}
</style>