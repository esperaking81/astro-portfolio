import type { Work } from "./models/work";

export const HOMEPAGE_URL = 'https://www.esperaawo.me';
export const SITE_TITLE = 'Espera Awo: Personal Website';
export const SITE_DESCRIPTION = 'All about me and my work';

export const WORKS: Array<Work> = [
  {
    tag: 'latest',
    title: 'Vivotin',
    icon: './public/assets/vivotin.png',
    description: 'A professional social media app'
  },
  {
    tag: 'latest',
    title: 'CNSS MI TON',
    icon: './public/assets/cnss.png',
    description: 'Information source for CNSS Benin clients'
  },
  {
    tag: 'old',
    title: 'Pixelix',
    icon: './public/assets/pixelix.png',
    description: 'Social media app for design content creators'
  },
  {
    tag: 'old',
    icon: './public/assets/pixelix.png',
    title: 'Pixelix Dashboard',
    description: 'Web app for pixelix mobile app administration'
  }
]
