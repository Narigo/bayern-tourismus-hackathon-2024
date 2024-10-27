<script lang="ts">
	import { getContext, setContext } from 'svelte';
	const currentLevel = getContext<number>('uberschrift.level') || 1;
	setContext('uberschrift.level', currentLevel + 1);
</script>

<slot />
