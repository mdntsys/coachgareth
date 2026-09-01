import type { HarvestedPost } from './_schema';

export const harvest: HarvestedPost = {
  slug: 'periodization',
  title: 'Periodization',
  description:
    'Periodization is the science of putting the building blocks of training in the right order so each phase prepares you for the next.',
  eyebrow: 'Training',
  lede:
    'Periodization is a science-based system of putting the building blocks of training in the correct order, so you can maximise your gains as you progress.',
  image: '/images/enduranceathletestrainingrun.jpg',
  imageAlt: 'Endurance athletes training, the weekly work that periodization puts in order',
  sourceUrl: 'https://www.coachgareth.com/blog/periodization',
  sections: [
    {
      heading: 'What periodization is',
      paragraphs: [
        'It applies to endurance training and strength training equally. Training is therefore completed in phases. Each phase has a specific focus and prepares the body for the more advanced training that comes next.',
        'Each phase builds on the work done before it and creates a new stimulus to force your body to grow and adapt. We start with lower-intensity work and build over time to higher-intensity sessions. Peak speed only comes after you have first built a solid aerobic base and strength endurance.',
      ],
    },
    {
      heading: 'The phases of a season',
      paragraphs: [
        'A typical season for Gareth’s athletes moves through these phases. You can race at any time through the season, but your key races should fall in Peak and Race, when you are at your highest level of complete fitness.',
      ],
      list: [
        'Base — technique and aerobic development',
        'Conditioning — as per Base, plus more volume',
        'Pre-strength — an increase in volume and intensity',
        'Strength — hill work and maximal strength gains',
        'Speed — development of threshold',
        'Peak — VO2 focus and race skills',
        'Race — your time to shine',
      ],
    },
    {
      heading: 'Two cycles in one season',
      paragraphs: [
        'For many athletes there will be two complete cycles of all phases in one season. A triathlete, for example, might build to an Olympic-distance race peak mid-summer, followed by a phase of 70.3 or IRONMAN-specific training for a fall event.',
      ],
    },
    {
      heading: 'How long each cycle lasts',
      paragraphs: [
        'Typically for Gareth’s athletes these phases last three to four weeks and are built as follows.',
      ],
      list: [
        'Week 1 — build cycle',
        'Week 2 — build cycle plus 10–15%',
        'Week 3 — active recovery and field tests',
      ],
    },
    {
      heading: 'Repeat the work before you change it',
      paragraphs: [
        'In each phase you therefore repeat the same training several times before moving on. Practically this means you will often repeat a particular type of cardio session two or three times before getting a different one.',
        'That repetition is the point. The body adapts to a stimulus it has seen, not to a new workout every Tuesday. Field tests in the recovery week tell you whether the block actually moved anything.',
      ],
    },
  ],
};
