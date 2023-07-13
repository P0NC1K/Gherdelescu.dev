import { Projects } from '../types/Project';

export const projects: Projects = {
  renter: {
    id: 'renter',
    name: ' 🚲 Renter',
    demoURL: { url: 'https://renter.md/' },
    cover: { srcPath: '/static/projects/renter/cover-00.jpg' },
    startDate: '2023-02-20',
    summary: [
      'An electric bike rental service in Moldova',
    ],
    tags: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Typescript' },
    ]
  },
  recycline: {
    id: 'recycline',
    name: '💎 Recycline',
    demoURL: { url: 'https://recycline.shop/' },
    cover: { srcPath: '/static/projects/recycline/cover-00.jpg' },
    startDate: '2022-10-15',
    endDate: '2022-11-15',
    summary: [
      'Ecommerce website that sells jewelry made out of recycled plastic',
    ],
    tags: [
      { name: 'WordPress' },
      { name: 'WooCommerce' },
      { name: 'JavaScript' }
    ],
  },
  'alu-ams': {
    id: 'alu-ams',
    name: '⚙️ Alliance Management Solutions',
    demoURL: { url: 'https://alu-ams.de/' },
    cover: { srcPath: '/static/projects/alu-ams/cover-00.jpg' },
    startDate: '2023-03-01',
    summary: [
      'German website for a company that produces aluminum products',
    ],
    tags: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Wordpress' }
    ],
  },
  korhy: {
    id: 'korhy',
    name: '☕ Korhy',
    srcURL: { url: 'https://github.com/P0NC1K/korhy' },
    demoURL: { url: 'https://korhy.vercel.app/' },
    cover: { srcPath: '/static/projects/korhy/cover-00.jpg' },
    startDate: '2022-09-20',
    summary: [
      'An online coffee shop that offers an efficient way to purchase high-quality coffee',
    ],
    tags: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Styled Components' },
    ],
  },
  admin: {
    id: 'admin',
    name: '👨🏻‍💻 Admin Dashboard',
    cover: { srcPath: '/static/projects/admin/cover-00.png' },
    startDate: '2022-01-01',
    archived: true,
    summary: [
      'An UI wireframe that allows administrators to manage and monitor various aspects of the website',
    ],
    tags: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'MUI' },
      { name: 'MongoDB' },
      { name: 'ExpressJS' },
    ],
  },
  ideaware: {
    id: 'ideaware',
    name: '💡 Ideaware Freedome',
    demoURL: { url: 'https://www.ideaware.co.uk/' },
    cover: { srcPath: '/static/projects/ideaware/cover-00.jpg' },
    startDate: '2022-01-01',
    endDate: '2022-02-01',
    summary: [
      'Ideaware Freedome is a technology that provides a platform for faster and lower-cost software development',
    ],
    tags: [
      { name: 'HTML & CSS' },
      { name: 'Bootstrap' },
    ],
  },
  yow: {
    id: 'yow.',
    name: '📜 Parallax Scrolling',
    demoURL: { url: 'https://yow-p0nc1k.vercel.app/' },
    srcURL: { url: 'https://github.com/P0NC1K/Yow.' },
    cover: { srcPath: '/static/projects/yow/cover-00.jpg' },
    startDate: '2022-01-01',
    summary: [
      'Clean and Minimalistic design single page template with parallax effect.',
    ],
    tags: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'JQuery' },
    ],
  },
  renterApp: {
    id: 'renterApp.',
    name: '📱 Renter App',
    comingSoon: true,
    cover: { srcPath: '/static/projects/renterApp/cover-00.jpg' },
    startDate: '2023-04-01',
    summary: [
      'Mobile app for making the renting process of an e-bike much easier and more accessible',
    ],
    tags: [
      { name: 'Next.js' },
      { name: 'Styled Components' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Android' },
      { name: 'IOS' },
      { name: 'PWA' },
    ],
  },
  floodInsurance: {
    id: 'floodInsurance.',
    name: '🌊 Flood Insurance',
    cover: { srcPath: '/static/projects/floodInsurance/cover-00.png' },
    startDate: '2023-04-01',
    summary: [
      'A form-based website for a company that offers flood insurance',
    ],
    demoURL: { url: 'https://nationalfloodinsurance.com/' },
    tags: [
      { name: 'React' },
      { name: 'SCSS' },
      { name: 'Laravel' }
    ],
  },
  selfBase: {
    id: 'SelfBase',
    name: '💀 SelfBase',
    cover: { srcPath: '/static/projects/selfbase/cover-00.png' },
    startDate: '2023-06-12',
    summary: [
      'A user-friendly website that features a drag-and-drop interface, enabling users to share their personal profiles and social media connections',
    ],
    demoURL: { url: 'https://www.selfbase.app/' },
    tags: [
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'Supabase' },
      { name: 'Zod' },
      { name: 'TRPC' },
      { name: 'Supabase' },
    ],
  },
};
