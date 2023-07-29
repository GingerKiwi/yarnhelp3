/**
 * Note: yarn "weight" refers to the thickness of yarn, (not how many pounds or grams it weighs). 
 * There are standard weights of yarn
 * Please refer to the pdf from the Craft Yarn Council on "Yarn Standards" in the Docs.
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
 * @property {YarnWeight} bulky06 projects with Bulky 06 weight yarn.
 * @property {YarnWeight} jumbo07 projects with Jumbo 07 weight yarn.
 */

/**
 * @typedef {Object} ProjectTypeCrochet
 * @property {YarnWeight} lace00 projects with Lace 00 weight yarn.
 * @property {YarnWeight} fingering01 projects with Fingering 01 weight yarn.
 * @property {YarnWeight} sport02 projects with Sport 02 weight yarn.
 * @property {YarnWeight} dk03 projects with DK 03 weight yarn.
 * @property {YarnWeight} worsted04 projects with Worsted 04 weight yarn.
 * @property {YarnWeight} chunky05 projects with Chunky 05 weight yarn.
 * @property {YarnWeight} bulky06 projects with Bulky 06 weight yarn.
 * @property {YarnWeight} jumbo07 projects with Jumbo 07 weight yarn.
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
    chunky05: {
        name: "Chunky 05",
        yardageNeeded: {
            // babyPullover: null,
            // It doesn't make sense to make a baby pullover with chunky yarn.
            babyPullover: 450,
            toddlerPullover: 650,
            childPullover: 1000,
            adultSmallPullover: 1200,
            adultLargePullover: 1500,
            adultXxlPullover: 1650,
        }
    },
    // bulky06: {
    //     name: "Bulky 06",
    //     yardageNeeded: {
    //         // babyPullover: null,
    //         // It doesn't make sense to make a baby pullover with bulky yarn.
    //         babyPullover: 450,
    //         toddlerPullover: 650,
    //         childPullover: 1000,
    //         adultSmallPullover: 1200,
    //         adultLargePullover: 1500,
    //         adultXxlPullover: 1650,
    //     }
    // },
    // jumbo07: {
    //     name: "Jumbo 07",
    //     yardageNeeded: {
    //         // babyPullover: null,
    //         // It doesn't make sense to make a baby pullover with jumbo yarn.
    //         babyPullover: 450,
    //         toddlerPullover: 650,
    //         childPullover: 1000,
    //         adultSmallPullover: 1200,
    //         adultLargePullover: 1500,
    //         adultXxlPullover: 1650,
    //     }
    // },
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
            babyPulloverCrochet: 725 * 1.25,
            toddlerPulloverCrochet: 1200 * 1.25,
            childPulloverCrochet: 1550 * 1.25,
            adultSmallPulloverCrochet: 2400 * 1.25,
            adultLargePulloverCrochet: 3000 * 1.25,
            adultXxlPulloverCrochet: 3650 * 1.25,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeededCrochet: {
            babyPulloverCrochet: 650 * 1.25,
            toddlerPulloverCrochet: 1000 * 1.25,
            childPulloverCrochet: 1500 * 1.25,
            adultSmallPulloverCrochet: 1600 * 1.25,
            adultLargePulloverCrochet: 2100 * 1.25,
            adultXxlPulloverCrochet: 2200 * 1.25,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeededCrochet: {
            babyPulloverCrochet: 630 * 1.25,
            toddlerPulloverCrochet: 945 * 1.25,
            childPulloverCrochet: 1418 * 1.25,
            adultSmallPulloverCrochet: 1575 * 1.25,
            adultLargePulloverCrochet: 1995 * 1.25,
            adultXxlPulloverCrochet: 2195 * 1.25,
        }
    },
    worsted04: {
        name: "Worsted 04",
        yardageNeededCrochet: {
            babyPulloverCrochet: 550 * 1.25,
            toddlerPulloverCrochet: 800 * 1.25,
            childPulloverCrochet: 1200 * 1.25,
            adultSmallPulloverCrochet: 1400 * 1.25,
            adultLargePulloverCrochet: 1700 * 1.25,
            adultXxlPulloverCrochet: 1850 * 1.25,
        }
    },
    // bulky06: {
    //     name: "Bulky 06",
    //     yardageNeededCrochet: {
    //         // babyPullover: null,
    //         // It doesn't make sense to make a baby pullover with chunky yarn.
    //         babyPulloverCrochet: 450 * 1.25,
    //         toddlerPulloverCrochet: 650 * 1.25,
    //         childPulloverCrochet: 1000 * 1.25,
    //         adultSmallPulloverCrochet: 1200 * 1.25,
    //         adultLargePulloverCrochet: 1500 * 1.25,
    //         adultXxlPulloverCrochet: 1650 * 1.25,
    //     }
    // },
    // jumbo07: {
    //     name: "Jumbo 07",
    //     yardageNeededCrochet: {
    //         // babyPullover: null,
    //         // It doesn't make sense to make a baby pullover with chunky yarn.
    //         babyPulloverCrochet: 450 * 1.25,
    //         toddlerPulloverCrochet: 650 * 1.25,
    //         childPulloverCrochet: 1000 * 1.25,
    //         adultSmallPulloverCrochet: 1200 * 1.25,
    //         adultLargePulloverCrochet: 1500 * 1.25,
    //         adultXxlPulloverCrochet: 1650 * 1.25,
    //     }
    // }
};

// ----------------------------------------------------  
// -------- SCARFS ----------

// Calculations for scarfs and blankets use the following formula:
// (width * length * (gauge))/6 
// gauge = number of stitches /4 inches
// (width * length * (gauge)) gives the number of square inches
// dividing by 6 converts square inches to linear yards.
// See docs - Calculations and the Craft Yarn Council PDF pages 22-24.
// Standard gauge for each weight of yarn is a range (eg worsted 04 16-20st/4inches). 
// The larger value was used because a tighter gauge requires more yarn.

/** @type {ProjectType} */
export const scarfData = {
    lace00: {
        name: "Lace 00",
        yardageNeeded: {
            childScarf: (5 * 60 * (40/4))/6,
            adultSmallScarf: ( 7 * 70 * (40/4))/6,
            adultLargeScarf: ( 8 * 80 * (40/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (40/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (40/4))/6,
        }
    },
    fingering01: {
        name: "Fingering 01",
        yardageNeeded: {
            childScarf: (5 * 60 * (32/4))/6,
            adultSmallScarf: ( 7 * 70 * (32/4))/6,
            adultLargeScarf: ( 8 * 80 * (32/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (32/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (32/4))/6,
        }
    },
    sport02: {
        name: "Sport 02",
        yardageNeeded: {
            childScarf: (5 * 60 * (26/4))/6,
            adultSmallScarf: ( 7 * 70 * (26/4))/6,
            adultLargeScarf: ( 8 * 80 * (26/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (26/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (26/4))/6,
        }
    },
    dk03: {
        name: "DK 03",
        yardageNeeded: {
            childScarf: (5 * 60 * (24/4))/6,
            adultSmallScarf: ( 7 * 70 * (24/4))/6,
            adultLargeScarf: ( 8 * 80 * (24/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (24/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (24/4))/6,
        }
    },
    worsted04: {
        name: "Worsted 04",
        yardageNeeded: {
            childScarf: (5 * 60 * (20/4))/6,
            adultSmallScarf: ( 7 * 70 * (20/4))/6,
            adultLargeScarf: ( 8 * 80 * (20/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (20/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (20/4))/6,
        }
    },
    chunky05: {
        name: "Chunky 05",
        yardageNeeded: {
            childScarf: (5 * 60 * (15/4))/6,
            adultSmallScarf: ( 7 * 70 * (15/4))/6,
            adultLargeScarf: ( 8 * 80 * (15/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (15/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (15/4))/6,
        }
    },
    bulky06: {
        name: "Bulky 06",
        yardageNeeded: {
            childScarf: (5 * 60 * (11/4))/6,
            adultSmallScarf: ( 7 * 70 * (11/4))/6,
            adultLargeScarf: ( 8 * 80 * (11/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (11/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (11/4))/6,
        }
    },
    jumbo07: {
        name: "Jumbo 07",
        yardageNeeded: {
            childScarf: (5 * 60 * 71/4))/6,
            adultSmallScarf: ( 7 * 70 * (7/4))/6,
            adultLargeScarf: ( 8 * 80 * (7/4))/6,
            adultExtraLongScarf: ( 8 * 100 * (7/4))/6,
            doctorWhoScarf: ( 10.5 * 114 * (7/4))/6,
        }
    },
};