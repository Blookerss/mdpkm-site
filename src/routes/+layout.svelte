<script lang="ts">
	import '@voxelified/voxeliface/styles.scss';
	import TextLogo from '../components/TextLogo.svelte';
	import { Header } from '@voxelified/voxeliface';
</script>

<div class="app theme-color">
	<Header>
		<TextLogo/>
	</Header>
	<main class="app-content">
		<slot/>
	</main>
</div>

<style lang="scss">
	.app {
		width: 100%;
		height: 100%;
		overflow: auto;
		background: var(--background-primary);
		--theme-hue: 130;
	}
	.app-content {
		display: flex;
		padding: 0 2rem;
		flex-direction: column;
	}
</style>