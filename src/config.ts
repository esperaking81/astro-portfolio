import type { Work } from "./models/work";

export const HOMEPAGE_URL = 'https://www.esperaawo.me';
export const SITE_TITLE = 'Espera Awo: Personal Website';
export const SITE_DESCRIPTION = 'All about me and my work';
export const ABOUT_ME = 'An app developer interested in delivering delightful user experiences.';

export const WORKS: Array<Work> = [
  {
    tag: 'latest',
    title: 'Vivotin',
    icon: './public/assets/vivotin.png',
    description: 'Professional social app'
  },
  {
    tag: 'latest',
    title: 'CNSS MI TON',
    icon: './public/assets/cnss.png',
    description: 'Informationial app for CNSS'
  },
  {
    tag: 'old',
    title: 'Pixelix',
    icon: './public/assets/pixelix.png',
    description: 'Designers social media app'
  },
  {
    tag: 'old',
    icon: './public/assets/pixelix.png',
    title: 'Pixelix Dashboard',
    description: 'Pixelix users dashboard'
  }
]
