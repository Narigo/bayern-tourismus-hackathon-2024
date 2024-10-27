<script lang="ts">
	import maplibregl from 'maplibre-gl';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { env } from '$env/dynamic/public';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import FullWidthSection from '$lib/layout/FullWidthSection.svelte';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let mapContainer: HTMLElement;

	onMount(() => {
		const map = new maplibregl.Map({
			container: mapContainer, // container id
			style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${env.PUBLIC_MAPTILER_API_KEY}`, // style URL
			center: [13.154762, 49.098836], // starting position [lng, lat]
			zoom: 10 // starting zoom
		});
		const marker = new maplibregl.Marker();
		let listener: EventListener;

		map.on('click', async (e) => {
			const { lng, lat } = e.lngLat;
			marker.setLngLat([lng, lat]).addTo(map);
			if (listener) {
				marker.off('click', listener);
				console.log('unset a listener');
			}
			listener = async (e) => {
				try {
					console.log('redirecting?');
					const resp = await fetch(`${base}/easy-walks/${lng},${lat}/json`);
					if (!resp.ok) {
						throw Error(`${resp.status} - ${resp.statusText}`);
					}
					const { accommodations, pois } = await resp.json();
					console.log({ accommodations, pois });
				} catch (error) {
					console.error('error navigating', error);
				}
			};
			marker.on('click', listener);
			console.log('set a listener');
		});
	});
</script>

<PageLayout>
	<FullWidthSection>
		<div class="grid relative">
			<div class="absolute inset-0" bind:this={mapContainer}></div>
		</div>
	</FullWidthSection>
</PageLayout>
