import {
  Globe, Smartphone, ShoppingBag, Code2, Bot, Cpu, Workflow, Sparkles, BrainCircuit,
  BarChart3, Search, Megaphone, TrendingUp, GraduationCap, Mic, Headphones, Users,
  Calculator, MessageSquare, LayoutDashboard, ShieldCheck, Zap, Clock, DollarSign,
  Target, UserPlus, Rocket, LineChart, Cloud, Database, Brain,
  type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'SB Business Solutions',
  tagline: 'Innovating Today. Empowering Tomorrow.',
  altTagline: 'Your Digital Growth Partner',
  phone: '+91 6369271486',
  phoneRaw: '916369271486',
  email: 'sachinsadhish466@gmail.com',
  leadership: [
    { name: 'Edison M', role: 'Founder & Managing Director' },
    { name: 'Sachin S', role: 'CEO' },
    { name: 'Shalini S', role: 'CTO' },
    { name: 'Hari Shankar', role: 'Sales & Marketing Head' },
  ],
  socials: [
    { name: 'Facebook', href: 'https://facebook.com/sbbusinesssolutions' },
    { name: 'Instagram', href: 'https://instagram.com/sbbusinesssolutions' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/sbbusinesssolutions' },
    { name: 'YouTube', href: 'https://youtube.com/@sbbusinesssolutions' },
  ],
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'AI Solutions', href: '#ai-solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_TECH_ICONS: { label: string; icon: LucideIcon; delay: number }[] = [
  { label: 'Artificial Intelligence', icon: BrainCircuit, delay: 0 },
  { label: 'AI Chatbots', icon: MessageSquare, delay: 0.3 },
  { label: 'AI Agents', icon: Bot, delay: 0.6 },
  { label: 'Cloud', icon: Cloud, delay: 0.9 },
  { label: 'Analytics', icon: BarChart3, delay: 1.2 },
  { label: 'Mobile Apps', icon: Smartphone, delay: 1.5 },
  { label: 'Websites', icon: Globe, delay: 1.8 },
  { label: 'SEO', icon: Search, delay: 2.1 },
  { label: 'Marketing', icon: Megaphone, delay: 2.4 },
  { label: 'Automation', icon: Workflow, delay: 2.7 },
  { label: 'E-commerce', icon: ShoppingBag, delay: 3.0 },
  { label: 'Cyber Security', icon: ShieldCheck, delay: 3.3 },
];

export const CORE_VALUES = [
  { title: 'Innovation', desc: 'We embrace emerging technology to solve tomorrow\'s problems today.' },
  { title: 'Integrity', desc: 'Honest counsel and transparent communication on every engagement.' },
  { title: 'Quality', desc: 'Engineering excellence with rigorous testing and code review.' },
  { title: 'Growth', desc: 'We scale our clients and our craft with every project we ship.' },
  { title: 'Customer Success', desc: 'Your outcomes are the metric we measure ourselves against.' },
  { title: 'Continuous Learning', desc: 'We invest in our people so they stay ahead of the curve.' },
];

export const SERVICES: { title: string; icon: LucideIcon; desc: string; items: string[] }[] = [
  {
    title: 'Website Development',
    icon: Globe,
    desc: 'Fast, SEO-optimized, conversion-focused websites built on modern frameworks.',
    items: ['Corporate Websites', 'Business Websites', 'Portfolio Websites', 'Landing Pages', 'SEO Optimized Websites', 'WordPress Websites', 'CMS Development', 'Website Redesign', 'Website Maintenance', 'Custom Web Applications'],
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    desc: 'Native and cross-platform mobile apps with delightful user experiences.',
    items: ['Android Apps', 'iOS Apps', 'Flutter Apps', 'React Native Apps', 'Hybrid Apps', 'Enterprise Apps', 'Business Apps', 'Custom Mobile Applications'],
  },
  {
    title: 'E-Commerce Development',
    icon: ShoppingBag,
    desc: 'Online stores that sell, with secure payments and inventory control.',
    items: ['Online Store Development', 'Shopify', 'WooCommerce', 'Magento', 'Payment Gateway Integration', 'Inventory Management', 'Customer Dashboard', 'Order Tracking', 'Admin Panel'],
  },
  {
    title: 'Custom Software Development',
    icon: Code2,
    desc: 'Tailored ERP, CRM, and management systems built around your operations.',
    items: ['ERP Systems', 'CRM Systems', 'Inventory Management', 'Billing Software', 'Business Management Software', 'HRMS', 'Learning Management Systems', 'Hospital Management Systems', 'School Management Systems'],
  },
];

export const AI_SOLUTIONS: { title: string; icon: LucideIcon; desc: string; items: string[] }[] = [
  {
    title: 'AI Chatbots',
    icon: MessageSquare,
    desc: 'Conversational AI across web, WhatsApp, and social channels.',
    items: ['Website AI Chatbots', 'WhatsApp AI Chatbots', 'Facebook Chatbots', 'Instagram AI Bots', 'Messenger Bots', 'Customer Support Bots', 'Appointment Booking Bots', 'Lead Generation Bots', 'FAQ Bots', 'GPT Powered Chatbots', 'Multilingual Chatbots', 'Voice AI Assistants'],
  },
  {
    title: 'AI Agents',
    icon: Bot,
    desc: 'Autonomous agents that handle real business workflows end-to-end.',
    items: ['Sales AI Agent', 'HR AI Agent', 'Recruitment AI Agent', 'Finance AI Agent', 'Customer Support AI Agent', 'Marketing AI Agent', 'Social Media AI Agent', 'Email AI Agent', 'CRM AI Agent', 'Business Intelligence AI Agent', 'Inventory AI Agent', 'Accounts AI Agent', 'Executive AI Assistant'],
  },
  {
    title: 'AI Automation',
    icon: Workflow,
    desc: 'Eliminate repetitive work with intelligent workflow automation.',
    items: ['Workflow Automation', 'Invoice Automation', 'Payroll Automation', 'CRM Automation', 'WhatsApp Automation', 'Marketing Automation', 'Business Automation', 'Lead Management Automation', 'Email Automation', 'Task Automation', 'Document Automation'],
  },
  {
    title: 'Generative AI Solutions',
    icon: Sparkles,
    desc: 'Integrate leading LLMs and generate content at scale.',
    items: ['ChatGPT Integration', 'OpenAI Integration', 'Gemini AI Integration', 'Claude AI Integration', 'AI Content Creation', 'AI Image Generation', 'AI Video Creation', 'AI Voice Generation', 'AI Proposal Generation', 'AI Presentation Generation', 'AI Knowledge Base', 'AI Search'],
  },
  {
    title: 'AI Consulting',
    icon: BrainCircuit,
    desc: 'From readiness assessment to governance, we guide your AI journey.',
    items: ['AI Readiness Assessment', 'AI Strategy', 'AI Implementation', 'AI Employee Training', 'AI Business Consulting', 'AI Security', 'AI Governance'],
  },
  {
    title: 'Business Intelligence',
    icon: BarChart3,
    desc: 'Dashboards and predictive analytics that turn data into decisions.',
    items: ['Power BI', 'Tableau', 'Executive Dashboards', 'Sales Analytics', 'Customer Analytics', 'Marketing Analytics', 'Financial Analytics', 'Business KPIs', 'Predictive Analytics', 'Forecasting'],
  },
];

export const MORE_SERVICES: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: 'Digital Marketing', icon: Megaphone, items: ['SEO', 'Google Ads', 'Facebook Ads', 'Instagram Marketing', 'YouTube Marketing', 'LinkedIn Marketing', 'Email Marketing', 'WhatsApp Marketing', 'Brand Strategy', 'Performance Marketing', 'Lead Generation', 'Conversion Optimization', 'Content Marketing', 'Influencer Marketing'] },
  { title: 'SEO Services', icon: Search, items: ['Technical SEO', 'Local SEO', 'On-page SEO', 'Off-page SEO', 'Keyword Research', 'Backlink Building', 'Google Business Profile Optimization', 'Core Web Vitals', 'Website Speed Optimization', 'Schema Markup'] },
  { title: 'Data Analytics', icon: LineChart, items: ['Business Intelligence', 'Power BI Dashboards', 'Excel Dashboards', 'Customer Insights', 'Sales Analytics', 'Forecasting', 'Business Reports', 'Decision Intelligence'] },
  { title: 'Business Consulting', icon: TrendingUp, items: ['Startup Consulting', 'Business Growth Strategy', 'Revenue Optimization', 'Digital Transformation', 'Business Planning', 'Market Research', 'Competitor Analysis', 'Process Improvement', 'Operational Excellence'] },
  { title: 'Sales Training', icon: Target, items: ['Sales Strategy', 'Sales Funnel', 'Customer Closing', 'Upselling', 'Cross Selling', 'Retail Sales', 'Corporate Sales', 'Lead Conversion'] },
  { title: 'Product Training', icon: GraduationCap, items: ['Employee Training', 'Product Knowledge', 'Sales Enablement', 'Customer Education'] },
  { title: 'Voice & Accent Training', icon: Mic, items: ['International Voice Process', 'Customer Communication', 'Soft Skills', 'Business English', 'Interview Training', 'Presentation Skills'] },
  { title: 'Customer Service Setup', icon: Headphones, items: ['CRM Setup', 'Support Team Training', 'Helpdesk Setup', 'Call Center Consulting', 'Customer Experience Design'] },
  { title: 'HR Services', icon: Users, items: ['Recruitment', 'Payroll Guidance', 'Employee Onboarding', 'Performance Management', 'Policy Documentation', 'HR Consulting'] },
  { title: 'Accounts Management', icon: Calculator, items: ['Bookkeeping', 'GST Guidance', 'Invoice Management', 'Accounting Setup', 'Financial Reporting', 'Business Finance Support'] },
];

