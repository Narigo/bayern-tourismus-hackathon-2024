<script lang="ts">
	import { env } from '$env/dynamic/public';
	import maplibregl from 'maplibre-gl';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { lat, lng } = data;

	let mapContainer: HTMLElement;

	onMount(() => {
		const map = new maplibregl.Map({
			container: mapContainer, // container id
			style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${env.PUBLIC_MAPTILER_API_KEY}`, // style URL
			center: [lng, lat], // starting position [lng, lat]
			zoom: 13 // starting zoom
		});
	});
</script>

<p>Looking at lat: {lat}, lng: {lng}</p>
<pre>{JSON.stringify(data.bcdata, null, 2)}</pre>

<section>
	<div bind:this={mapContainer} class="w-full h-full"></div>
</section>
