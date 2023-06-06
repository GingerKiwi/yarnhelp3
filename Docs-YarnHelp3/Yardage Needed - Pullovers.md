## ## Yarn Weights (Thicknesses)

Craft Yarn Council (CYC)

- 0: lace
- 1: sock/fingering
- 2: sport
- 3: Dk/light worsted
- 4: Worsted/medium/aran
- 5: bulky/chunky
- 6: super chunky/super bulky
- 7: jumbo

## Sources for Yardage:

- iw (Interweave Knits)
	- from article published on the Interweave Knits website:
	- [*'How Much Yarn Do I Need?'* ](obsidian://open?vault=Docs-YarnHelp3&file=YarnHelp2-Docs%2FPDF-References%2FHow%20Much%20Yarn%20Do%20I%20Need%20for%20a%20Knitted%20Sweater%20-%20Interweave.pdf)
	- See /YarnHelp2-Docs/PDF-References
- kc (Knitter's Companion)
	- Taken from pages 16 and 17 of *'The Knitter's Companion* by Vicki Square. Published by Interweave Press (1996) (interweaveknits.com)
- calc (Calculated) 
	- from ravelry patterns and other weights/sizes for the same project, plus this dev's multiple decades of knitting experience.
- tck (Tin Can Knits)
	  - Flax Light Pullover - see page 2 of pattern for yardage chart. This yardage matches with my 15+ years of knitting sweaters.
			- [fingering]https://www.ravelry.com/patterns/library/flax-light)
- cyc - (Craft Yarn Council)
** In all cases the maximum value is used.

## Pullovers

### Weights With Yardage for All Sizes:

[] 0: lace
[x] 1: sock/fingering
[x] 2: sport
[x] 3: Dk/light worsted
[x] 4: Worsted/medium/aran
[x] 5: bulky/chunky
[] 6: super chunky/super bulky
[] 7: jumbo

xxl 
Sportweight: 1600-2000 yards (1500-1850 meters)  
Worsted weight: 1400-1600 yards (1300-1500 meters)  
Bulky weight: 1200-1400 yards (1100-1300 meters)

### Lace 00 Weight

babyPullover: 0,
toddlerPullover: 0,
childPullover: 0,
adultSmallPullover: 0,
adultLargePullover: 0,
adultXxlPullover: 0,

### Fingering 01 Weight

babyPullover: 725 (kc)
toddlerPullover: 1200, (calc)
childPullover: 1550, (calc)
adultSmallPullover: 2400, (calc)
adultLargePullover: 3000, (calc)
adultXxlPullover: 3650, (calc)

### Sport 02 Weight

babyPullover: 650, (iw)
toddlerPullover: 1000, (kc)
childPullover: 1500, (kc)
adultSmallPullover: 1600, (kc)
adultLargePullover: 2100, (kc)
adultXxlPullover: 2200, (iw + calc)

### DK 03 Weight

** All yardage sources = calc (Calculated)
(sport + worsted)/2 x 1.05 
Multiplied by 1.05 because it's a good estimate

babyPullover: 630,
toddlerPullover: 945,
childPullover: 1418,
adultSmallPullover: 1575,
adultLargePullover: 1995,
adultXxlPullover: 2195,

## Worsted 04 Weight

All worsted weight yardages are from kc (Knitter's Companion)

babyPullover: 550,
toddlerPullover: 800,
childPullover: 1200,
adultSmallPullover: 1400,
adultLargePullover: 1700,
adultXxlPullover: 1850,

## Bulky 05 Weight

babyPullover: null, * It doesn't make sense to knit a baby sweater in bulky yarn*
toddlerPullover: 650, (kc)
childPullover: 1000, (kc)
adultSmallPullover: 1200, (kc + add 200 b/c too close to child's)
adultLargePullover: 1500, (kc)
adultXxlPullover: 1650, (calc)


## Data.js File - Included for Quick Reference

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
```