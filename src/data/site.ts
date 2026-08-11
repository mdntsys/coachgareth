/**
 * Single source of truth for site content.
 *
 * Everything here was harvested from the two live Squarespace sites on
 * 2026-08-11 — no invented facts, figures, credentials or quotes.
 *
 * ⚠ TWO ITEMS NEED GARETH TO CONFIRM BEFORE THIS GOES LIVE — see PRICE_CONFLICT
 * and the note on TESTIMONIALS below. Publishing prices is a core part of the
 * fix (it is what the AI models quote), so getting them right matters more here
 * than on a normal site.
 */

export const NAP = {
  legalName: 'Coach Gareth — ECLYPSE Performance Lab',
  labName: 'ECLYPSE Lab',
  personName: 'Gareth Thomas',
  street: '1736 Ashland Avenue',
  city: 'Santa Monica',
  region: 'CA',
  postal: '90405',
  country: 'US',
  // Area code is San Diego on a Santa Monica business. Not a problem for
  // ranking, but it is the number on the Coach Gareth GBP so it is the one
  // that must appear everywhere for NAP consistency.
  phone: '(858) 361-4733',
  phoneHref: 'tel:+18583614733',
  // eclypse.fit publishes info@eclypse.fit; coachgareth.com publishes
  // cg@coachgareth.com. Using the surviving domain's address.
  email: 'cg@coachgareth.com',
  mapsUrl: 'https://maps.google.com/?q=1736+Ashland+Avenue,+Santa+Monica,+CA+90405',
} as const;

export const HOURS = [
  { day: 'Monday', open: null, close: null },
  { day: 'Tuesday', open: '10:00', close: '19:00' },
  { day: 'Wednesday', open: '10:00', close: '19:00' },
  { day: 'Thursday', open: '10:00', close: '19:00' },
  { day: 'Friday', open: '10:00', close: '19:00' },
  { day: 'Saturday', open: '12:00', close: '17:00' },
  { day: 'Sunday', open: '12:00', close: '17:00' },
] as const;

/**
 * ⚠ PRICE CONFLICT — the two live sites disagree on two of the three tests.
 *
 *              eclypse.fit    coachgareth.com/the-lab
 *   Lactate    $350           $350   (+ $600 bike&run, $900 swim/bike/run)
 *   VO2 max    $275           $350   (+ $600 bike&run)
 *   RMR        $175           $150
 *   Combo      $450 (VO2+RMR) $700 "Ultimate" single sport / $1,250 triathlon
 *
 * Using the eclypse.fit figures below because that is the newer property and
 * the one built specifically for the lab. The multi-sport package tiers are
 * deliberately NOT rendered yet — they only exist on one site, at prices that
 * contradict the other, and inventing a reconciliation would be worse than
 * leaving them off the first draft. Confirm all of it with Gareth.
 */
export const PRICE_CONFLICT_UNRESOLVED = true;

export const TESTS = [
  {
    slug: 'lactate-threshold-testing',
    name: 'Blood Lactate Test',
    price: 350,
    goal: 'Get faster',
    goalLine: 'Race performance & training zones',
    tagline:
      'The most precise picture of how your body clears lactate — and the intensity you can actually hold.',
    bullets: [
      'Find your true aerobic and threshold zones',
      'Get custom workouts built from your own numbers',
      'Optimise your hydration plan',
      'Improve race performance',
    ],
    image: '/images/lactatethresholdtestinglosangeles.jpg',
    zone: 'zone-3',
  },
  {
    slug: 'vo2-max-testing',
    name: 'VO2 Max Test',
    price: 275,
    goal: 'Know your ceiling',
    goalLine: 'Cardiovascular fitness & longevity',
    tagline:
      'The maximum amount of oxygen your body can use under load — the single best-studied marker of cardiovascular fitness.',
    bullets: [
      'Measure cardiovascular fitness objectively',
      'Find your Fat-Max fuelling intensity',
      'Track improvement test over test',
      'Maximise the return on your training',
    ],
    image: '/images/vo2maxtestlosangelesrunner.jpg',
    zone: 'zone-1',
  },
  {
    slug: 'rmr-testing',
    name: 'RMR Test',
    price: 175,
    goal: 'Change body composition',
    goalLine: 'Metabolism & fuelling',
    tagline:
      'What your body burns at rest, measured rather than estimated from a calculator that has never met you.',
    bullets: [
      'Understand your real calorie needs',
      'Balance macros for fat loss',
      'Support energy and immune health',
      'Set up a calorie and meal plan',
    ],
    image: '/images/restingmetabolicratetestlosangeles.png',
    zone: 'zone-2',
  },
] as const;

