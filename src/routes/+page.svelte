<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/layout/FullWidthSection.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
</script>

<svelte:head>
	<title>Bayern Tourismus Hackathon 2024</title>
	<meta name="description" content="App ideas for Bayern Tourismus Hackathon 2024" />
</svelte:head>

<PageLayout>
	<FullWidthSection class="min-h-full bg-gradient-to-b from-backgroundGreen to-backgroundBeige">
		<ol class="grid gap-8">
			<li class="grid">
				<a class="p-4 border rounded bg-backgroundBeige shadow-lg grid place-items-center" href="{base}/easy-walks">Easy Walks</a>
			</li>
			<li class="grid">
				<a class="p-4 border rounded bg-backgroundBeige shadow-lg grid place-items-center" href="{base}/franzi-und-leni">Alpenabenteuer mit Franzi und Leni</a>
			</li>
		</ol>
	</FullWidthSection>
</PageLayout>
