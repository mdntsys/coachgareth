/** Shape for harvested blog bodies. Do not invent facts. */
export type HarvestedPost = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  lede: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
};
