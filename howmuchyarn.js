import { pulloverData, scarfData } from './data.js';

const howMuchYarnFrom = document.querySelector('.how-much-yarn');

/**
 * Update the HTML values for a given project type.
 *
 * This will find all the elements with a class matching the project type and add the calculated value to the element's `textContent`.
 *
 * @param {import('./data.js').ProjectType} projectType
 * @param {Record<string, FormDataEntryValue>} formValues
 */
function renderMessageHtml(projectType, formValues) {
	/** @type {import('./data.js').YarnWeight} */
	const { yardageNeeded } = projectType[formValues.weight];

	for (const [project, yardage] of Object.entries(yardageNeeded)) {
		const ballsNeeded = Math.ceil(yardage * 1.05 / formValues.yardsPerBall);

		const messageElement = document.querySelector(`.${project}`);

		if (messageElement) {
			messageElement.textContent = ballsNeeded;
		}
	}
}

howMuchYarnFrom.addEventListener('submit', function(evt) {
	evt.preventDefault();

	const formData = new FormData(evt.target);
	const formValues = Object.fromEntries(formData.entries());

	renderMessageHtml(pulloverData, formValues);
	renderMessageHtml(scarfData, formValues);
});
