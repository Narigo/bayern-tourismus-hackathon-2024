import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

const BAYERNCLOUD_API_TOKEN = env.BAYERNCLOUD_API_TOKEN;

export const load: PageServerLoad = async ({ fetch, params }) => {
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
				filter: { geo: { in: { perimeter: [params.lng, params.lat, 10000] } } }
			})
		}
	);
	if (response.ok) {
		return {
			lat: Number(params.lat),
			lng: Number(params.lng),
			bcdata: await response.json()
		};
	}
	throw Error(`${response.status} - ${response.statusText}`);
};
