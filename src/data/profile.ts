import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Grigore',
  lastName: 'Gherdelescu',
  position: 'Co-Founder of Renter',
  summary: [
    'Full-Stack Web Developer 👨‍💻',
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
    { name: 'Node.js' },
    { name: 'Full Stack' },
  ],
  socialLinks,
};
