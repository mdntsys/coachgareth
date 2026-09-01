/**
 * Harvested lab copy for /testing and the three test URLs.
 *
 * Sources (do not invent from this file):
 * - coachgareth.com/the-lab (also indexed at /lactate), title
 *   "Blood Lactate Testing Near me | vo2 Max Test Near me" — Google snippets
 *   of the live Squarespace page, recovered 2026-09-01. Wayback CDX timed out.
 * - PROTOCOL, TESTS, PACKAGES, THRESHOLDS, FAQS, CREDENTIALS, COACHING, NAP
 *   in site.ts (harvested 2026-08-11 from both Squarespace sites).
 * - Gareth bio on index.astro (Team GB, UCLA, FFI/NCF/RAW/ITEC, books).
 * - posts.ts VO2 voice (Attia/Huberman, engine, ml/kg/min) recovered from
 *   his own writing.
 * - YouTube descriptions that reprint the /the-lab overview.
 *
 * Stale /the-lab prices ($350 VO2, $150 RMR, $700/$1,250 old packages) are
 * not used. Current prices live on TESTS / PACKAGES / COMBO.
 * HUME body-composition add-on and “free sweat analysis” as a line item
 * are not restated — current includes are the consultation, zones, workouts,
 * and a fuelling and hydration plan (FAQS).
 */

export const LAB = {
  whyTest: [
    'Many people are training at the wrong intensity and therefore wasting their time and not getting the results they want or deserve. A heart-rate monitor is the first piece of kit — but just using one is not enough. You have to train in the correct zones for you, and determining those zones requires blood lactate and VO2 max testing, not a formula from your age.',
    'Metabolic testing — blood lactate and VO2 max — is vital for the optimal development of the endurance athlete. These are the undisputed gold standards for fitness testing, and the secret used by the world’s fastest ever endurance athletes. They allow you to see what is happening inside your exercising body and to optimise your training so that every second counts. Testing is just as vital for a beginner as it is for a seasoned athlete.',
    'Testing unveils the balance of your personal metabolic fitness. From there your training can be shaped and guided so that you reach your true potential in your chosen sport.',
  ],
  notLikeAnyOther: [
    'An assessment with Coach Gareth is not like any other lab test. It is the chance for an athlete to spend one2one time with him, uncovering what will make that athlete hit their true potential. All tests are performed by Gareth Thomas — not some newly qualified lab tech — and he brings 30 years of experience and the knowledge from the thousands of tests he has performed.',
    'Gareth is the Lactate Guru. He has spent more than 30 years coaching endurance athletes, from complete beginners to world and national champions, Kona qualifiers, Leadville finishers and sub-2:50 marathoners. He raced professionally as a triathlete and competed for Team Great Britain. He spent six years as head coach of UCLA Triathlon, has written several books on endurance training, and is qualified through FFI, NCF, RAW and ITEC.',
    'Every test at the lab is run by him and explained by him. That is the whole difference. Plenty of places in Los Angeles own the same equipment — the machine is not what you are paying for. You do not get emailed a PDF and left to interpret it.',
  ],
  whoFor: [
    'You do not need to be a serious athlete to get tested. Roughly half the people tested at the lab are not racing anything. RMR and VO2 max testing are used just as often for body composition, longevity and general health as they are for performance, and the protocol is scaled to whatever you can currently do.',
    'Runners, cyclists, triathletes and Ironman athletes come for race performance and training zones. People who hate racing but still want to train properly come for the same numbers. Driven people who want to reach their true potential — whatever level that starts from — are the usual appointment. Gareth works with beginners and with world and national champions in the same room, on the same protocol.',
    'The lab is ECLYPSE Fitness Lab, created by Coach Gareth, at 1736 Ashland Avenue, Santa Monica, CA 90405. It serves athletes across Los Angeles, the Westside, Venice, Culver City and the South Bay. Hours are Tuesday to Friday 10–7, Saturday and Sunday 12–5, Monday closed. Call (858) 361-4733 or email cg@coachgareth.com.',
  ],
  leaveWith: [
    'You leave with your personal heart-rate training zones, your aerobic and steady-state thresholds, your Fat-Max intensity, custom workouts built from your own numbers, and a fuelling and hydration plan. Every test is explained in person rather than emailed over as a report.',
    'The zones are delivered as heart-rate and pace or power ranges you can load straight into a watch or head unit. One of the main things people come to the lab to find is their Zone 2. We do find this, and it is vital for the full development — and the health — of the aerobic system. We also find the thresholds and the balance of the aerobic and anaerobic systems, then tune those systems through accurate heart-rate zone training.',
  ],
} as const;

