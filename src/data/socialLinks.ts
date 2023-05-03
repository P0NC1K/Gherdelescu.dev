// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/grigore-gherdelescu-81b548239/',
    secondary: false,
    caption: 'Grigore Gherdelescu on LinkedIn',
  },
  {
    type: socialLinkTypes.upwork,
    url: 'https://www.upwork.com/freelancers/~01e751b25c5ee1c07b',
    secondary: false,
    caption: 'Gherdelescu Grigore on Upwork',
  },
  {
    type: socialLinkTypes.gmail,
    url: 'mailto:contact@gherdelescu.dev',
    secondary: false,
    caption: 'contact@gherdelescu.dev on Gmail',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/P0NC1K/',
    secondary: true,
    caption: 'P0nC1k on GitHub',
  },
];
