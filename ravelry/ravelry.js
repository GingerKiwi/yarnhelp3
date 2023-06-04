async function fetchFromRavelryApi(endpoint) {
	// Please don't steal my credentials
	const username = 'read-1935949be870bcd3ed3990f79db4966b';
	const password = '8xRH2yN99fQkGVjzdhUvhvUubWxwFyp6sBeNZXM8';

	const baseUrl = 'https://api.ravelry.com';
	const url = new URL(endpoint, baseUrl);

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${btoa(username + ":" + password)}`
		}
	});

	return await response.json();
}

function displayYarnOnPage(yarn) {
	const yarnList = document.querySelector('#yarn-list');

	yarnList.insertAdjacentHTML('beforeend', `
		<article>
			<img src="${yarn.first_photo?.thumbnail_url ?? 'https://placekitten.com/100/100'}" alt="Photo of ${yarn.name}">
			<h2>${
				yarn?.permalink
					? `<a href="https://ravelry.com/yarns/library/${yarn.permalink}" target="_blank" rel="noreferrer noopener">${yarn.name}</a>`
					: yarn.name
			}
			</h2>
            <ul>
                <li>Brand: ${yarn.yarn_company_name ?? 'no brand listed'}</li>
                <li>Name: ${yarn.name ?? 'no name listed'}</li>
				<li>Yardage: ${yarn.yardage ?? 'no yardage listed'}</li>
				<li>WPI: ${yarn.wpi ?? yarn.yarn_weight?.wpi ?? 'no wraps per inch listed'}</li>
				<li>Weight: ${yarn.yarn_weight?.name ?? 'no name listed'}</li>
				<li>Grams: ${yarn.grams ?? 'no grams listed'}</li>
            </ul>


		</article>
	`);
}

document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('#btn-ravelry-search');

	button?.addEventListener('click', async () => {
		const searchParameters = new URLSearchParams({
			query: 'fingering',
			page_size: 25
		});

		const yarnList = await fetchFromRavelryApi(`/yarns/search.json?${searchParameters.toString()}`);
		const yarnWeightList = await fetchFromRavelryApi('/yarn_weights.json');

		console.log(yarnWeightList);

		for (const yarn of yarnList.yarns) {
			displayYarnOnPage(yarn);
		}
	});
});
