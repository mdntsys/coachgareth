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

/**
 * Structure and wording below follow Gareth's own hand-drawn layout (sent
 * 2026-08-11): one site at coachgareth.com, split into two halves — COACHING
 * on the left, THE LAB on the right — with "Putting you first" as the line
 * tying them together. Where his sketch and the harvested site copy disagree,
 * the sketch wins: it is the more recent statement of what he wants to sell.
 */
export const TAGLINE = 'Putting you first';

export const NAP = {
  legalName: 'Coach Gareth — ECLYPSE Fitness Lab',
  // His sketch names it "ECLYPSE FITNESS LAB created by Coach Gareth".
  labName: 'ECLYPSE Fitness Lab',
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
export const PRICE_CONFLICT_UNRESOLVED = false;

export const TESTS = [
  {
    slug: 'lactate-threshold-testing',
    name: 'Blood Lactate Test',
    price: 350,
    // Goal wording is Gareth's own, verbatim from his sketch:
    // "get faster + improve performance — Lactate".
    goal: 'Get faster + improve performance',
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
    // The key test. Gareth: buttons and this card use the live 100% red.
    zone: 'signal',
  },
  {
    slug: 'vo2-max-testing',
    name: 'VO2 Max Test',
    price: 275,
    goal: 'Improve health + longevity',
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
    goal: 'Drop fat + optimise body comp',
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
    zone: 'zone-4',
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
    zone: 'zone-5',
  },
] as const;

/**
 * Zone names, colours and relative widths from Gareth's 2026-08-19 graphic.
 * Widths match the curve (Z4 is the narrow band around 4 mmol). Do not go
 * back to a 4-zone legend — his model is five.
 */
export const ZONES = [
  { n: 1, name: 'Recovery', zone: 'zone-1', pct: 14 },
  { n: 2, name: 'Aerobic', zone: 'zone-2', pct: 32 },
  { n: 3, name: 'Tempo', zone: 'zone-3', pct: 22 },
  { n: 4, name: 'Threshold', zone: 'zone-4', pct: 9 },
  { n: 5, name: 'VO2 max', zone: 'zone-5', pct: 23 },
] as const;

/**
 * COACHING — the left half of Gareth's sketch. None of this existed in the
 * first build; it comes entirely from the layout he drew.
 *
 * RESOLVED 2026-08-12. Gareth pointed us at the source: the tiers are published
 * on coachgareth.com's sport pages (/triathlon, /running, /cycling) as a PNG
 * titled "Coach Gareth Coaching Levels June 2026", headed "Sport specific
 * monthly coaching & consulting". Everything below is transcribed from it, so
 * `includes` is now his own wording rather than the placeholder it was.
 *
 * That it lives only inside an image is itself a finding: nothing in that table
 * is machine-readable today, so no search engine or AI model can quote his
 * coaching prices or what they include. Rebuilding it as real text is a
 * straight GEO win on top of being editable.
 */
export const COACHING = {
  headline: 'World-class coaching for endurance athletes of all abilities',
  positioning: 'Coach and sports scientist — the “Lactate Guru”',
  // Gareth's own preferred wording (2026-08-12), replacing "has trained world
  // champions". His phrasing is both stronger and broader — national titles are
  // a bigger pool than world titles, so the claim covers more of his actual
  // record while reading as a bigger statement, not a smaller one.
  credential: 'Coach to world & national champions · 30+ years',
  disciplines: [
    { name: 'Triathlon', detail: 'including Ironman' },
    { name: 'Running', detail: 'marathon and ultra' },
    { name: 'Cycling', detail: 'road, gravel and track' },
    { name: 'Longevity', detail: 'training to stay strong for decades' },
  ],
  tiersKicker: 'Sport-specific monthly coaching & consulting',
  tiers: [
    {
      name: 'Gold',
      price: 300,
      unconfirmed: false,
      includes: [
        '360° custom program',
        'Strength, mobility & core',
        'Bi-weekly data review',
        'Text & email support',
        'Monthly call review',
      ],
    },
    {
      name: 'Platinum',
      price: 600,
      unconfirmed: false,
      includes: [
        '360° custom program',
        'Strength, mobility & core',
        'Weekly data review',
        'Text, email & phone support',
        'Bi-weekly call review',
      ],
    },
    {
      name: 'VIP',
      price: 900,
      unconfirmed: false,
      includes: [
        '360° custom program',
        'Strength, mobility & core',
        'Twice-weekly data review',
        'Text, email & phone support',
        'Weekly call review',
        'A one-to-one workout session',
        'Custom food & fuel planning',
      ],
    },
  ],
} as const;

/**
 * SQUARE STORE — the products Gareth already sells through Square, harvested
 * from coachgareth.com/store plus the "other options" lines on the sport pages,
 * then reconciled against Square's own checkout payload on 2026-08-26.
 *
 * Every price, name, weekly-mileage figure and delivery note below was read
 * back off the live Square item so the page can never quote a number the
 * checkout then contradicts. Three marathon peaks were wrong before that
 * reconciliation (Beginner, Sub-4 and Sub-3.30 all overstated the peak week).
 *
 * Gareth confirmed on 2026-08-26 that these sell, and asked that they sit
 * lower down on /coaching rather than in a separate shop — monthly coaching
 * stays the main path.
 *
 * The links are Square-hosted checkouts, so they are external, `nofollow`
 * (a checkout is not an editorial endorsement and Square will never link back)
 * and deliberately NOT `noreferrer` — dropping the referrer would blind Square
 * to the fact the sale came from this site, which is the one attribution
 * signal Gareth gets for free.
 */
const SQUARE = 'https://checkout.square.site/merchant/FE9XZ8B9BXX24/checkout';

export const STORE = {
  kicker: 'Other options',
  headline: 'Plans, programs and one2one sessions',
  lede: 'Monthly coaching is the main path. These are the store items that already sell — buy them outright, no call required.',
  groups: [
    {
      id: 'marathon-plans',
      name: '18-week marathon plans',
      heading: '18-week marathon training plans',
      intro:
        'Complete 18-week training plans. Scientifically proven run workouts, integrated strength training, a video library for injury prevention and recovery, a hydration and fueling guide, and a pacing guide. The PDFs are emailed the moment payment clears — train the same day.',
      note: 'A plan on its own. It does not include ongoing consulting or interaction with Gareth.',
      delivery: 'PDF, emailed instantly',
      items: [
        {
          name: 'Beginner',
          detail:
            '3–4 runs per week. Starts at 10–15 miles per week and peaks at 30–40 (up to 8 hours per week).',
          price: 29,
          duration: null,
          href: `${SQUARE}/HYRCOKWOYA4QUX3RTRJYFD5S`,
        },
        {
          name: 'Sub 4 hours',
          detail:
            '4 runs per week. Starts at 15–20 miles per week and peaks at 40–45 (up to 8 hours per week).',
          price: 29,
          duration: null,
          href: `${SQUARE}/LYNHJBBEUXO3QNBZKYZCRHJS`,
        },
        {
          name: 'Sub 3:30',
          detail:
            '4–5 runs per week. Starts at 20–25 miles per week and peaks at 45–50 (up to 10 hours per week).',
          price: 29,
          duration: null,
          href: `${SQUARE}/BO257DSIUDHERS2HIMECGNV5`,
        },
        {
          name: 'Sub 3 hours',
          detail:
            '5+ runs per week. Starts at 20–25 miles per week and peaks at 50–60 (up to 10 hours per week).',
          price: 29,
          duration: null,
          href: `${SQUARE}/O6IIKWQRRAND4WZN5HDFKZ7C`,
        },
      ],
    },
    {
      id: 'custom-programs',
      name: 'Custom 12-week programs',
      heading: 'Custom 12-week training programs',
      intro:
        'A custom training program for the self-motivated athlete with a specific race goal. Daily sessions for endurance, mobility, recovery and strength, plus articles on nutrition, recovery, mental training and race preparation. Delivered as an interactive PDF or straight into TrainingPeaks, with Zwift, TrainingPeaks Virtual and Garmin workouts where they apply. After purchase Gareth sends a Q&A so he can build the plan around you.',
      note: 'Built for you once. It does not include ongoing consulting or interaction with Gareth — that is monthly coaching.',
      delivery: 'PDF or TrainingPeaks',
      items: [
        {
          name: 'Running',
          detail: 'A 12-week custom running program built around your goal race.',
          price: 295,
          duration: null,
          href: `${SQUARE}/WOBMHULXPAYQJW4N4UNCKNSH`,
        },
        {
          name: 'Cycling',
          detail: 'A 12-week custom cycling program built around your goal event.',
          price: 295,
          duration: null,
          href: `${SQUARE}/NEMVMOLNCUFCKEAVZ7ZBAFZL`,
        },
        {
          name: 'Triathlon',
          detail:
            'A 12-week custom triathlon program across all three disciplines.',
          price: 295,
          duration: null,
          href: `${SQUARE}/CKEBCWPL6DOKPBNDQSYKKIHX`,
        },
      ],
    },
    {
      id: 'one2one',
      name: 'One2one sessions',
      heading: 'One2one sessions',
      intro:
        'Single sessions, bought in advance. After purchase Gareth reaches out to set the appointment.',
      note: null,
      delivery: 'Booked with Gareth after purchase',
      items: [
        {
          name: 'Online consultation',
          detail:
            'One2one consulting on any athletic need, over Google Meet, Zoom, FaceTime or phone.',
          price: 200,
          duration: '60 minutes',
          href: `${SQUARE}/AHCOKZ5V7OIFS65JEQASRP6C`,
        },
        {
          name: 'Swim video coaching',
          detail:
            'In-person one2one swim coaching with video analysis of your stroke and a drills prescription.',
          price: 200,
          duration: '60 minutes',
          href: `${SQUARE}/5L427ASEDSGTAEJCISKNO73T`,
        },
        {
          name: 'Run technique coaching',
          detail:
            'One2one session with video analysis of your stride and a technical drills workout.',
          price: 175,
          duration: '60 minutes',
          href: `${SQUARE}/REHQHOXW5MEEMYMNZRRK36SQ`,
        },
        {
          name: 'Race fueling Q&A',
          detail:
            'An online discussion plus a prescription for drinks, gels and supplements for training, racing and recovery.',
          price: 150,
          duration: '30 minutes',
          href: `${SQUARE}/HYPXEB22PQXZYPOQUHWEQNJ4`,
        },
      ],
    },
    {
      id: 'nutrition-coaching',
      name: 'Nutrition coaching',
      heading: 'Nutrition coaching for endurance athletes',
      intro:
        'A three-month overhaul of food, fueling and supplementation — body composition, immune health, race fuel and training fuel. It starts with an in-depth analysis of current diet, gut and health issues, including supplements and race fuels, then a custom prescription and food rotation plan. Bi-weekly 15-minute follow-up calls and a 30-minute three-month check-in keep it on track.',
      note: null,
      delivery: 'Three months, starting with an intake call',
      items: [
        {
          name: '3-month nutrition coaching',
          detail:
            'Includes an in-person RMR test at the Santa Monica lab for local athletes.',
          price: 750,
          duration: null,
          href: `${SQUARE}/RYCPFOOZBAVV4GFZRWTDVAMU`,
        },
      ],
    },
  ],
} as const;

/**
 * SPORT-SPECIFIC TESTING PACKAGES — Gareth's request (#6): show these instead
 * of the bare VO2+RMR combo. Transcribed from the pricing table published on
 * eclypse.fit/pricing, which is also only an image today.
 *
 * This table incidentally SETTLES the price conflict flagged on 2026-08-11.
 * Longevity Basic (VO2 alone) is $275 and Longevity Pro (VO2 + RMR) is $450,
 * which matches eclypse.fit's individual prices exactly and implies RMR at
 * $175. So the eclypse.fit figures are current and the older
 * coachgareth.com/the-lab page ($350 VO2, $150 RMR) is stale.
 */
export const PACKAGES = [
  {
    sport: 'Running',
    tiers: [
      { name: 'Basic', tests: ['Lactate'], price: 350 },
      { name: 'Pro', tests: ['Lactate', 'VO2 max'], price: 575 },
      { name: 'Ultimate', tests: ['Lactate', 'VO2 max', 'RMR'], price: 675 },
    ],
  },
  {
    sport: 'Cycling',
    tiers: [
      { name: 'Basic', tests: ['Lactate'], price: 350 },
      { name: 'Pro', tests: ['Lactate', 'VO2 max'], price: 575 },
      { name: 'Ultimate', tests: ['Lactate', 'VO2 max', 'RMR'], price: 675 },
    ],
  },
  {
    sport: 'Longevity',
    tiers: [
      { name: 'Basic', tests: ['VO2 max'], price: 275 },
      { name: 'Pro', tests: ['VO2 max', 'RMR'], price: 450 },
      { name: 'Ultimate', tests: ['Lactate', 'VO2 max', 'RMR'], price: 675 },
    ],
  },
  {
    sport: 'Triathlon',
    tiers: [
      { name: 'Basic', tests: ['Lactate — bike & run'], price: 575 },
      { name: 'Basic +', tests: ['Lactate — swim, bike & run'], price: 775 },
      {
        name: 'Pro',
        tests: ['Lactate — swim, bike & run', 'VO2 max — bike'],
        price: 950,
      },
      {
        name: 'Ultimate',
        tests: ['Lactate — swim, bike & run', 'VO2 max — bike', 'RMR'],
        price: 1050,
      },
      {
        name: 'Ultimate +',
        tests: ['Lactate — swim, bike & run', 'VO2 max — bike & run', 'RMR'],
        price: 1250,
      },
    ],
  },
] as const;

export const CREDENTIALS = [
  { value: '30+', label: 'Years coaching endurance athletes' },
  { value: '6', label: 'Years head coach, UCLA Triathlon' },
  // Four items exactly — the strip is a 4-column grid and a fifth orphans.
  // Team GB stays in the bio paragraph, where a personal racing history reads
  // better than it does in a row of credentials about his coaching.
  { value: 'WORLD', label: 'And national champions coached' },
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
      'I had such a great experience during my lactate & VO2 assessments. Gareth is extremely knowledgeable and took the time to break everything down in a way that really helped me understand my current fitness level and running performance. I walked away with clear guidance and practical feedback on what I need to do to reach my marathon goals AND since then I recently hit a new PR and qualified for Boston!',
    name: 'Jessica Choi',
    detail: 'Marathon runner',
    image: null,
  },
  {
    quote:
      'When I started working with Coach Gareth, I immediately knew his attention to detail & scientific approach was a winning choice. Now 16 years later with a family and limited training time, the precision of Gareth’s training plans allow me to not waste anytime and still chase my dreams.',
    name: 'Jamey Yanik',
    detail: 'Top 5, Leadville 100',
    image: '/images/jameyyanikleadville.png',
  },
  {
    quote:
      'Coach Gareth has been training me for many years. He develops plans using periodization and lactate data to maximize performance. With him I’ve gone sub 2.50, won my age group at the Tokyo Marathon and qualified for the Kona World IRONMAN championships.',
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

/**
 * COACHING FAQs — Gareth's request (#9): the site had testing questions only,
 * and coachgareth.com already carries a good set about coaching.
 *
 * Transcribed from the FAQ blocks on /running and /triathlon, which run the
 * same six questions with the sport name swapped. Rewritten once here in
 * sport-neutral form, because on a consolidated site the same question should
 * not appear four times with one word different — that is precisely the
 * duplicate-content pattern the rebuild exists to remove.
 */
export const COACHING_FAQS = [
  {
    q: 'How does coaching work day to day?',
    a: 'Every workout is uploaded to TrainingPeaks and can be pushed straight to your watch for in-workout guidance. Your data uploads back automatically after each session, along with sleep and health data from your wearable, and Gareth reviews it at the frequency your tier sets. You can leave notes on energy, stress or travel as you go. Contact happens by call, video, text and email, again depending on tier. Every athlete trains with a heart-rate monitor and keeps a daily training journal.',
  },
  {
    q: 'Do I need to live in Los Angeles, or even the USA, to be coached?',
    a: 'No. Gareth coaches athletes all over the world, many of whom travel constantly. Most come to the lab in Santa Monica for their initial testing, and where that is not possible he arranges testing with a provider local to you so the programme still starts from real data.',
  },
  {
    q: 'What equipment do I need?',
    a: 'The essentials are the basic kit for your sport plus a heart-rate monitor with a chest strap. Ideally you would also have a sleep tracker such as an OURA ring or WHOOP, a power meter if you ride, an indoor trainer, and access to a gym, a track or treadmill, and regular massage or chiropractic care. A budget for fuel and supplements matters too.',
  },
  {
    q: 'I am never going to win anything, but I want to be my best. Can I still apply?',
    a: 'Yes. Gareth works with driven people who want to reach their true potential, whatever level that starts from. Wanting to be excellent matters more than what you can currently do.',
  },
  {
    q: 'I hate racing but I want to train properly. Is that OK?',
    a: 'Yes. Training seriously without racing is a superb way to stay fit and in prime condition, and it is how Gareth lives himself. Plenty of the athletes he coaches never pin on a number.',
  },
  {
    q: 'My time is limited. Can I still get somewhere on an hour a day?',
    a: 'Yes. You will struggle with the longest races on that budget, and Gareth will tell you so honestly. But an hour a day, programmed properly around your actual life, goes a very long way — and building the plan around the time you genuinely have is the whole point.',
  },
] as const;

export const NAV = [
  { href: '/testing', label: 'Testing' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
] as const;

/** Six “near me” / money-term landers from the deck (Phase 3) and findings §5. */
export const LANDERS = [
  {
    slug: 'vo2-max-testing-near-me',
    keyword: 'VO2 max testing near me',
    testSlug: 'vo2-max-testing',
    title: 'VO2 Max Testing Near Me | Santa Monica Lab',
    description:
      'VO2 max testing near me in Santa Monica. $275, run in person by Gareth Thomas at ECLYPSE Fitness Lab. Call (858) 361-4733.',
  },
  {
    slug: 'vo2-max-test-near-me',
    keyword: 'VO2 max test near me',
    testSlug: 'vo2-max-testing',
    title: 'VO2 Max Test Near Me | Santa Monica',
    description:
      'A VO2 max test near me in Santa Monica for $275. One hour at ECLYPSE Fitness Lab with Gareth Thomas. Call (858) 361-4733.',
  },
  {
    slug: 'rmr-test-near-me',
    keyword: 'RMR test near me',
    testSlug: 'rmr-testing',
    title: 'RMR Test Near Me | Santa Monica',
    description:
      'RMR test near me in Santa Monica. $175 resting metabolic rate, measured not estimated. ECLYPSE Fitness Lab. Call (858) 361-4733.',
  },
  {
    slug: 'metabolic-testing-near-me',
    keyword: 'metabolic testing near me',
    testSlug: 'rmr-testing',
    title: 'Metabolic Testing Near Me | Santa Monica',
    description:
      'Metabolic testing near me in Santa Monica: RMR $175, VO2 max $275, lactate $350. ECLYPSE Fitness Lab. Call (858) 361-4733.',
  },
  {
    slug: 'lactate-threshold-test-near-me',
    keyword: 'lactate threshold test near me',
    testSlug: 'lactate-threshold-testing',
    title: 'Lactate Threshold Test Near Me | Santa Monica',
    description:
      'Lactate threshold test near me in Santa Monica. $350 blood lactate test with Gareth Thomas. Call (858) 361-4733.',
  },
  {
    slug: 'metabolic-testing',
    keyword: 'metabolic testing',
    testSlug: 'vo2-max-testing',
    title: 'Metabolic Testing in Santa Monica | ECLYPSE Lab',
    description:
      'Metabolic testing in Santa Monica: VO2 max, RMR and blood lactate. Prices from $175. ECLYPSE Fitness Lab. Call (858) 361-4733.',
  },
] as const;

export const POSTS = [
  {
    slug: 'what-is-vo2-max',
    title: 'What is VO2 max?',
    description:
      'VO2 max is the maximum oxygen your body can use under load — the best-studied marker of cardiovascular fitness. How we measure it in Santa Monica.',
  },
  {
    slug: 'what-is-zone-2-training',
    title: 'What is Zone 2 training?',
    description:
      'Zone 2 is genuinely easy aerobic work, bounded by your aerobic threshold — not a formula from your age. How a lactate test sets it.',
  },
  {
    slug: 'what-is-lactate-threshold-testing',
    title: 'What is lactate threshold testing?',
    description:
      'A blood lactate test finds the intensities where your training zones actually begin and end. How the protocol works in Santa Monica.',
  },
  {
    slug: 'how-to-use-a-heart-rate-monitor',
    title: 'How to use a heart-rate monitor',
    description:
      'A heart-rate monitor only works if the zones in it are yours. How we set those zones from a lactate test, not an age formula.',
  },
  {
    slug: 'is-a-vo2-max-test-worth-it',
    title: 'Is a VO2 max test worth it?',
    description:
      'You do not need to know your VO2 max to improve it. Gareth uses the test for fuel mix — and only after lactate has set the zones.',
  },
  {
    slug: 'periodization',
    title: 'Periodization',
    description:
      'Periodization is the science of putting the building blocks of training in the right order so each phase prepares you for the next.',
  },
  {
    slug: 'the-need-for-speed',
    title: 'The need for speed',
    description:
      'Once the aerobic base is in, speed work is threshold, VO2, then peak speed — and the recoveries have to be as precise as the reps.',
  },
  {
    slug: 'are-your-carbon-plated-running-shoes-hurting-you',
    title: 'Are your carbon-plated running shoes hurting you?',
    description:
      'Carbon-plated racers offer free speed. Used every day they can de-train your gait and load tendons, shins and bone.',
  },
  {
    slug: 'the-pillars-of-success',
    title: 'The pillars of success',
    description:
      'Commit to being coached, use sports science, train the mind, and do a little and often — Gareth’s path to injury-free peak performance.',
  },
  {
    slug: 'why-you-need-a-coach',
    title: 'Why you need a coach',
    description:
      'A coach tells you like it is: train the limiters, stay in zone, and do the unglamorous daily work that makes the plan work.',
  },
  {
    slug: 'dont-train-when-you-are-sick',
    title: 'Don’t train when you are sick',
    description:
      'If you are fighting a cold or flu, rest. Training while sick is inferior work your body cannot absorb, and it keeps you depleted so the bug hangs on.',
  },
  {
    slug: 'the-dos-and-donts-of-heart-rate-training',
    title: 'The do’s and don’ts of heart-rate training',
    description:
      'A heart-rate monitor is a window onto the stress of the session. Most athletes either resist the strap or wear it without knowing how to use it.',
  },
  {
    slug: 'know-your-zones',
    title: 'Know your zones',
    description:
      'A heart-rate monitor, power or pace, and a sense of effort all matter — and RPE is the fallback when the strap fails.',
  },
  {
    slug: 'what-is-the-difference-between-economy-and-efficiency',
    title: 'What is the difference between economy and efficiency?',
    description:
      'Running economy is how much oxygen or energy you burn at a given pace. Gareth treats it as mechanical, movement-centred efficiency.',
  },
  {
    slug: 'are-you-fat-adapted',
    title: 'Are you fat adapted?',
    description:
      'Some athletes sit under 2 mmol in Zone 2 and still burn almost no fat. Others oxidise 80%+ at the same effort. Low lactate is not fat adapted.',
  },
  {
    slug: 'maximizing-body-composition',
    title: 'Maximizing body composition',
    description:
      'For out-and-out endurance performance, lighter is faster most of the time. Elite marathoners, climbing cyclists and winning triathletes are lean and light.',
  },
  {
    slug: 'fuel-with-color',
    title: 'Fuel with color',
    description:
      'Even when you are eating like a monk to be race-lean, a splash of color makes meals exciting to look at and to taste — and turns food into fuel.',
  },
  {
    slug: 'gut-health-and-the-microbiome',
    title: 'Gut health and the microbiome',
    description:
      'Endurance athletes know to get enough food and fuel in. Fewer focus on quality, or on how well those foods are absorbed. Digestion starts with chewing.',
  },
] as const;