export const LACTATE = {
  what: [
    'Lactate is constantly produced by the body. At its simplest, energy in the form of ATP is essential for muscle contraction and can be produced via aerobic or anaerobic pathways. At rest and in light aerobic exercise, the level of lactate produced is small enough that it is used as fuel, or buffered. As intensity increases, lactate production increases and reaches levels that are reflective of a loss of aerobic efficiency.',
    'In general, low levels of lactate are the sign of an efficient aerobic, fat-burning system. High lactate levels at easy workloads are a sign of an underdeveloped aerobic system. High lactate levels at maximal workloads are a sign of a well-developed anaerobic system. For each athlete and sport there is an optimal balance of aerobic and anaerobic qualities. Testing unveils that balance.',
    'Over time, with correct aerobic training, lactate levels at a given workload will decrease — showing an improvement in aerobic conditioning. That is a metabolic gain: less lactate at the same power or pace, or the same lactate at a higher power or pace. Guessing from how a session felt cannot tell you which one you got.',
    'A blood lactate test is the gold standard for setting up accurate, personal heart-rate and pace training zones, especially for competitive athletes. During a sub-maximal exercise test, blood lactate samples are taken along with heart-rate, power or pace, and hydration data while you exercise at gradually increasing intensities. This data is analysed and delivered as an easy-to-use, practical prescription. The zones are based on heart rate, power and pace to suit your unique fitness and wellbeing goals.',
    'One of the main advantages of lactate testing is that it is robust: more stable, and less open to big swings in levels from day to day. That is why it is the number-one test of choice here, and why it is used to set your optimal training zones — heart-rate, plus power or pace if you have access to measuring those too. Tests are available for cycling, running, swimming and rowing. You test in your own discipline — a bicycle ergometer on your own bike for cyclists, a treadmill for runners, and for triathletes both of those and sometimes a pool-based swimming test. The data is only useful if it comes from the movement you actually train.',
  ],
  thresholds: [
    'The aerobic threshold — AeT, or lactate threshold 1 (LT1) — is the first shift away from a baseline of lactate production. It is a moderate effort for most athletes, usually somewhere between 1.5 and 2.2 mmol of lactate. Knowing this is very helpful for long-distance performance — think Ironman, marathon, ultra — and for the development of Zone 2. Often a high percentage of fat is being used for energy here, and this can often correlate to Fat-Max. On a typical curve the top of Zone 2 sits at 2 mmol. Those millimole figures describe a staged response. They are not your personal numbers.',
    'Steady-state threshold — SST, or lactate threshold 2 (LT2), also called maximum lactate steady state (MLSS) or onset of blood lactate (OBLA) — has many names that try to lead to the same place. This is the last intensity where lactate concentrations will stay the same as time progresses, hence “steady-state”. For many athletes it is around 3.5 to 4.5 mmol of lactate, though that can vary widely. Often there is a spike in lactate production soon after this intensity, which helps identify it. This is the number that sets realistic race pace. On a typical curve Zone 4 is the narrow band just below and just above 4 mmol.',
    'A heart-rate zone calculated from your age is a guess about a stranger. These two marks are measured from your own blood, on the equipment you actually train on. They are where your training zones actually begin and end.',
  ],
  session: [
    'Step one in the process is usually the lactate test. You test in your own discipline — a bicycle ergometer on your own bike for cyclists, a treadmill for runners, and for triathletes both of those and sometimes a pool-based swimming test.',
    'The session steps up through 4 to 8 stages of gradually increasing intensity, depending on your current fitness level. Each stage is held long enough for your body to settle at that effort before anything is recorded. After each stage a small blood sample is taken from a fingertip or earlobe with a fresh single-use needle. It takes a few seconds. Most people describe it as a brief pinprick. You keep moving between stages.',
    'The whole test lasts usually in the 30–40 minute range. Allow around an hour in total, which includes the setup and the consultation where Gareth reads your results back to you in person, in plain language, with what to change on Monday morning.',
    'We try to test in a repeatable environment so we can compare tests done throughout the season and against previous years. Each athlete should retest every 9 to 12 weeks to monitor progress.',
  ],
} as const;

