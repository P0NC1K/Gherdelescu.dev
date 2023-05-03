import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Grigore',
  lastName: 'Gherdelescu',
  position: 'Fullstack Web Developer @ Renter',
  summary: [
    'Founder of a mobility sharing startup 🚲',
  ],
  avatar: {
    srcPath: '/static/profile/avatar_500x500.jpg',
    caption: 'Gregory Gherdelescu',
  },
  location: {
    name: 'Chisinau, Moldova',
  },
  tags: [
    { name: 'Next.js' },
    { name: 'React' },
    { name: 'Node.JS' },
    { name: 'Full Stack' },
  ],
  socialLinks,
};
