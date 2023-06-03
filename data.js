/**
 * @typedef {Object} YarnWeight
 *
 * @property {string} name The name of the yarn weight.
 * @property {Record<string, number>} yardageNeeded The yardage needed for a set of projects.
 * All properties are the class names used in the HTML to display the number of yarn balls for that project.
 */

/**
 * @typedef {Object} ProjectType
 * @property {YarnWeight} lace00 projects for a weight of Lace 00.
 * @property {YarnWeight} fingering01 projects for a weight of Fingering 01.
 * @property {YarnWeight} sport02 projects for a weight of Sport 02.
 * @property {YarnWeight} dk03 projects for a weight of DK 03.
 * @property {YarnWeight} worsted04 projects for a weight of Worsted 04.
 * @property {YarnWeight} chunky05 projects for a weight of Chunky 05.
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
