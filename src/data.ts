// All facts come from "Adjuya Caleb - Software CV.pdf" (Sep 2026). Do not add numbers that are not in the CV.

export const CV_URL = '/Caleb-Adjuya-CV.pdf';
export const EMAIL = 'adjuyaa@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/calebadjuya/';
export const GITHUB = 'https://github.com/6lackGuy';

export const notes = [
  'Mobile-first software engineer. 4+ years designing, building and shipping production Flutter apps. Not demos. Production.',
  'Lead Mobile Engineer at MAX: three production apps for thousands of agents across Nigeria, Ghana and Cameroon. I own the Google Play releases too, so the buck stops with me.',
  'Full-stack when the job calls for it: React and TypeScript, Python, Google Cloud. At VoxeCore I architected a reasoning engine that streams an LLM’s thinking to the screen as it happens.',
  'B.Eng in Mechanical Engineering from Landmark University. That’s why this site is a drawing set. Old habits.',
  'Off the clock: breaking ankles on the basketball court, hitting the gym like I’m training for a tech superhero movie, teaching kids to code, and binge-watching anime like my life depends on it.',
];

export const results = [
  { label: 'Champion registrations', value: '3,000+ / month' },
  { label: 'Onboarding success rate', value: '+30%' },
  { label: 'Operational efficiency', value: '+50%' },
  { label: 'Countries in production', value: 'NG · GH · CM' },
  { label: 'Apps live on Google Play', value: '5' },
];

export type Schematic = 'pams' | 'drive' | 'chairman' | 'swap' | 'test';

export const apps: {
  part: string;
  name: string;
  summary: string;
  // Callouts on the drawing: what each part of the screen does, and where it sits (% of device height).
  callouts: { label: string; at: number }[];
  url: string;
  schematic: Schematic;
}[] = [
  {
    part: 'MAX-01',
    name: 'MAX Drive',
    summary: 'The Champion EV app: in-app driver onboarding and referral tracking that lowered customer acquisition cost.',
    callouts: [{ label: 'Referral code', at: 19 }, { label: 'Referral tracking', at: 45 }, { label: 'Driver onboarding', at: 90 }],
    url: 'https://play.google.com/store/apps/details?id=ai.maxdrive.ridersapp',
    schematic: 'drive',
  },
  {
    part: 'MAX-02',
    name: 'MAX Chairman',
    summary: 'A management app that lets association chairmen oversee and coordinate their whole fleet of riders.',
    callouts: [{ label: 'Fleet overview', at: 17 }, { label: 'Rider roster', at: 42 }, { label: 'Coordination', at: 64 }],
    url: 'https://play.google.com/store/apps/details?id=ai.maxdrive.chairman',
    schematic: 'chairman',
  },
  {
    part: 'MAX-03',
    name: 'MAX Battery Swap',
    summary: 'Companion app for MAX’s EV battery-swap network, helping riders find stations and manage their swaps.',
    callouts: [{ label: 'Station map', at: 37 }, { label: 'Battery status', at: 70 }, { label: 'Swap management', at: 90 }],
    url: 'https://play.google.com/store/apps/details?id=ai.maxdrive.swapapp',
    schematic: 'swap',
  },
  {
    part: 'MAX-04',
    name: 'MAX Onboarding Test',
    summary: 'Replaced a slow manual screening process with driver-readiness tests: randomized questions, multiple languages, results synced in real time.',
    callouts: [{ label: 'Multi-language', at: 13 }, { label: 'Randomized questions', at: 29 }, { label: 'Real-time result sync', at: 57 }],
    url: 'https://play.google.com/store/apps/details?id=max.ng.onboarding_test',
    schematic: 'test',
  },
  {
    part: 'MAX-05',
    name: 'MAX One PAMS',
    summary: 'The onboarding app I designed and built from the ground up to register new users and match them with drivers.',
    callouts: [{ label: 'Onboarding steps', at: 13 }, { label: 'Registration', at: 33 }, { label: 'Driver matching', at: 57 }],
    url: 'https://play.google.com/store/apps/details?id=maxdrive.pams.max_one_pams',
    schematic: 'pams',
  },
];

