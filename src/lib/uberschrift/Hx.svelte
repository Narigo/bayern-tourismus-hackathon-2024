<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	const currentLevel = getContext<number>('uberschrift.level') || 1;
	let { children, ...headingProps } = $props<{ children: Snippet } & Record<string, unknown>>();
</script>

<svelte:element this={`h${currentLevel}`} {...headingProps}>{@render children()}</svelte:element>
