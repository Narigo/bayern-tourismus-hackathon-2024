<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	let {
		children,
		class: bgClass = '',
		id = undefined,
		padding = 'large',
		...rest
	} = $props<
		{
			class?: string;
			id?: string;
			children?: Snippet;
			padding?: 'large' | 'small' | 'none';
		} & HTMLAttributes<HTMLElement>
	>();

	const paddingClasses = padding === 'large' ? 'py-16 sm:py-24' : padding === 'small' ? 'py-8' : '';
</script>

<section {id} {...rest} class="full-width {paddingClasses} {bgClass}">
	{@render children()}
</section>

<style lang="postcss">
	.full-width {
		display: grid;
		grid-template-columns: inherit;
		grid-column: full-width;
	}
	.full-width > :global(*) {
		grid-column: content;
	}
</style>