export const revisions: {
  rev: string;
  period: string;
  role: string;
  company: string;
  place: string;
  current?: boolean;
  changes: string[];
}[] = [
  {
    rev: 'E',
    period: 'Jan 2026 – Present',
    role: 'Head of Engineering (Contract)',
    company: 'VoxeCore',
    place: 'Ontario, Canada · Remote',
    current: true,
    changes: [
      'Architected a Python reasoning engine that streams LLM logic tokens to the frontend, so users watch the model’s decision-making in real time.',
      'Led the refactor of the React/TypeScript client onto a centralized design system, unifying UI across themes and cutting technical debt.',
      'Run microservices on Google Cloud Run with Celery for async work; own the database migrations and multi-tenant data structures.',
      'Migrated core services to cost-efficient LLMs (e.g. GPT-4o mini) and fixed state-sync issues for faster, more reliable responses.',
    ],
  },
  {
    rev: 'D',
    period: 'Aug 2025 – Nov 2025',
    role: 'Senior Mobile Engineer (Contract)',
    company: 'Busha',
    place: 'Lagos, Nigeria',
    changes: [
      'Delivered secure, reliable crypto-trading features for Busha’s mobile apps.',
      'Contributed to a centralized design system that unified UI across themes.',
      'Supported the mobile CI/CD pipeline: deployments, workflow monitoring, and diagnosing build and release failures.',
    ],
  },
  {
    rev: 'C',
    period: 'Jul 2024 – Nov 2024',
    role: 'Mobile App Developer (Freelance)',
    company: 'Ardels',
    place: 'Lagos, Nigeria',
    changes: [
      'Built and shipped the Ardels app end-to-end so companies can register domestic workers and verify their credentials.',
      'Implemented secure authentication, verification flows and real-time notifications via Firebase Cloud Messaging.',
      'Optimized retrieval for a searchable repository of verified worker profiles; ran A/B tests to iterate on UX.',
    ],
  },
  {
    rev: 'B',
    period: 'Oct 2023 – Present',
    role: 'Lead Mobile Engineer',
    company: 'Metro Africa Xpress (MAX)',
    place: 'Lagos, Nigeria · started as Flutter Developer Intern, Apr – Oct 2023',
    current: true,
    changes: [
      'Shipped and maintain 3 production Flutter apps serving thousands of agents across Nigeria, Ghana and Cameroon, driving a 50% increase in operational efficiency.',
      'Built and deployed an onboarding platform supporting 3,000+ champion registrations per month, raising onboarding success by 30%.',
      'Cut app downtime from 3 hours to 1 hour (~66%) by hunting down frontend and backend defects before they spread.',
      'Integrated Youverify KYC against Nigerian government databases, and Smartlook session replays and heatmaps to surface bugs.',
      'Own the Google Play release process and upgraded legacy code to the latest Flutter SDK.',
    ],
  },
  {
    rev: 'A',
    period: 'Jan 2022 – Dec 2022',
    role: 'Mobile App Developer (Freelance)',
    company: 'Artifex Consumer Technologies',
    place: 'Lagos, Nigeria',
    changes: [
      'Built the Customer and Artisan apps end-to-end, with Google Maps & Places for live location tracking and order routing.',
      'Integrated Firebase push notifications and in-app payments via Flutterwave.',
    ],
  },
  {
    rev: '0',
    period: '2017 – 2022',
    role: 'B.Eng, Mechanical Engineering',
    company: 'Landmark University',
    place: 'Omu Aran, Nigeria · original issue',
    changes: [],
  },
];

export const bom = [
  { group: 'Mobile', parts: ['Flutter', 'Bloc', 'Riverpod', 'Provider', 'GetX', 'Shorebird', 'Rive animations', 'Widget & unit testing'] },
  { group: 'Languages', parts: ['Dart', 'Swift', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Web & backend', parts: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'SQLite', 'Mongoose'] },
  { group: 'Cloud & DevOps', parts: ['Google Cloud Run', 'Cloud Build', 'Docker', 'CI/CD pipelines', 'Celery', 'Alembic'] },
  { group: 'Integrations', parts: ['REST APIs', 'Google Maps & Places', 'Firebase Cloud Messaging', 'Flutterwave', 'Youverify KYC', 'Smartlook'] },
  { group: 'Architecture', parts: ['MVVM', 'MVC', 'Agile / Scrum', 'Code review', 'Design systems'] },
  { group: 'Tools', parts: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman', 'Figma', 'Jira', 'Confluence'] },
];
