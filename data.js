/**
 * Note: yarn "weight" refers to the thickness of yarn, (not how many pounds or grams it weighs). 
 * There are standard weights of yarn
 * A pdf from the Craft Yarn Council on "Yarn Standards" will be added to the repo soon.
 */ 

/**
 * @typedef {Object} YarnWeight
 *
 * @property {string} name The name of the yarn weight.
 * @property {Record<string, number>} yardageNeeded The yardage needed for a set of projects.
 * All properties are the class names used in the HTML to display the number of yarn balls for that project.
 */

/**
 * @typedef {Object} ProjectType
 * @property {YarnWeight} lace00 projects with Lace 00 weight yarn.
 * @property {YarnWeight} fingering01 projects with Fingering 01 weight yarn.
 * @property {YarnWeight} sport02 projects with Sport 02 weight yarn.
 * @property {YarnWeight} dk03 projects with DK 03 weight yarn.
 * @property {YarnWeight} worsted04 projects with Worsted 04 weight yarn.
 * @property {YarnWeight} chunky05 projects with Chunky 05 weight yarn.
 */

/** @type {ProjectType} */
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
    fingering01: {
        name: "Fingering 01",
        yardageNeeded: {
            babyPullover: 700,
            toddlerPullover: 0,
            childPullover: 0,
            adultSmallPullover: 1700,
            adultLargePullover: 0,
            adultXxlPullover: 0,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeeded: {
            babyPullover: 0,
            toddlerPullover: 0,
            childPullover: 0,
            adultSmallPullover: 0,
            adultLargePullover: 0,
            adultXxlPullover: 0,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeeded: {
            babyPullover: 0,
            toddlerPullover: 0,
            childPullover: 0,
            adultSmallPullover: 0,
            adultLargePullover: 0,
            adultXxlPullover: 0,
        }
    },
    worsted04: {
        name: "Worsted 04",
        yardageNeeded: {
            babyPullover: 550,
            toddlerPullover: 800,
            childPullover: 1200,
            adultSmallPullover: 1400,
            adultLargePullover: 1700,
            adultXxlPullover: 1850,
        }
    },
    chunky05: {
        name: "Chunky 05",
        yardageNeeded: {
            babyPullover: 0,
            toddlerPullover: 0,
            childPullover: 0,
            adultSmallPullover: 0,
            adultLargePullover: 0,
            adultXxlPullover: 0,
        }
    }
};

/** @type {ProjectType} */
export const scarfData = {
    fingering01: {
        name: "Fingering 01",
        yardageNeeded: {
            childScarf: 250 * 2,
            adultSmallScarf: 409 * 2,
            adultLargeScarf: 534 * 2,
            adultExtraLongScarf: 667 * 2,
            doctorWhoScarf: 1260 * 2,
        }
    },
    worsted04: {
        name: "Worsted 04",
        yardageNeeded: {
            childScarf: 250,
            adultSmallScarf: 409,
            adultLargeScarf: 534,
            adultExtraLongScarf: 667,
            doctorWhoScarf: 1260,
        }
    },
};
