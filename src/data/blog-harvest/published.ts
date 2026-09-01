import type { HarvestedPost } from './_schema';
import { harvest as areYouFatAdapted } from './are-you-fat-adapted';
import { harvest as carbonPlatedShoes } from './are-your-carbon-plated-running-shoes-hurting-you';
import { harvest as dontTrainWhenSick } from './dont-train-when-you-are-sick';
import { harvest as fuelWithColor } from './fuel-with-color';
import { harvest as gutHealth } from './gut-health-and-the-microbiome';
import { harvest as isVo2WorthIt } from './is-a-vo2-max-test-worth-it';
import { harvest as knowYourZones } from './know-your-zones';
import { harvest as maximizingBodyComp } from './maximizing-body-composition';
import { harvest as periodization } from './periodization';
import { harvest as dosAndDontsHrm } from './the-dos-and-donts-of-heart-rate-training';
import { harvest as theNeedForSpeed } from './the-need-for-speed';
import { harvest as pillarsOfSuccess } from './the-pillars-of-success';
import { harvest as economyVsEfficiency } from './what-is-the-difference-between-economy-and-efficiency';
import { harvest as whyYouNeedACoach } from './why-you-need-a-coach';

/** Harvested posts that are complete enough to publish. Stubs stay as 301s. */
export const PUBLISHED_HARVEST: HarvestedPost[] = [
  isVo2WorthIt,
  periodization,
  theNeedForSpeed,
  carbonPlatedShoes,
  pillarsOfSuccess,
  whyYouNeedACoach,
  dontTrainWhenSick,
  dosAndDontsHrm,
  knowYourZones,
  economyVsEfficiency,
  areYouFatAdapted,
  maximizingBodyComp,
  fuelWithColor,
  gutHealth,
];
