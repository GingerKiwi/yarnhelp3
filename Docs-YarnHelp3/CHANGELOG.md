# Yarn Help 3.0 Changelog

## 3.0 (2023.06.06 | June 06, 2023)

Create and code in new Branch: dev-2023-06-06-add-data-howmuchyarn
- Create Obsidian Vault for project docs
- Paste a copy of YarnHelp2-Docs into YarnHelp 3.0 docs
- Add data to data.js

## 3.0 (2023.06.05 | June 05, 2023)

Branch: dev-2023-06-05
- Started adding themes and using css variables for colours in :root. 
- Broke some themes, and fixed others

## 3.0 (2023.04.06 | June 04, 2023)

- Pair program with Marcos Campos using VSCode Live Share
	- Create folder Ravelry with :
		- ravely.js
		- css-reset.css
		- ravelry-styles.css
		- index.html
	- Accept PR #3 from pair programming:
		3. Implement basic ravelry api request
			- Add the boilerplate html and js code to make requests to ravelry API.
			
			- Details: Get an test page running connected to the Raverly api that shows a list of yarns with thumbnails and selected other attributes.
	- For testing purposes hard coded the api key. 
	  
After pair programming:
- Deleted key before deploying to GitHub/Netlify.
- Pushed to GitHub to share code.
- Add border around cards in site in addition to the block top border.

## 3.0 (2023.03.06 | June 03, 2023)

- Toronto JS code club group programming: How Much Yarn app
	
	- worked data file data.js in this format further nesting yardageNeeded for each project type inside the weight, inside each const:
```js
export const pulloverData = {
    lace00: {
        name: "Lace 00",
        yardageNeeded: {
            babyPullover: 0,
            toddlerPullover: 0,
            childPullover: 0,
            adultSmallPullover: 0,
            adultLargePullover: 0,
            adultXxlPullover: 0,
        }
    },
```

- Accepted and committed two PRs from Marcos Campos from TorontoJS Code Club:
	1. # feat: add data iteration example code
		- Creates a new file with a sample function on how data iteration works with the current format.
	2. # Implement base calculations on "how much yarn?" page
		- This is the result of the group programming session from TorontoJS.
		- There is a change on the data format, so all numbers are kept on the `yardageNeeded` property for each project type.
		- Added the needed pieces to the form so it now will use javascript to run on the `submit` event.
		- There are `span` elements on the html where the calculation results will be updated.
- After group programming session:
	- Edited comments
	- Added additional comments - so non-knitters and non-crocheters can understand the code.
	  
## 3.0 (2023.05.27 | May 27, 2023)

- add data.js
- create pulloverData.js and add data for each of six weights of yarn (Lace 00 through Chunky/bulky 05).
- Add real required yardage for all six sizes of pullovers for Worsted 04 weight.
- create CHANGELOG.md and notes.md
- ask detailed questions of ChatGPT using quilting as the examples to explore options for how to make the code for 3.0 DRYer and use es06 with classes and objects, plus accessable forms and error messages.
  - These notes are in my personal drafts folder. They will be moved over in the next few weeks after an Obsidian vault is created for this project.

## 3.0 (2023.05.25 | May 25, 2023)

- create project using a Kevin Powell css grid layout theme switcher as the starter files.
- create pages: craftingandcode.html, howmuchyarn.html, and doctorwho.html.
- create javascript files: howmuchyarn.js, doctorwho.js, and app.js