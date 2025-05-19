/*
  # Add initial website data

  1. Initial Data
    - Services data from ServiceData.tsx
    - Tech stack data from ServiceData.tsx
    - Metrics data from PortfolioPage.tsx
*/

-- Insert initial services
INSERT INTO services (title, description, icon, features, category)
VALUES
  ('Web Design & Development', 'Custom, responsive, and user-friendly websites built to meet business goals and drive engagement.', 'Globe', ARRAY[
    'Responsive design for all devices',
    'Interactive UI/UX design',
    'Performance optimization',
    'SEO-friendly structure'
  ], 'Development'),
  ('Web Services', 'Comprehensive web services to ensure your online presence runs smoothly and securely.', 'Server', ARRAY[
    'Web Hosting',
    'Domain Management',
    'Website Maintenance',
    'WordPress Plugin Development',
    'Payment Gateway Integration',
    'API Integration'
  ], 'Services'),
  ('Email Management', 'Professional email solutions for effective business communication and collaboration.', 'Mail', ARRAY[
    'Microsoft 365 (O365)',
    'Google Workspace',
    'Zoho Mail',
    'cPanel Email Services',
    'Email Migration',
    'SPF/DKIM/DMARC setup'
  ], 'Services'),
  ('Custom Applications & Solutions', 'Tailored software solutions designed specifically for your business needs and workflows.', 'Cpu', ARRAY[
    'Point of Sale Systems',
    'Restaurant Management',
    'Hospital Information Systems',
    'Learning Management Systems (LMS)',
    'Inventory & Warehouse Management',
    'Ticketing Systems'
  ], 'Development'),
  ('Cloud & Server Management', 'Expert cloud infrastructure setup and maintenance across all major platforms.', 'Cloud', ARRAY[
    'AWS, Azure, Google Cloud, Oracle Cloud',
    'Docker, Kubernetes, Terraform, Ansible',
    'VPS, Private Cloud, Bare-metal Servers',
    'Cloud migration and optimization'
  ], 'Infrastructure'),
  ('Creative & Branding Services', 'Professional design services to establish and enhance your brand identity.', 'PaintBucket', ARRAY[
    'UI/UX Design',
    'Graphic Design',
    'Logo Design',
    'Branding & Identity',
    'Product Design',
    'Tools: Figma, Adobe XD, Photoshop, Illustrator'
  ], 'Design'),
  ('Marketing Services', 'Strategic digital marketing to increase your online visibility and reach your target audience.', 'Megaphone', ARRAY[
    'SEO, PPC, SEM',
    'Email Marketing',
    'Event Marketing & Planning',
    'Social Media Marketing',
    'Tools: Google Ads, Meta Ads, Analytics, Semrush, Ahrefs'
  ], 'Marketing'),
  ('Software Development', 'Professional development of desktop and mobile applications across multiple platforms.', 'Code', ARRAY[
    'Desktop & Mobile App Development',
    'Cross-platform Apps (Flutter, React Native)',
    'Custom SaaS & MIS Solutions',
    'Agile development methodology'
  ], 'Development'),
  ('Enterprise Solutions', 'Comprehensive enterprise-level solutions to streamline business operations.', 'Building2', ARRAY[
    'CRM Solutions (HubSpot, Zoho CRM, Salesforce)',
    'ERP Implementation (Odoo, ERPNext, SAP)',
    'AI / LLM Automation (OpenAI, LangChain, Pinecone)',
    'Enterprise workflow optimization'
  ], 'Enterprise'),
  ('Hardware & IT Infrastructure', 'Complete hardware solutions and enterprise-grade IT support services.', 'Monitor', ARRAY[
    'Laptops, PCs, Printers & Accessories',
    'Enterprise-grade IT Support & Services',
    'Remote Support Tools: AnyDesk, TeamViewer',
    'Network infrastructure setup'
  ], 'Infrastructure')
ON CONFLICT DO NOTHING;

-- Insert tech stack data
INSERT INTO tech_stack (category, name, icon)
SELECT 'Frontend', name, '⚡'
FROM unnest(ARRAY[
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vue',
  'Bootstrap',
  'Tailwind'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'Backend', name, '🚀'
FROM unnest(ARRAY[
  'PHP',
  'Node.js',
  'Python',
  'Laravel',
  'Django'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'CMS', name, '📝'
FROM unnest(ARRAY[
  'WordPress',
  'WooCommerce',
  'Shopify'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'Database', name, '💾'
FROM unnest(ARRAY[
  'MySQL',
  'PostgreSQL',
  'MongoDB'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'Cloud', name, '☁️'
FROM unnest(ARRAY[
  'AWS',
  'Azure',
  'GCP',
  'Oracle Cloud'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'Mobile', name, '📱'
FROM unnest(ARRAY[
  'Flutter',
  'React Native',
  'Java',
  'Swift'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'DevOps', name, '🔧'
FROM unnest(ARRAY[
  'Docker',
  'Kubernetes',
  'cPanel',
  'GitHub Actions'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'Design', name, '🎨'
FROM unnest(ARRAY[
  'Figma',
  'Adobe Suite'
]) AS name
ON CONFLICT DO NOTHING;

INSERT INTO tech_stack (category, name, icon)
SELECT 'Marketing', name, '📈'
FROM unnest(ARRAY[
  'Mailchimp',
  'Google Ads',
  'Meta Ads',
  'Analytics'
]) AS name
ON CONFLICT DO NOTHING;

-- Insert metrics data
INSERT INTO metrics (label, value)
VALUES
  ('Projects Completed', '150+'),
  ('Happy Clients', '40+'),
  ('Industries Served', '12+'),
  ('Years of Experience', '8+')
ON CONFLICT DO NOTHING;