export const COMBO = {
  name: 'VO2 Max + RMR',
  price: 450,
  note: 'Both tests in one visit, one consultation.',
} as const;

/** Protocol facts, all from coachgareth.com/the-lab. */
export const PROTOCOL = {
  durationMin: '30–40',
  stages: '4–8',
  retestWeeks: '9–12',
  steps: [
    {
      n: '01',
      title: 'Sport-specific setup',
      body: 'You test in your own discipline — treadmill for runners, ergometer for cyclists, pool for swimmers. The data is only useful if it comes from the movement you actually train.',
    },
    {
      n: '02',
      title: 'Staged, progressive load',
      body: 'The session steps up through 4–8 stages of increasing intensity. Each stage is held long enough for your body to settle at that effort before anything is recorded.',
    },
    {
      n: '03',
      title: 'A sample after every stage',
      body: 'A small blood sample is taken at the end of each stage with a fresh single-use needle. It takes seconds and you keep moving between stages.',
    },
    {
      n: '04',
      title: 'Gareth reads it with you',
      body: 'You do not get emailed a PDF and left to interpret it. Every test is read back to you in person, in plain language, with what to change on Monday morning.',
    },
  ],
} as const;

export const THRESHOLDS = [
  {
    abbr: 'AeT / LT1',
    name: 'Aerobic Threshold',
    body: 'The ceiling on genuinely easy work. Most athletes train above this without knowing it, which is why easy days stop being easy.',
    zone: 'zone-2',
  },
  {
    abbr: 'SST / LT2',
    name: 'Steady State Threshold',
    body: 'The hardest intensity you can hold at a stable lactate. This is the number that sets realistic race pace.',
    zone: 'zone-3',
  },
  {
    abbr: 'Fat-Max',
    name: 'Peak Fat Oxidation',
    body: 'The intensity at which you burn the most fat per minute. It drives fuelling strategy for long efforts.',
    zone: 'zone-1',
  },
  {
    abbr: 'VO2 peak',
    name: 'Maximum Aerobic Capacity',
    body: 'The top of your aerobic range. It sets the upper bound on everything below it and is the marker most tied to long-term health.',
    zone: 'zone-4',
  },
] as const;

export const ZONES = [
  { n: 1, name: 'Recovery', zone: 'zone-1', pct: 16 },
  { n: 2, name: 'Aerobic', zone: 'zone-2', pct: 34 },
  { n: 3, name: 'Lactate Threshold', zone: 'zone-3', pct: 30 },
  { n: 4, name: 'Anaerobic Capacity', zone: 'zone-4', pct: 20 },
] as const;

export const CREDENTIALS = [
  { value: '30+', label: 'Years coaching endurance athletes' },
  { value: '6', label: 'Years head coach, UCLA Triathlon' },
  { value: 'GB', label: 'Raced for Team Great Britain' },
  { value: '75', label: 'Five-star reviews across both listings' },
] as const;

/**
 * ⚠ Harvested from the live coachgareth.com and eclypse.fit homepages. Two of
 * these were returned truncated by the extractor. These are real named people,
 * so confirm the exact wording with Gareth before this is published — a
 * misquoted client testimonial is the one error on this page that would
 * genuinely embarrass him.
 */
