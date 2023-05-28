/**
 * Iterades over an object and creates a list of radio buttons based on the keys of the object.
 *
 * @param {{ [key in string]: { name: string } }} data The data to iterate over.
 * @param {string} title The title for the list of radio buttons.
 *
 * @returns {string} The markup for the radios buttons.
 */
function createRadioHtmlFromData(data, title) {
	const entries = Object.entries(data);

	const radiosHtml = `
		<fieldset>
			<legend>${title}</legend>
	`;

	for (const [key, data] of entries) {
		radiosHtml += `
			<label for="radio-${key}">
				<input id="radio-${key}" name="yarn-weight" type="radio" value="${key}">
				${data.name}
			</label>
		`;
	}

	radiosHtml += '</fieldset>';

	return radiosHtml;
}
