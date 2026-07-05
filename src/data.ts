export const profile = {
  name: 'Dheeraj',
  first: 'Dheeraj',
  role: 'Full Stack Web Developer',
  tagline: 'I build things for the web.',
  location: 'India · Available worldwide',
  email: 'dheerajtanwarx@gmail.com',
  phone: '+91 6350695920',
  blurb:
    'A passionate full stack developer crafting fast, accessible and delightful digital products with modern technologies — from pixel-perfect front-ends to robust APIs.',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/dheerajtanwarx/',
    linkedin: 'https://www.linkedin.com/in/dheerajtanwarx/',
    twitter: 'https://x.com/dheerajtanwarx',
  },
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 60, suffix: '+', label: 'Projects Completed' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

export const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 92 },
  { name: 'Node.js / Express', level: 90 },
  { name: 'Tailwind CSS', level: 94 },
  { name: 'PostgreSQL / MongoDB', level: 85 },
  { name: 'AWS / Docker / CI-CD', level: 82 },
  { name: 'C Language', level: 82 },
  { name: 'C++ ', level: 90 },
  { name: 'Java', level: 90 },
]

export const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Redis',
  'Prisma',
]

export const services = [
  {
    title: 'Frontend Engineering',
    desc: 'Accessible, responsive interfaces with React, Next.js and modern CSS — buttery smooth and pixel perfect.',
    icon: 'Layout',
  },
  {
    title: 'Backend & APIs',
    desc: 'Scalable REST & GraphQL APIs, auth, real-time systems and databases designed to grow with your product.',
    icon: 'Server',
  },
  {
    title: 'Full Stack Products',
    desc: 'End-to-end delivery — from architecture and UI to deployment, CI/CD and observability on the cloud.',
    icon: 'Boxes',
  },
  {
    title: 'Performance & DX',
    desc: 'Core Web Vitals, bundle budgets and clean, typed codebases your team will actually enjoy working in.',
    icon: 'Gauge',
  },
]

export const projects = [
  {
    id: '01',
    title: 'Open Chat',
    category: 'Full Stack · Next.js',
    desc: 'Open Chat is an agent-first communication workspace. Ask once in plain language and your agents can find messages, summarize threads, book meetings, and send confirmations automatically.',
    tags: ['Next.js', 'tRPC', 'PostgreSQL', 'Stripe'],
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20',
    accent: '#8B5CF6',
    link: 'https://open-chat-coral.vercel.app/',
    image: '/projects/open-chat.webp',
  },
  {
    id: '02',
    title: 'AV-Creation',
    category: 'Ecommerce Web App · React',
    desc: 'An Ecommerce clothing platform for saling ',
    tags: ['React', 'Node', 'Socket.io', 'Redis'],
    gradient: 'from-cyan-400/30 via-sky-500/20 to-violet-500/20',
    accent: '#22D3EE',
    link: 'https://www.avcreation.in/',
    image: '/projects/av-creation.webp',
  },
  {
    id: '03',
    title: 'MeraVyapar — Cloud Billing',
    category: 'SaaS Dashboard · Next.js',
    desc: 'Cloud billing and POS platform for small businesses — GST invoicing, sales & purchase tracking, inventory, parties and payments with a fully audited activity log.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    gradient: 'from-emerald-400/30 via-teal-500/20 to-cyan-400/20',
    accent: '#34D399',
    link: 'https://mera-vyapar.vercel.app/',
    image: '/projects/mera-vyapar.webp',
  },
  {
    id: '04',
    title: 'Durga Jewellery',
    category: 'E-commerce · Next.js',
    desc: 'A luxury jewellery storefront for hallmarked 22k gold & 925 silver — curated collections, bridal edit, wishlist and cart with an elegant, conversion-focused shopping experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    gradient: 'from-fuchsia-500/30 via-pink-500/20 to-violet-500/20',
    accent: '#E879F9',
    link: 'https://durga-jewlleres.vercel.app/',
    image: '/projects/durga-jewellery.webp',
  },
]

export const testimonials = [
  {
    quote:
      'Dheeraj delivered our platform ahead of schedule with impeccable quality. His attention to detail and problem-solving skills are outstanding — a rare full stack talent.',
    name: 'Sarah Johnson',
    title: 'CEO, TechStart',
  },
  {
    quote:
      'One of the most reliable engineers I have worked with. He turned a vague idea into a polished product and owned every layer of the stack with confidence.',
    name: 'Michael Chen',
    title: 'Product Lead, Finova',
  },
  {
    quote:
      'Beautiful UI, rock-solid backend, and clean, documented code. Dheeraj communicates clearly and ships fast. We rehired him for two more projects.',
    name: 'Aisha Rahman',
    title: 'Founder, Lumina Studio',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
