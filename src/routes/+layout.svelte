<script lang="ts">
	import '@voxelified/voxeliface/styles.scss';
	import { t } from '$lib/localization';
	import TextLogo from '$lib/components/TextLogo.svelte';
	import { Header } from '@voxelified/voxeliface';
</script>

<div class="app theme-color">
	<Header>
		<a href="/"><TextLogo/></a>
		<a href="/posts" class="nav-link">{$t('posts')}</a>
	</Header>
	<main class="app-content">
		<slot/>
	</main>
	<footer>
		mdpkm mdpkm mdpkm mdpkm mdpkm mdpkm
	</footer>
</div>

<style lang="scss">
	.app {
		min-height: 100vh;
		background: var(--background-primary);
		--theme-hue: 130;
	}
	:global(body) {
		overflow: hidden auto;
	}

	:global(header) {
		display: flex;
	}
	.nav-link {
		color: var(--color-primary);
		margin: 14px 8px;
		text-decoration: none;
	}

	footer {
		color: var(--color-secondary);
		padding: 48px 24px;
		background: var(--background-header);
	}
</style>