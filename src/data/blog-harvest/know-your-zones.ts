import type { HarvestedPost } from './_schema';

export const harvest: HarvestedPost = {
  slug: 'know-your-zones',
  title: 'Know your zones',
  description:
    'A heart-rate monitor, power or pace, and a sense of effort all matter — and RPE is the fallback when the strap fails.',
  eyebrow: 'Training',
  lede:
    'Anyone training with science will be using a heart-rate monitor and power or pace to most accurately guide their training. Instinct and a sense of effort are also key skills to bring to training and race pacing. The more information you have to hand, the better the process.',
  image: '/images/runzonesexample.jpg',
  imageAlt: 'An example of running training zones used to guide intensity on the road',
  sourceUrl: 'https://www.coachgareth.com/blog/know-your-zones',
  sections: [
    {
      heading: 'When the strap fails',
      paragraphs: [
        'There are also those times when your damn HRM will not work for some unknown reason, and it is usually when you want it the most. In these cases, RPE — rate of perceived exertion — is a really useful fallback option.',
        'Heart-rate monitors are there to help guide the intensity of your workout. They are not a replacement for knowing what the work is supposed to feel like.',
      ],
    },
    {
      heading: 'Train in defined zones',
      paragraphs: [
        'To train specifically and correctly, you will need to train in carefully defined zones. This article assumes that you already have your zones but need practical pointers on how to use your HRM out on the road.',
      ],
    },
  ],
};