export const VO2 = {
  what: [
    'A VO2 max test measures the maximum amount of oxygen your body can use during intense exercise. Technically, that is millilitres of oxygen consumed per kilogram of body weight per minute (ml/kg/min) — the number a VO2 max test is built to find, not a score estimated from a watch or a calculator. Optimising your VO2 max is essential for longevity and sports performance. The higher your VO2, the better.',
    'Your VO2 is the size of your engine. Some people are born with a Ferrari and others a Ford Focus. You cannot change the size of the engine — that part is genetics — but you can tune whatever engine you have. Using more oxygen at rapid rates makes you faster. Keeping VO2 high is associated with longevity. That is why, at ECLYPSE Fitness Lab, the VO2 max test sits under the goal “improve health + longevity”: cardiovascular fitness first, race day second.',
    'VO2 max and Zone 2 are all the rage right now, with people like Peter Attia and Andrew Huberman podcasting about it and training buddies dropping it into every conversation. Underneath the noise the idea is simpler than the internet makes it sound. The highest readings sit in the 90s for men and about 80 for women. Those are the top of the sport. Most people who come through the lab are not chasing a figure that large. They want an honest reading of the engine they actually have, so they can train it.',
    'A high VO2 max is built on other factors, first of which is bodyweight. Because the score is relative to kilograms, the same heart and the same lungs produce a higher reading on a lighter body. Diet and blood sugar are part of the equation, not a side note. That is why a VO2 max test is often paired with an RMR test.',
  ],
  fatMax: [
    'The test also tells us Fat-Max: the intensity — and the heart rate — at which you burn the greatest total amount of fat. It drives fuelling strategy for long efforts, and it can help fine-tune fuelling, pacing and nutrition programming for the endurance athlete. It is not a colour on a watch face. It is measured while you are actually working, on the movement you train.',
    'VO2 peak is your maximal aerobic capacity: the maximum amount of oxygen your body can utilise for energy production during exercise. It is the top of your aerobic range. It sets the upper bound on everything below it and is the marker most tied to long-term health.',
    'The more flexible the system, the better — and the highest rate of fat burn possible. Track it test over test. The point of an objective marker is that the next number either moved or it did not. Maximise the return on the training you are already doing by knowing whether the engine got larger, or only felt like it did.',
  ],
  vsLactate: [
    'A blood lactate test measures how your body produces and clears lactate as intensity rises, which gives you your aerobic and threshold training zones. A VO2 max test measures the oxygen ceiling and Fat-Max. They answer different questions.',
    'Lactate testing is the better choice if you are training for a race. VO2 max is the better choice if you want a single objective marker of cardiovascular fitness. Plenty of people book both in one visit: the running and cycling Pro packages are lactate plus VO2 max, and Ultimate adds RMR. Longevity Basic is the VO2 max test on its own; Longevity Pro is VO2 max and RMR in the same visit.',
    'A VO2-only visit is not a substitute for a lactate curve. The oxygen ceiling is the top of the range. The thresholds that divide the range into training zones come from blood.',
  ],
  session: [
    'You test in your own discipline — treadmill for runners, ergometer for cyclists. The data is only useful if it comes from the movement you actually train. Allow around an hour in total, which includes the setup and the consultation.',
    'You do not need to be a serious athlete to get tested. Roughly half the people tested at the lab are not racing anything. VO2 max and RMR are used just as often for body composition, longevity and general health as they are for performance, and the protocol is scaled to whatever you can currently do.',
    'You do not get emailed a PDF and left to interpret it. Every test is run by Gareth Thomas and read back to you in person, in plain language, with what to change on Monday morning.',
  ],
} as const;

export const RMR = {
  what: [
    'An RMR test tells you how many calories your body needs each day for basic functions like breathing, circulating blood, and cell repair. Resting metabolic rate is what your body burns at rest — measured, rather than estimated from a calculator that has never met you.',
    'If you want to lose body fat or gain muscle, knowing your RMR helps plan your total daily energy expenditure (TDEE). That is the test under “drop fat + optimise body comp”: real calorie needs, macros for fat loss, support for energy and immune health, and a calorie and meal plan that matches the person in the chair.',
    'A high VO2 max is built on other factors, first of which is bodyweight. Because that score is relative to kilograms, diet and blood sugar are part of the equation, not a side note. That is why a VO2 max test is often paired with an RMR test. Longevity Pro is both in one visit. Longevity Ultimate adds a blood lactate test as well.',
  ],
  session: [
    'This is rest, not a staged effort. There is no treadmill ramp and no fingertip sample. The lab records what your body burns at rest rather than estimating it from a formula. Gareth Thomas reads the result with you in person and sets up a calorie and meal plan from your own numbers.',
    'Roughly half the people tested at the lab are not racing anything. RMR is used just as often for body composition, longevity and general health as it is for performance. You do not need to be fit. You do not need to know any physiology before you arrive.',
    'Every test is run and read by Gareth — coach to world and national champions, 30+ years. You do not get emailed a PDF and left to interpret it. The machine is not what you are paying for. Plenty of places in Los Angeles own one.',
  ],
  related: [
    'Local athletes on the three-month nutrition coaching programme get an in-person RMR test at the Santa Monica lab as part of that work. The nutrition programme itself is a separate path — an overhaul of food, fuelling and supplementation, starting with an in-depth analysis of current diet, gut and health issues. The RMR appointment on this page is the standalone test: $175, including the consultation.',
    'Most people who want both numbers in one visit book VO2 max + RMR. That pairing is Longevity Pro. If you are not sure which is worth the money, call and Gareth will tell you.',
  ],
  leaveWith: [
    'You leave knowing your real calorie needs — not a number a website produced from age, height and weight. From that, Gareth sets up a calorie and meal plan, including how to balance macros if the goal is fat loss, and how to support energy and immune health while you train.',
    'The three-month nutrition coaching programme is the longer version of that work: body composition, immune health, race fuel and training fuel, starting with an in-depth analysis of current dietary habits and gut and health issues, including supplements and race fuels, then a custom prescription and food rotation plan. Local participants get the in-person RMR test included. The $175 test on this page is the measurement and the consult, on its own.',
    'If you add VO2 max in the same visit you also leave with an objective cardiovascular number and your Fat-Max fuelling intensity. If you add a blood lactate test you leave with personal heart-rate training zones and the two thresholds that set them. Every price includes the consultation and a full explanation of your results.',
  ],
} as const;
