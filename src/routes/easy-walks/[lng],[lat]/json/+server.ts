import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const BAYERNCLOUD_API_TOKEN = env.BAYERNCLOUD_API_TOKEN;

async function retrieveAll({
	fetch,
	list,
	lngLat,
	perimeter
}: {
	fetch: typeof globalThis.fetch;
	list: string;
	lngLat: { lat: number; lng: number };
	perimeter: number;
}) {
	const response = await fetch(
		'https://data.bayerncloud.digital/api/v4/endpoints/list_accommodation',
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json',
				Authorization: `Bearer ${BAYERNCLOUD_API_TOKEN}`
			},
			body: JSON.stringify({
				filter: { geo: { in: { perimeter: [lngLat.lng, lngLat.lat, perimeter] } } }
			})
		}
	);
	if (response.ok) {
		return response.json();
	}
	throw Error(`${response.status} - ${response.statusText}`);
}

export async function GET({ fetch, params }) {
	const lngLat = { lat: Number(params.lat), lng: Number(params.lng) };
	const dataAccommodations = retrieveAll({
		fetch,
		list: 'list_accommodation',
		lngLat,
		perimeter: 3000
	});
	const dataPois = retrieveAll({
		fetch,
		list: 'list_poi',
		lngLat,
		perimeter: 5000
	});

	const [accommodations, pois] = await Promise.all([dataAccommodations, dataPois]);
	return json({
		accommodations,
		pois
	});
}
