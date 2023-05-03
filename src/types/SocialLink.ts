import type { Link } from './Link';

export const socialLinkTypes = {
  gitHub: 'GitHub',
  linkedIn: 'LinkedIn',
  upwork: 'Upwork',
  gmail: 'Gmail',
};

type socialLinkTypesKeys = keyof typeof socialLinkTypes;
type socialLinkTypesValues = typeof socialLinkTypes[socialLinkTypesKeys];

export interface SocialLink extends Link {
  type?: socialLinkTypesValues,
  secondary?: boolean,
}
