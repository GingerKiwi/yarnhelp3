/**
 * Note: yarn "weight" refers to the thickness of yarn, (not how many pounds or grams it weighs). 
 * There are standard weights of yarn
 * A pdf from the Craft Yarn Council on "Yarn Standards" will be added to the repo soon.
 */ 

/**
 * @typedef {Object} YarnWeight
 *
 * @property {string} name The name of the yarn weight.
 * @property {Record<string, number>} yardageNeeded The yardage needed for a set of knitting projects.
 * @property {Record<string, number>} yardageNeededCrochet The yardage needed for a set of knitting projects.
 * All properties are the class names used in the HTML to display the number of yarn balls for that project.
 */

/**
 * @typedef {Object} ProjectType
 * @property {YarnWeight} lace00 projects with Lace 00 weight yarn.
 * @property {YarnWeight} fingering01 projects with Fingering 01 weight yarn.
 * @property {YarnWeight} sport02 projects with Sport 02 weight yarn.
 * @property {YarnWeight} dk03 projects with DK 03 weight yarn.
 * @property {YarnWeight} worsted04 projects with Worsted 04 weight yarn.
 * @property {YarnWeight} bulky05 projects with Chunky 05 weight yarn.
 */

/**
 * @typedef {Object} ProjectTypeCrochet
 * @property {YarnWeight} lace00 crochet projects with Lace 00 weight yarn.
 * @property {YarnWeight} fingering01 crochet projects with Fingering 01 weight yarn.
 * @property {YarnWeight} sport02 crochet projects with Sport 02 weight yarn.
 * @property {YarnWeight} dk03 crochet projects with DK 03 weight yarn.
 * @property {YarnWeight} worsted04 crochet projects with Worsted 04 weight yarn.
 * @property {YarnWeight} bulky05 crochet projects with Chunky 05 weight yarn.
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
            babyPullover: 725,
            toddlerPullover: 1200,
            childPullover: 1550,
            adultSmallPullover: 2400,
            adultLargePullover: 3000,
            adultXxlPullover: 3650,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeeded: {
            babyPullover: 650,
            toddlerPullover: 1000,
            childPullover: 1500,
            adultSmallPullover: 1600,
            adultLargePullover: 2100,
            adultXxlPullover: 2200,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeeded: {
            babyPullover: 630,
            toddlerPullover: 945,
            childPullover: 1418,
            adultSmallPullover: 1575,
            adultLargePullover: 1995,
            adultXxlPullover: 2195,
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
    bulky05: {
        name: "Bulky 05",
        yardageNeeded: {
            // babyPullover: null,
            // It doesn't make sense to make a baby pullover with chunky yarn.
            toddlerPullover: 650,
            childPullover: 1000,
            adultSmallPullover: 1200,
            adultLargePullover: 1500,
            adultXxlPullover: 1650,
        }
    }
};

/** @type {ProjectTypeCrochet} */
export const pulloverCrochetData = {
    lace00: {
        name: "Lace 00",
        yardageNeededCrochet: {
            babyPulloverCrochet: 0,
            toddlerPulloverCrochet: 0,
            childPulloverCrochet: 0,
            adultSmallPulloverCrochet: 0,
            adultLargePulloverCrochet: 0,
            adultXxlPulloverCrochet: 0,
        }
    },
    fingering01: {
        name: "Fingering 01",
        yardageNeededCrochet: {
            babyPulloverCrochet: 725,
            toddlerPulloverCrochet: 1200,
            childPulloverCrochet: 1550,
            adultSmallPulloverCrochet: 2400,
            adultLargePulloverCrochet: 3000,
            adultXxlPulloverCrochet: 3650,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeededCrochet: {
            babyPulloverCrochet: 650,
            toddlerPulloverCrochet: 1000,
            childPulloverCrochet: 1500,
            adultSmallPulloverCrochet: 1600,
            adultLargePulloverCrochet: 2100,
            adultXxlPulloverCrochet: 2200,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeededCrochet: {
            babyPulloverCrochet: 630,
            toddlerPulloverCrochet: 945,
            childPulloverCrochet: 1418,
            adultSmallPulloverCrochet: 1575,
            adultLargePulloverCrochet: 1995,
            adultXxlPulloverCrochet: 2195,
        }
    },
    worsted04: {
        name: "Worsted 04",
        yardageNeededCrochet: {
            babyPulloverCrochet: 550,
            toddlerPulloverCrochet: 800,
            childPulloverCrochet: 1200,
            adultSmallPulloverCrochet: 1400,
            adultLargePulloverCrochet: 1700,
            adultXxlPulloverCrochet: 1850,
        }
    },
    bulky05: {
        name: "Bulky 05",
        yardageNeededCrochet: {
            // babyPullover: null,
            // It doesn't make sense to make a baby pullover with chunky yarn.
            toddlerPulloverCrochet: 650,
            childPulloverCrochet: 1000,
            adultSmallPulloverCrochet: 1200,
            adultLargePulloverCrochet: 1500,
            adultXxlPulloverCrochet: 1650,
        }
    }
};

/** @type {ProjectType} */
export const scarfData = {
    lace00: {
        name: "Lace 00",
        yardageNeeded: {
            childScarf: 1600,
            adultSmallScarf: 2615,
            adultLargeScarf: 3145,
            adultExtraLongScarf: 4270,
            doctorWhoScarf: 8065,
        }
    },
    fingering01: {
        name: "Fingering 01",
        yardageNeeded: {
            childScarf: 1400,
            adultSmallScarf: 2290,
            adultLargeScarf:2990,
            adultExtraLongScarf: 3735,
            doctorWhoScarf: 7060,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeeded: {
            childScarf: 1300,
            adultSmallScarf: 2125,
            adultLargeScarf: 2780,
            adultExtraLongScarf: 3470,
            doctorWhoScarf: 6555,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeeded: {
            childScarf: 1100,
            adultSmallScarf: 1800,
            adultLargeScarf: 2350,
            adultExtraLongScarf: 2935,
            doctorWhoScarf: 5545,
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
    bulky05: {
        name: "Bulky 05",
        yardageNeeded: {
            childScarf: 750,
            adultSmallScarf: 1225,
            adultLargeScarf: 1600,
            adultExtraLongScarf: 2935,
            doctorWhoScarf: 3025,
        }
    },
    superBulky06: {
        name: "Super Bulky 06",
        yardageNeeded: {
            childScarf: 600,
            adultSmallScarf: 980,
            adultLargeScarf: 1280,
            adultExtraLongScarf: 1600,
            doctorWhoScarf
        }
    },
};

/** @type {ProjectTypeCrochet} */
export const scarfCrochetData = {
    lace00: {
        name: "Lace 00",
        yardageNeededCrochet: {
            childScarfCrochet: 1600,
            adultSmallScarfCrochet: 2615,
            adultLargeScarfCrochet: 3145,
            adultExtraLongScarfCrochet: 4270,
            doctorWhoScarfCrochet: 8065,
        }
    },
    fingering01: {
        name: "Fingering 01",
        yardageNeededCrochet: {
            childScarfCrochet: 1400,
            adultSmallScarfCrochet: 2290,
            adultLargeScarfCrochet:2990,
            adultExtraLongScarfCrochet: 3735,
            doctorWhoScarfCrochet: 7060,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeededCrochet: {
            childScarfCrochet: 1300,
            adultSmallScarfCrochet: 2125,
            adultLargeScarfCrochet: 2780,
            adultExtraLongScarfCrochet: 3470,
            doctorWhoScarfCrochet: 6555,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeededCrochet: {
            childScarfCrochet: 1100,
            adultSmallScarfCrochet: 1800,
            adultLargeScarfCrochet: 2350,
            adultExtraLongScarfCrochet: 2935,
            doctorWhoScarfCrochet: 5545,
        }
    },
    worsted04: {
        name: "Worsted 04",
        yardageNeededCrochet: {
            childScarfCrochet: 250,
            adultSmallScarfCrochet: 409,
            adultLargeScarfCrochet: 534,
            adultExtraLongScarfCrochet: 667,
            doctorWhoScarfCrochet: 1260,
        }
    },
    bulky05: {
        name: "Bulky 05",
        yardageNeededCrochet: {
            childScarfCrochet: 750,
            adultSmallScarfCrochet: 1225,
            adultLargeScarfCrochet: 1600,
            adultExtraLongScarfCrochet: 2935,
            doctorWhoScarfCrochet: 3025,
        }
    },
    superBulky06: {
        name: "Super Bulky 06",
        yardageNeededCrochet: {
            childScarfCrochet: 600,
            adultSmallScarfCrochet: 980,
            adultLargeScarfCrochet: 1280,
            adultExtraLongScarfCrochet: 1600,
            doctorWhoScarfCrochet: 3025,
        }
    },
};