export const INDUSTRIES = [
  'Retail', 'Healthcare', 'Education', 'Construction', 'Real Estate', 'Manufacturing',
  'Automobile', 'Restaurants', 'Hospitality', 'Travel', 'Finance', 'Insurance',
  'Logistics', 'E-Commerce', 'Startups', 'SMEs', 'Enterprises', 'Government', 'NGOs',
];

export const WHY_AI: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: '24/7 Customer Support', desc: 'AI agents respond instantly, any time, in any language.', icon: Clock },
  { title: 'AI Powered Decisions', desc: 'Data-driven recommendations instead of guesswork.', icon: Brain },
  { title: 'Lower Operational Costs', desc: 'Automate routine work and reduce overhead.', icon: DollarSign },
  { title: 'Intelligent Automation', desc: 'Connect systems and let AI handle the busywork.', icon: Cpu },
  { title: 'Higher Sales', desc: 'AI lead qualification and personalized outreach.', icon: TrendingUp },
  { title: 'Business Forecasting', desc: 'Predict demand, revenue, and churn with confidence.', icon: LineChart },
  { title: 'Employee Productivity', desc: 'Free your team from repetitive tasks.', icon: Zap },
  { title: 'Lead Qualification', desc: 'Score and route leads automatically.', icon: UserPlus },
  { title: 'Customer Personalization', desc: 'Tailor every experience in real time.', icon: Target },
  { title: 'Scalable Growth', desc: 'Grow without proportionally growing headcount.', icon: Rocket },
];