export const TESTIMONIALS = [
  {
    quote:
      'Coach Gareth and I have been working together for more than 2 years. Thanks to his detailed analysis and personalised coaching plans, I was able to shave off over 40 minutes from my marathon time.',
    name: 'Ali Arsan',
    detail: 'Sub-2:50 marathon',
    image: '/images/aliarsanrunnersml.jpeg',
  },
  {
    quote:
      'I had such a great experience during my lactate & VO2 assessments. Gareth is extremely knowledgeable and took the time to break everything down in a way that really helped me understand my current fitness level.',
    name: 'Jessica Choi',
    detail: 'Marathon runner',
    image: null,
  },
  {
    quote:
      'When I started working with Coach Gareth, I immediately knew his attention to detail and scientific approach was a winning choice.',
    name: 'Jamey Yanik',
    detail: 'Top 5, Leadville 100',
    image: '/images/jameyyanikleadville.png',
  },
  {
    quote:
      'Coach Gareth has been training me for many years. He develops plans using periodisation and lactate data to maximise performance.',
    name: 'Brian Temple',
    detail: 'Kona Ironman',
    image: '/images/templekona.jpg',
  },
] as const;

/**
 * FAQ copy is written to be quotable by an AI model: a direct answer in the
 * first sentence, specifics second. This is the same structure the DR-8
 * Glendale competitor uses to earn 40 AI citations against this business's 0
 * (findings §0.6), and it is rendered as FAQPage JSON-LD as well as on-page.
 */
export const FAQS = [
  {
    q: 'What is the difference between a lactate test and a VO2 max test?',
    a: 'A blood lactate test measures how your body produces and clears lactate as intensity rises, which gives you your aerobic and threshold training zones. A VO2 max test measures the maximum amount of oxygen your body can use during intense exercise, which gives you your aerobic ceiling and your Fat-Max fuelling intensity. Lactate testing is the better choice if you are training for a race; VO2 max is the better choice if you want a single objective marker of cardiovascular fitness.',
  },
  {
    q: 'How long does a test take?',
    a: 'A test session takes 30 to 40 minutes of actual testing, progressing through 4 to 8 stages. Allow around an hour in total, which includes the setup and the consultation where Gareth reads your results back to you.',
  },
  {
    q: 'Does the blood sampling hurt?',
    a: 'It is a small sample taken from a fingertip or earlobe with a fresh single-use needle after each stage, and it takes a few seconds. Most people describe it as a brief pinprick. You stay on the treadmill or bike throughout.',
  },
  {
    q: 'Do I need to be a serious athlete to get tested?',
    a: 'No. Roughly half the people tested at the lab are not racing anything. RMR and VO2 max testing are used just as often for body composition, longevity and general health as they are for performance, and the protocol is scaled to whatever you can currently do.',
  },
  {
    q: 'How often should I retest?',
    a: 'Every 9 to 12 weeks. That is long enough for a training block to produce real physiological change and short enough that your zones do not drift out of date while you are still training to them.',
  },
  {
    q: 'What do I actually leave with?',
    a: 'You leave with your personal heart-rate training zones, your aerobic and steady-state thresholds, your Fat-Max intensity, custom workouts built from your own numbers, and a fuelling and hydration plan. Every test is explained in person rather than emailed over as a report.',
  },
  {
    q: 'How much does testing cost in Santa Monica?',
    a: `A blood lactate test is $${TESTS[0].price}, a VO2 max test is $${TESTS[1].price}, and an RMR test is $${TESTS[2].price}. A combined VO2 max and RMR test in one visit is $${COMBO.price}. Every price includes the consultation and a full explanation of your results.`,
  },
  {
    q: 'Where is the lab?',
    a: `The lab is at ${NAP.street}, ${NAP.city}, ${NAP.region} ${NAP.postal}, and serves athletes across Los Angeles, the Westside, Venice, Culver City and the South Bay. Call ${NAP.phone} to book.`,
  },
] as const;

export const NAV = [
  { href: '#tests', label: 'Testing' },
  { href: '#protocol', label: 'What happens' },
  { href: '#results', label: 'Your results' },
  { href: '#coaching', label: 'Coaching' },
  { href: '#faq', label: 'FAQ' },
] as const;
