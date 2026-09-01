import { POSTS } from './site';
import type { HarvestedPost } from './blog-harvest/_schema';
import { PUBLISHED_HARVEST } from './blog-harvest/published';

/**
 * Bodies for blog posts. Titles, slugs and meta live on POSTS in site.ts;
 * this file is the article copy so the templates stay presentational.
 *
 * The four lab explainers were written from site.ts / recovered VO2 voice.
 * Later posts are harvested Squarespace bodies (see blog-harvest/). Headings
 * here render as H2 — the template owns the single H1.
 */
export type PostBody = {
  eyebrow: string;
  lede: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

type PostSlug = (typeof POSTS)[number]['slug'];

function fromHarvest(h: HarvestedPost): PostBody {
  return {
    eyebrow: h.eyebrow,
    lede: h.lede,
    image: h.image,
    imageAlt: h.imageAlt,
    sections: h.sections,
  };
}

const harvestedBodies = Object.fromEntries(
  PUBLISHED_HARVEST.map((h) => [h.slug, fromHarvest(h)]),
) as Record<string, PostBody>;

export const POST_BODIES = {
  'what-is-vo2-max': {
    eyebrow: 'Testing',
    lede:
      'VO2 max is the maximum amount of oxygen you can consume and use during exercise — milliliters of oxygen per kilogram of body weight per minute, and the best-studied marker of cardiovascular fitness.',
    image: '/images/vo2maxtestlosangelesrunner.jpg',
    imageAlt:
      'A runner on a treadmill during a VO2 max test at ECLYPSE Fitness Lab in Santa Monica',
    sections: [
      {
        heading: 'What VO2 max actually is',
        paragraphs: [
          'Technically, VO2 max is the maximum amount of oxygen you can consume and use during exercise, expressed as milliliters of oxygen consumed per kilogram of body weight per minute (ml/kg/min). That is the number a VO2 max test is built to find, not a score estimated from a watch or a calculator.',
          'The highest readings sit in the 90s for men and about 80 for women. Those are the top of the sport. Most people who come through the lab are not chasing a figure that large. They want an honest reading of the engine they actually have, so they can train it.',
          'If you want to be the fittest you can be, that is the full scoop: what the number is, why it matters for speed and for how long you stay well, and how we measure it in Santa Monica rather than guessing it.',
        ],
      },
      {
        heading: 'The size of the engine',
        paragraphs: [
          'VO2 max and “Zone 2” are all the rage right now, with people like Peter Attia and Andrew Huberman podcasting about it and training buddies dropping it into every conversation. Underneath the noise the idea is simpler than the internet makes it sound.',
          'Your VO2 is the size of your engine. Some people are born with a Ferrari and others a Ford Focus. You cannot change the size of the engine — that part is genetics — but you can tune whatever engine you have.',
          'Using more oxygen at rapid rates makes you faster. Keeping VO2 high is associated with longevity. That is why, at ECLYPSE Fitness Lab, the VO2 max test sits under the goal “improve health + longevity”: cardiovascular fitness first, race day second.',
        ],
      },
      {
        heading: 'Why bodyweight sits inside the number',
        paragraphs: [
          'A high VO2 max is built on other factors, first of which is bodyweight. Because the score is relative to kilograms, the same heart and the same lungs produce a higher reading on a lighter body. Diet and blood sugar are part of the equation, not a side note.',
          'That is why a VO2 max test is often paired with an RMR test. RMR is what your body burns at rest, measured rather than estimated from a calculator that has never met you. It is the test under “drop fat + optimise body comp”: real calorie needs, macros, energy, a meal plan that matches the person in the chair.',
          'The longevity packages at the lab follow that pairing. Longevity Basic is the VO2 max test on its own, at $275. Longevity Pro is VO2 max and RMR in one visit, at $450. Longevity Ultimate adds a blood lactate test as well, at $675. Every price includes the consultation.',
        ],
      },
      {
        heading: 'What a VO2 max test measures',
        paragraphs: [
          'A VO2 max test measures the maximum amount of oxygen your body can use under load. You leave with your aerobic ceiling — VO2 peak, the top of your aerobic range, the marker most tied to long-term health — and your Fat-Max intensity, the effort at which you burn the most fat per minute.',
          'Fat-Max drives fuelling strategy for long efforts. It is not a colour on a watch face. It is measured while you are actually working, on the movement you train.',
          'Track it test over test. The point of an objective marker is that the next number either moved or it did not. Maximise the return on the training you are already doing by knowing whether the engine got larger, or only felt like it did.',
        ],
      },
      {
        heading: 'VO2 max testing versus lactate testing',
        paragraphs: [
          'A blood lactate test measures how your body produces and clears lactate as intensity rises, which gives you your aerobic and threshold training zones. A VO2 max test measures the oxygen ceiling and Fat-Max. They answer different questions.',
          'Lactate testing is the better choice if you are training for a race. VO2 max is the better choice if you want a single objective marker of cardiovascular fitness. Plenty of people book both in one visit: the running and cycling Pro packages are lactate plus VO2 max at $575, and Ultimate adds RMR at $675.',
          'If the job is setting Zone 2 and threshold so easy days stay easy, that is the blood test. If the job is an honest cardiovascular number and a fuelling intensity, that is VO2 max. Gareth will tell you which is worth the money if you are not sure.',
        ],
      },
      {
        heading: 'How a VO2 max test runs in Santa Monica',
        paragraphs: [
          'You test in your own discipline — treadmill for runners, ergometer for cyclists. The data is only useful if it comes from the movement you actually train. A test session takes 30 to 40 minutes of actual testing, progressing through 4 to 8 stages of increasing intensity. Allow around an hour in total, which includes the setup and the consultation.',
          'You do not need to be a serious athlete to get tested. Roughly half the people tested at the lab are not racing anything. VO2 max and RMR are used just as often for body composition, longevity and general health as they are for performance, and the protocol is scaled to whatever you can currently do.',
          'You do not get emailed a PDF and left to interpret it. Every test is run by Gareth Thomas and read back to you in person, in plain language, with what to change on Monday morning. The machine is not what you are paying for. Plenty of places in Los Angeles own one.',
        ],
      },
      {
        heading: 'What you leave with',
        paragraphs: [
          'From a VO2 max test you leave with an objective cardiovascular number, your Fat-Max fuelling intensity, and a baseline you can compare when you come back. If lactate is part of the same visit, you also leave with personal heart-rate training zones, your aerobic and steady-state thresholds, custom workouts built from your own numbers, and a fuelling and hydration plan.',
          'A VO2-only visit is not a substitute for a lactate curve. The oxygen ceiling is the top of the range. The thresholds that divide the range into training zones come from blood.',
        ],
      },
      {
        heading: 'How often to retest, and what it costs',
        paragraphs: [
          'Retest every 9 to 12 weeks. That is long enough for a training block to produce real physiological change and short enough that the number does not go stale while you are still training to it.',
          'A VO2 max test at ECLYPSE Fitness Lab is $275, including the consultation and a full explanation of your results. The lab is at 1736 Ashland Avenue, Santa Monica, CA 90405 — Tuesday to Friday 10–7, Saturday and Sunday 12–5, closed Monday. It serves athletes across Los Angeles, the Westside, Venice, Culver City and the South Bay.',
          'Read how [VO2 max testing](/vo2-max-testing) works at the lab, then [book a test](/book), or call (858) 361-4733. There is no sales pitch. If the test is not the right one for you, Gareth will say so.',
        ],
      },
    ],
  },

  'what-is-zone-2-training': {
    eyebrow: 'Training',
    lede:
      'Zone 2 is genuinely easy aerobic work, bounded by your aerobic threshold — not a heart-rate formula derived from your age.',
    image: '/images/runzonesexample.jpg',
    imageAlt:
      'An example of running training zones used to set genuinely easy aerobic work',
    sections: [
      {
        heading: 'What Zone 2 training actually is',
        paragraphs: [
          'Zone 2 is genuinely easy aerobic work, bounded by your aerobic threshold (AeT / LT1). It is the large aerobic block in a five-zone model: harder than recovery, easier than tempo, and only “easy” if you stay under that threshold.',
          'It is not a colour your watch picked because of your birthday. Two athletes of the same age can have aerobic thresholds tens of beats apart. Zone 2 has to be measured from your own physiology or it is just a label.',
        ],
      },
      {
        heading: 'Why easy days stop being easy',
        paragraphs: [
          'The aerobic threshold is the ceiling on genuinely easy work. Most athletes train above this without knowing it, which is why easy days stop being easy.',
          'If the run you called recovery is actually tempo, you never get the aerobic work you think you booked. The harder sessions then have nothing to sit on, and the whole week drifts up. That drift is the usual reason people feel permanently “a bit tired” while their numbers go nowhere.',
          'Zone 2 exists so the easy days stay easy, and so the days that are supposed to be hard can actually be hard.',
        ],
      },
      {
        heading: 'Why an age formula cannot set Zone 2',
        paragraphs: [
          'A heart-rate zone calculated from your age is a guess about a stranger. Subtracting your age from 220, then taking a percentage, does not know where your lactate sits, how you clear it, or where easy work stops being easy for you.',
          'Watches ship with those bands because they have to ship with something. They are not your zones. Loading someone else’s percentages into a chest strap and calling it Zone 2 training is how the easy days disappear.',
          'The fix is not a better formula. It is a measurement. Zone 2 is the heart-rate, pace or power range that corresponds to your own aerobic threshold, read from your own samples.',
        ],
      },
      {
        heading: 'Five zones, not four',
        paragraphs: [
          'Training at the lab uses five zones, not a four-zone legend. The names and the relative sizes come from Gareth’s own model: Zone 2 is the wide aerobic block; Zone 4 is a narrow band.',
        ],
        list: [
          'Z1 — Recovery',
          'Z2 — Aerobic',
          'Z3 — Tempo',
          'Z4 — Threshold',
          'Z5 — VO2 max',
        ],
      },
      {
        heading: 'Where Zone 2 sits on a typical lactate curve',
        paragraphs: [
          'On a typical lactate curve, the top of Zone 2 is 2 mmol (AeT / LT1). Zone 4 is the narrow band just below and just above 4 mmol (SST / LT2). Those two marks are where training zones actually begin and end — not where a formula based on your age guesses they do.',
          'Those millimole figures describe a typical staged response. They are not a visitor’s personal numbers, and they are not a target you should try to hit by staring at a handheld meter on the bike path. Your Zone 2 is the range Gareth reads off your own curve.',
          'Steady-state threshold — SST / LT2 — is a different mark: the hardest intensity you can hold at a stable lactate, and the number that sets realistic race pace. Confusing that with Zone 2 is how “easy” becomes a threshold session.',
        ],
      },
      {
        heading: 'How a lactate test finds your Zone 2',
        paragraphs: [
          'A blood lactate test measures how your body produces and clears lactate as intensity rises, which gives you your aerobic and threshold training zones. That is the test that sets Zone 2. It is $350 at the lab, and it is the Basic running and cycling package.',
          'You test in your own discipline. The session steps up through 4 to 8 stages over 30 to 40 minutes. A small sample is taken after each stage; you keep moving. Gareth reads the curve with you in person rather than emailing a PDF.',
          'You leave with personal heart-rate training zones — and pace or power ranges — that you can load straight into a watch or head unit. The top of Zone 2 is on that list. So is the threshold band, so the hard work has a ceiling as well as a floor.',
        ],
      },
      {
        heading: 'What to do with Zone 2 once you have it',
        paragraphs: [
          'Zone 2 is the work that builds the aerobic base the harder zones sit on. It is not the only training you do. Tempo, threshold and VO2 max work have their own bands. The point of measuring Zone 2 is so you stop spending the week in the three zones at once.',
          'If you are being coached, every workout is uploaded to TrainingPeaks and can be pushed to your watch with the right band attached. You train with a chest-strap heart-rate monitor, not a wrist guess, and you keep a daily training journal so the file is not just a number.',
          'Plenty of people who train this way are not racing. Training seriously without pinning on a number is a superb way to stay fit. The zones still have to be real, or “easy aerobic work” is just a mood.',
        ],
      },
      {
        heading: 'Keep the top of Zone 2 current',
        paragraphs: [
          'Retest every 9 to 12 weeks. That is long enough for a training block to move the threshold and short enough that you are not still training to last season’s easy. As fitness changes, the top of Zone 2 moves. The watch does not notice unless you tell it.',
          'If you want the zones rather than the slogan, book a [blood lactate test](/lactate-threshold-testing). That is the measurement. The lab is at 1736 Ashland Avenue, Santa Monica, CA 90405. Call (858) 361-4733.',
        ],
      },
    ],
  },

  'what-is-lactate-threshold-testing': {
    eyebrow: 'The Lab',
    lede:
      'A blood lactate test finds the intensities where your training zones actually begin and end, by measuring how your body produces and clears lactate as the work gets harder.',
    image: '/images/lactatethresholdtestinglosangeles.jpg',
    imageAlt:
      'Blood lactate threshold testing on a treadmill at the Santa Monica lab',
    sections: [
      {
        heading: 'What lactate threshold testing is',
        paragraphs: [
          'A blood lactate test measures how your body produces and clears lactate as intensity rises, which gives you your aerobic and threshold training zones. It is the most precise picture of the intensity you can actually hold — and the test to book when the goal is to get faster and improve performance.',
          'It is not a VO2 max test. VO2 max measures the maximum amount of oxygen your body can use during intense exercise, which gives you an aerobic ceiling and a Fat-Max fuelling intensity. Lactate testing maps the thresholds underneath that ceiling. Race performance lives in those thresholds.',
        ],
      },
      {
        heading: 'The two marks the test is looking for',
        paragraphs: [
          'The aerobic threshold, written AeT / LT1, is the ceiling on genuinely easy work. Most athletes train above this without knowing it. The steady-state threshold, written SST / LT2, is the hardest intensity you can hold at a stable lactate. That is the number that sets realistic race pace.',
          'On a typical lactate curve the first mark sits at the top of Zone 2, at 2 mmol. The second sits in a narrow Zone 4 band just below and just above 4 mmol. Those millimole figures are illustrative of a staged response. They are not your personal numbers. Your marks are the ones on your own curve, from your own samples.',
          'Fat-Max — peak fat oxidation, the intensity at which you burn the most fat per minute — and VO2 peak sit on the same visit if you add a VO2 max test. The blood test on its own is the zones and the two thresholds.',
        ],
      },
      {
        heading: 'What actually happens in the hour',
        paragraphs: [
          'A test session takes 30 to 40 minutes of actual testing, progressing through 4 to 8 stages. Allow around an hour in total for setup and the consultation. You do not need to know any physiology before you arrive. You do not need to be fit. The protocol is scaled to whatever you can currently do.',
        ],
        list: [
          'Sport-specific setup. You test in your own discipline — treadmill for runners, ergometer for cyclists, pool for swimmers. The data is only useful if it comes from the movement you actually train.',
          'Staged, progressive load. The session steps up through 4–8 stages of increasing intensity. Each stage is held long enough for your body to settle at that effort before anything is recorded.',
          'A sample after every stage. A small blood sample is taken at the end of each stage with a fresh single-use needle. It takes seconds and you keep moving between stages.',
          'Gareth reads it with you. You do not get emailed a PDF and left to interpret it. Every test is read back in person, in plain language, with what to change on Monday morning.',
        ],
      },
      {
        heading: 'Does the blood sampling hurt?',
        paragraphs: [
          'It is a small sample taken from a fingertip or earlobe with a fresh single-use needle after each stage, and it takes a few seconds. Most people describe it as a brief pinprick. You stay on the treadmill or bike throughout.',
          'The needle is single-use and fresh at every stage. You are not taken off the machine to queue for a lab tech. Gareth takes the sample, the stage ends, the next one starts. That is the whole interruption.',
        ],
      },
      {
        heading: 'The five training zones you leave with',
        paragraphs: [
          'The zones are delivered as heart-rate and pace or power ranges you can load straight into a watch or head unit. They follow a five-zone model: a wide aerobic block, a narrow threshold band, and VO2 max work at the top.',
        ],
        list: [
          'Z1 — Recovery',
          'Z2 — Aerobic (top of the zone is AeT / LT1)',
          'Z3 — Tempo',
          'Z4 — Threshold (the narrow band around SST / LT2)',
          'Z5 — VO2 max',
        ],
      },
      {
        heading: 'What else is in the consult',
        paragraphs: [
          'You also leave with custom workouts built from your own numbers, and a fuelling and hydration plan. The consult is the point of the visit. The samples are how the numbers are made; the hour is how you find out what to do with them on Monday.',
          'Every test at the lab is run by Gareth Thomas and explained by him. That is the difference. The equipment is not rare. A coach who will stand next to the curve and tell you the truth about your easy days is.',
        ],
      },
      {
        heading: 'Who it is for, and what it costs',
        paragraphs: [
          'You do not need to be a serious athlete. Roughly half the people tested at the lab are not racing anything. The protocol scales. Driven people who want to reach their true potential — including people who hate racing and still want to train properly — are the usual appointment.',
          'A blood lactate test is $350, and that is the Basic running and cycling package. Pro adds VO2 max at $575. Ultimate adds VO2 max and RMR at $675. For triathlon, Basic is lactate on bike and run at $575; Basic + is swim, bike and run at $775; Pro, Ultimate and Ultimate + add VO2 max and RMR from $950 to $1,250.',
          'Every price includes the consultation and a full explanation of your results. Not sure which package? Call (858) 361-4733 and Gareth will tell you which one is worth your money.',
        ],
      },
      {
        heading: 'How often to come back',
        paragraphs: [
          'Come back every 9 to 12 weeks. That is long enough for a training block to produce real physiological change and short enough that your zones do not drift out of date while you are still training to them.',
          'The lab is ECLYPSE Fitness Lab at 1736 Ashland Avenue, Santa Monica, CA 90405, Tuesday to Friday 10–7, Saturday and Sunday 12–5, closed Monday. Read the [lactate threshold testing](/lactate-threshold-testing) page for the booking path, or call the number above.',
        ],
      },
    ],
  },

  'how-to-use-a-heart-rate-monitor': {
    eyebrow: 'Coaching',
    lede:
      'A heart-rate monitor only works if the zones in it are yours — set from a lactate test, not from a formula that subtracts your age from 220.',
    image: '/images/lchrmoriginal.jpg',
    imageAlt: 'A chest-strap heart-rate monitor, the essential for training to zones',
    sections: [
      {
        heading: 'The monitor is only as good as the zones in it',
        paragraphs: [
          'A heart-rate monitor only works if the zones programmed into it are yours. The strap records beats. The zones tell you what those beats mean. If the bands came from an age formula, you are training to a guess about a stranger, with a very accurate clock.',
          'Use it this way: get the zones measured, load them into the monitor and the watch, train with a chest strap, and send the file back after every session. Everything else — the watch face, the charts, the recovery score — is secondary to that loop.',
        ],
      },
      {
        heading: 'A chest strap is the essential',
        paragraphs: [
          'The essentials are the basic kit for your sport plus a heart-rate monitor with a chest strap. That is the piece every athlete Gareth coaches actually trains with. Wrist optical sensors are not what the programme is built on.',
          'Every athlete also keeps a daily training journal. The monitor says what the heart did. The journal says whether you slept, travelled, or showed up already cooked. Notes on energy, stress or travel sit on the session so the file is readable.',
        ],
      },
      {
        heading: 'Zones have to be yours',
        paragraphs: [
          'A heart-rate zone calculated from your age is a guess about a stranger. Subtracting your age from 220, then painting five colours onto the result, does not know your aerobic threshold, your steady-state threshold, or how you clear lactate.',
          'Two people with the same age and a similar maximum heart rate can have Zone 2 in completely different places. Training to the default bands is how easy days stop being easy: the monitor is honest about the beats, and wrong about the work.',
          'Your zones are Recovery, Aerobic, Tempo, Threshold and VO2 max — Z1 through Z5 — delivered as heart-rate and pace or power ranges. They come from blood, not from a menu.',
        ],
      },
      {
        heading: 'What a lactate test puts in the monitor',
        paragraphs: [
          'A blood lactate test measures how your body produces and clears lactate as intensity rises, which gives you your aerobic and threshold training zones. That is the appointment that fills the monitor with numbers that belong to you. It is $350 at the lab.',
          'The top of Zone 2 is your aerobic threshold (AeT / LT1). The threshold band sits around your steady-state threshold (SST / LT2). On a typical curve those marks are near 2 mmol and 4 mmol; those figures are illustrative. Your numbers are the ones from your samples, read back to you in person.',
          'Load the ranges straight into the watch or head unit. From then on, “easy” means staying in Zone 2 because that is where your lactate said easy is — not because the session felt conversational that morning.',
        ],
      },
      {
        heading: 'Day to day, on TrainingPeaks',
        paragraphs: [
          'Every workout is uploaded to TrainingPeaks and can be pushed straight to your watch for in-workout guidance. Your data uploads back automatically after each session. Gareth reviews it at the frequency your coaching tier sets.',
          'Gold is $300 a month, with bi-weekly data review, text and email, and a monthly call. Platinum is $600, with weekly review, phone support, and a bi-weekly call. VIP is $900, with twice-weekly review, a weekly call, a one-to-one workout session, and custom food and fuel planning. All three include a 360° custom program plus strength, mobility and core.',
          'Contact happens by call, video, text and email, again depending on tier. The monitor is how the work is prescribed and how it is checked. Without it there is no file to review.',
        ],
      },
      {
        heading: 'Wearables that help — and ones that do not set zones',
        paragraphs: [
          'A sleep tracker such as an OURA ring or WHOOP is useful. Sleep and health data from the wearable upload alongside the session, and that context belongs in the review. It does not set training zones, and it is not a substitute for a chest strap.',
          'If you ride, a power meter sits next to the strap: pace or power ranges are delivered with the heart-rate bands, and an indoor trainer makes the prescribed work possible when the road does not. Access to a gym, a track or treadmill, regular massage or chiropractic care, and a budget for fuel and supplements all help. None of them replace measured zones in the monitor.',
        ],
      },
      {
        heading: 'Testing first, then the programme',
        paragraphs: [
          'Most people come to the lab in Santa Monica for their initial testing so the programme starts from real data. You do not have to live in Los Angeles, or even in the USA, to be coached — Gareth coaches athletes all over the world, many of whom travel constantly. Where a trip to the lab is not possible, testing is arranged with a provider local to you.',
          'The loop is the same either way: measure the zones, put them in the chest strap, train, send the file, adjust. An hour a day, programmed around the time you genuinely have, goes a very long way. Building the plan around that time is the whole point of [coaching](/coaching).',
        ],
      },
      {
        heading: 'Keep the zones in the monitor current',
        paragraphs: [
          'Retest every 9 to 12 weeks. Fitness moves the thresholds. A strap still wearing last block’s Zone 2 will let you drift just like an age formula did, only with more confidence.',
          'A blood lactate test is $350 at ECLYPSE Fitness Lab, 1736 Ashland Avenue, Santa Monica, CA 90405. Read [lactate threshold testing](/lactate-threshold-testing) for the protocol, then put the ranges in the monitor and train. Call (858) 361-4733.',
        ],
      },
    ],
  },

  ...harvestedBodies,
} as Record<PostSlug, PostBody>;

for (const { slug } of POSTS) {
  if (!POST_BODIES[slug]) {
    throw new Error(`Missing POST_BODIES for ${slug}`);
  }
}
