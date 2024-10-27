<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';
	import Footer from './Footer.svelte';
	import FullWidthSection from './FullWidthSection.svelte';
	import Logo from './Logo.svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<div class="relative min-h-full flex flex-col bg-gradient-to-b from-backgroundGreen from-50% to-50% to-gray-100">
	<header class="content-grid xs:sticky top-0 z-10">
		<FullWidthSection
			padding="small"
			class="bg-backgroundGreen text-white pt-4 pb-4 sm:pt-4 sm:pb-4 grid place-items-center"
		>
			<div class="flex flex-row items-center gap-4 place-content-between w-full">
				<a class="hover:underline" href="{base}/"> <Logo /></a>
				<nav>
					<ul class="flex flex-row flex-wrap gap-2 sm:gap-4">
						<li><a class="hover:underline" href="{base}/">Home</a></li>
						<li><a class="hover:underline" href="{base}/easy-walks">Easy Walks</a></li>
						<li><a class="hover:underline" href="{base}/franzi-und-leni">Franzi und Leni</a></li>
					</ul>
				</nav>
			</div>
		</FullWidthSection>
	</header>
	<main class="content-grid flex-grow auto-rows-fr bg-white">
		{@render children()}
	</main>
	<footer class="content-grid">
		<Footer />
	</footer>
</div>

<style lang="postcss">
	.content-grid {
		--page-padding: 1rem;
		--max-page-size: 72ch;

		display: grid;
		grid-template-columns:
			[full-width-start]
			minmax(var(--page-padding), 1fr)
			[breakout-start]
			minmax(0, calc(var(--page-padding) * 4))
			[content-start]
			min(100% - (var(--page-padding) * 2), var(--max-page-size))
			[content-end]
			minmax(0, calc(var(--page-padding) * 4))
			[breakout-end]
			minmax(var(--page-padding), 1fr)
			[full-width-end];
	}
</style>