export const TECH_STACK: { category: string; icon: LucideIcon; tools: string[] }[] = [
  { category: 'Frontend', icon: LayoutDashboard, tools: ['React', 'Next.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend', icon: Code2, tools: ['Node.js', 'Python', 'Java', 'PHP', '.NET'] },
  { category: 'Database', icon: Database, tools: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { category: 'Cloud', icon: Cloud, tools: ['AWS', 'Azure', 'Google Cloud'] },
  { category: 'AI & ML', icon: BrainCircuit, tools: ['OpenAI GPT', 'Claude', 'Gemini', 'LangChain', 'Llama', 'Pinecone', 'TensorFlow', 'PyTorch', 'Hugging Face'] },
  { category: 'Automation', icon: Workflow, tools: ['Zapier', 'Make', 'n8n', 'Power Automate'] },
];

export const PORTFOLIO: { title: string; category: string; desc: string }[] = [
  { title: 'Corporate Website', category: 'Web Development', desc: 'A polished corporate presence with CMS and SEO.' },
  { title: 'Hospital Website', category: 'Web Development', desc: 'Appointment booking and patient portal integration.' },
  { title: 'Restaurant Website', category: 'Web Development', desc: 'Online menu, reservations, and order management.' },
  { title: 'Construction Company', category: 'Web Development', desc: 'Project showcase with lead capture forms.' },
  { title: 'Real Estate Platform', category: 'Web Development', desc: 'Listings, search filters, and agent dashboards.' },
  { title: 'School ERP', category: 'Software', desc: 'Attendance, fees, grades, and parent portal.' },
  { title: 'CRM Dashboard', category: 'Software', desc: 'Pipeline, contacts, and reporting in one place.' },
  { title: 'AI Chatbot', category: 'AI Solutions', desc: '24/7 multilingual support across web and WhatsApp.' },
  { title: 'Mobile App', category: 'Mobile', desc: 'Cross-platform app with offline support.' },
  { title: 'Inventory Software', category: 'Software', desc: 'Stock tracking, alerts, and supplier management.' },
  { title: 'Analytics Dashboard', category: 'BI', desc: 'Executive KPIs with predictive forecasting.' },
  { title: 'E-Commerce Website', category: 'E-Commerce', desc: 'Full store with payments and order tracking.' },
];

export const PROCESS_STEPS = [
  { title: 'Requirement Gathering', desc: 'We listen to your goals, challenges, and constraints.' },
  { title: 'Research', desc: 'We study your market, competitors, and users.' },
  { title: 'Planning', desc: 'We define scope, milestones, and architecture.' },
  { title: 'UI/UX Design', desc: 'We craft intuitive, on-brand interfaces.' },
  { title: 'Development', desc: 'We build with clean, tested, modular code.' },
  { title: 'Testing', desc: 'We verify quality across devices and edge cases.' },
  { title: 'Deployment', desc: 'We launch with zero-downtime releases.' },
  { title: 'Training', desc: 'We empower your team to use what we built.' },
  { title: 'Support & Maintenance', desc: 'We keep things fast, secure, and up to date.' },
  { title: 'Business Growth', desc: 'We iterate toward measurable outcomes.' },
];

export const STATS = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

export const WHY_CHOOSE_US = [
  'Affordable Pricing', 'Latest Technology', 'Experienced Team', 'AI Experts',
  'Fast Delivery', 'Scalable Solutions', 'Business Focused',
];

export const TESTIMONIALS: { name: string; role: string; quote: string }[] = [
  { name: 'Rajesh Kumar', role: 'CEO, Retail Chain', quote: 'SB Business Solutions transformed our inventory and online store. Sales jumped 40% in three months. Their AI chatbot handles customer queries round the clock.' },
  { name: 'Dr. Priya Sharma', role: 'Director, Healthcare Clinic', quote: 'The hospital website and appointment system they built is flawless. Patients book online and our front desk workload dropped dramatically.' },
  { name: 'Arun Murthy', role: 'Founder, Real Estate Startup', quote: 'From branding to the AI lead-generation bot, they handled everything. We now qualify leads automatically and close faster than ever.' },
  { name: 'Sneha Reddy', role: 'Marketing Head, E-Commerce Brand', quote: 'Their digital marketing and SEO work put us on page one. The analytics dashboard gives us clarity on every rupee spent.' },
  { name: 'Vikram Singh', role: 'COO, Manufacturing SME', quote: 'The ERP they custom-built replaced three separate tools. Reporting that took days now takes minutes. Truly a growth partner.' },
  { name: 'Fatima Khan', role: 'Owner, Restaurant Group', quote: 'Beautiful website, online ordering, and a WhatsApp bot for reservations. Our digital presence finally matches our food quality.' },
];

export const FAQS: { q: string; a: string }[] = [
  { q: 'What services does SB Business Solutions offer?', a: 'We offer end-to-end digital transformation: website and mobile app development, custom software, AI chatbots and agents, automation, digital marketing, SEO, data analytics, business consulting, sales and voice training, HR services, and accounts management.' },
  { q: 'How do AI chatbots and agents benefit my business?', a: 'They provide 24/7 customer support, qualify leads automatically, handle bookings, automate repetitive tasks, and personalize customer interactions — reducing operational costs while increasing sales and satisfaction.' },
  { q: 'Do you work with startups and small businesses?', a: 'Absolutely. We serve startups, SMEs, and enterprises. Our solutions are scalable and we offer flexible pricing so businesses of any size can leverage enterprise-grade technology.' },
  { q: 'What is your typical project timeline?', a: 'Timelines vary by scope. A standard website takes 2-4 weeks, a mobile app 6-10 weeks, and custom software or AI solutions 8-16 weeks. We share a detailed milestone plan after the requirement gathering phase.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes. We offer maintenance, security updates, performance monitoring, and feature enhancements. Our 24/7 support ensures your systems stay fast, secure, and reliable.' },
  { q: 'Can you integrate AI into my existing systems?', a: 'Yes. We integrate AI chatbots, agents, and automation into your current websites, CRMs, ERPs, and communication channels like WhatsApp and email — without disrupting existing operations.' },
  { q: 'How do I get started?', a: 'Click "Get Free Consultation" anywhere on the site or call us at +91 6369271486. We\'ll discuss your goals and recommend the right solutions with a transparent quote.' },
];

export const BLOG_POSTS: { title: string; excerpt: string; category: string; date: string; readTime: string }[] = [
  { title: 'How AI Agents Are Reshaping Customer Support in 2026', excerpt: 'Autonomous AI agents now handle complex multi-step support workflows. Here\'s how businesses are deploying them and the ROI they\'re seeing.', category: 'AI Solutions', date: 'Jul 28, 2026', readTime: '6 min read' },
  { title: 'The Complete Guide to Digital Transformation for SMEs', excerpt: 'A practical roadmap for small and medium enterprises to modernize operations, adopt AI, and scale without breaking the budget.', category: 'Digital Transformation', date: 'Jul 20, 2026', readTime: '8 min read' },
  { title: '10 SEO Trends That Will Dominate This Year', excerpt: 'From Core Web Vitals to AI-driven search, here are the SEO strategies that actually move the needle for businesses today.', category: 'SEO', date: 'Jul 12, 2026', readTime: '5 min read' },
  { title: 'Building Your First WhatsApp AI Chatbot: A Step-by-Step Guide', excerpt: 'Learn how to deploy a GPT-powered WhatsApp chatbot that handles customer queries, bookings, and lead capture automatically.', category: 'AI Solutions', date: 'Jul 5, 2026', readTime: '7 min read' },
];

export const CAREERS: { role: string; type: string; location: string }[] = [
  { role: 'Business Analyst', type: 'Full-time', location: 'Chennai / Remote' },
  { role: 'Digital Marketing Specialist', type: 'Full-time', location: 'Chennai / Remote' },
  { role: 'Web Developer', type: 'Full-time', location: 'Chennai / Remote' },
  { role: 'Flutter Developer', type: 'Full-time', location: 'Chennai / Remote' },
  { role: 'AI Engineer', type: 'Full-time', location: 'Chennai / Remote' },
  { role: 'Sales Executive', type: 'Full-time', location: 'Chennai' },
];

export const INTERNSHIPS = ['Business Analyst', 'Digital Marketing', 'Web Developer', 'Flutter Developer', 'AI Engineer', 'Sales Executive'];

export const SERVICE_OPTIONS = [
  'Website Development', 'Mobile App Development', 'E-Commerce Development', 'Custom Software',
  'AI Chatbots', 'AI Agents', 'AI Automation', 'Generative AI', 'AI Consulting', 'Business Intelligence',
  'Digital Marketing', 'SEO Services', 'Data Analytics', 'Business Consulting',
  'Sales Training', 'Product Training', 'Voice & Accent Training', 'Customer Service Setup',
  'HR Services', 'Accounts Management', 'Other',
];

export const BUDGET_OPTIONS = ['Under ₹25,000', '₹25,000 - ₹75,000', '₹75,000 - ₹2,00,000', '₹2,00,000 - ₹5,00,000', 'Above ₹5,00,000', 'Not sure yet'];

export const ClientLogos = ['TechCorp', 'MediCare+', 'BuildPro', 'EduSmart', 'ShopWave', 'FinEdge', 'LogiMove', 'FoodieHub'];
