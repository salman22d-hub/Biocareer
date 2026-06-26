export const profile = {
  name: 'Dr. Salman Waheed',
  title: 'Life Sciences Professional | Researcher | AI & Data Operations Leader',
  bio: 'Dedicated and highly analytical Life Sciences Professional and Researcher with a strong foundational background in complex biological systems, epidemiology concepts, and longitudinal data analysis. Proven track record of executing rigorous experimental designs, managing technical operations, and publishing peer-reviewed scientific literature. Combines biomedical research foundations with modern computational workflows, Python, and AI tools to bridge the gap between data science and health trajectories. Adaptable and motivated to contribute to high-quality health research.',
  location: 'House #9, Street #22, X Block, Peoples Colony, Gujranwala, Pakistan',
  email: 'salman22d@gmail.com',
  phone: '+92 333 8178717',
  languages: [
    { name: 'English', note: 'IELTS Certified' },
    { name: 'Urdu', note: 'Native' },
    { name: 'Punjabi', note: 'Native' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export type SkillCategory =
  | 'Research & Methodology'
  | 'Statistical & Computational'
  | 'Digital & AI Integration'
  | 'Scientific Communication'
  | 'Technical Adaptability'

export const skillGroups: {
  category: SkillCategory
  description: string
  skills: string[]
}[] = [
  {
    category: 'Research & Methodology',
    description: 'Designing and running rigorous, reproducible biological experiments.',
    skills: [
      'Experimental Design',
      'Data Collection',
      'Biological Sample Processing',
      'Microscopic Analysis',
      'Laboratory Quality Control',
    ],
  },
  {
    category: 'Statistical & Computational',
    description: 'Turning raw experimental data into validated insight.',
    skills: [
      'SPSS (Two-way ANOVA)',
      'Regression Analysis',
      'Post-hoc Tests',
      'Python (Pandas/NumPy)',
      'Data Scraping',
      'Research Literature Mining',
    ],
  },
  {
    category: 'Digital & AI Integration',
    description: 'Modern tooling that accelerates analysis and operations.',
    skills: [
      'Advanced MS Office',
      'Excel Data Charting',
      'Google Workspace',
      'ChatGPT',
      'Claude',
      'Gemini',
    ],
  },
  {
    category: 'Scientific Communication',
    description: 'Communicating findings clearly across teams and journals.',
    skills: [
      'Technical Content Writing',
      'Research Publishing',
      'Data Presentation',
      'Cross-functional Team Leadership',
    ],
  },
  {
    category: 'Technical Adaptability',
    description: 'Rapidly mastering complex automated and computational pipelines.',
    skills: [
      'Automated Workflows',
      'Technical Pipelines',
      'Computational Data Processing',
      'Process Optimization',
    ],
  },
]

export const experiences = [
  {
    role: 'Team Leader — Technical/Scientific Operations',
    org: 'Agro Tech Industry',
    location: 'Gujranwala, Pakistan',
    period: 'April 2017 – Present',
    current: true,
    points: [
      'Lead and oversee daily technical and scientific operations, ensuring strict quality control and process optimization.',
      'Manage cross-functional teams to streamline workflows and improve operational efficiency.',
      'Utilize analytical skills to solve technical challenges and drive project success.',
    ],
  },
  {
    role: 'AI Intern',
    org: 'MH Tech Solution',
    location: 'Gujranwala, Pakistan',
    period: 'August 2025 – Present',
    current: true,
    points: [
      'Explore and integrate AI frameworks and digital tools to optimize business workflows and data processing.',
      'Assist in technical tasks utilizing Python (Pandas/NumPy) for data extraction, restructuring, and prompt engineering.',
    ],
  },
  {
    role: 'Assistant Farm Manager',
    org: 'Marhaba Dairy Farm',
    location: 'Gujranwala, Pakistan',
    period: 'March 2016 – April 2017',
    current: false,
    points: [
      'Managed daily farm operations, livestock health protocols, and production data tracking.',
    ],
  },
  {
    role: 'Field Coordinator',
    org: 'Punjab Livestock and Dairy Development Board',
    location: 'Narowal & Sialkot, Pakistan',
    period: 'June 2012 – June 2013',
    current: false,
    points: [
      'Coordinated field operations, community engagement, and development projects at the district level.',
    ],
  },
  {
    role: 'Veterinary Officer (H)',
    org: 'Punjab Livestock and Dairy Development Department',
    location: 'Nankana Sahib, Pakistan',
    period: 'December 2010 – March 2012',
    current: false,
    points: [
      'Provided clinical services, animal health management, and implemented government welfare programs.',
    ],
  },
]

export const education = [
  {
    degree: 'M. Phil (Theriogenology / Animal Reproduction)',
    institution: 'University of Agriculture, Faisalabad',
    period: '2009 – 2011',
    grade: 'CGPA: 3.61 / 4.00 (1st Division)',
    detail:
      'Thesis: Evaluation of Different Levels of Duck Egg Yolk in Extenders for the Cryopreservation of Nili-Ravi Buffalo Bull Semen.',
  },
  {
    degree: 'DVM (Doctor of Veterinary Medicine — 5 Year Degree)',
    institution: 'University of Agriculture, Faisalabad',
    period: '2004 – 2009',
    grade: 'CGPA: 3.21 / 4.00 (1st Division)',
    detail:
      'Five-year professional degree covering clinical medicine, surgery, and animal sciences.',
  },
  {
    degree: 'Higher Secondary & Matriculation',
    institution: 'BISE Gujranwala',
    period: 'Foundational Education',
    grade: '1st Division',
    detail:
      'Pre-medical foundation in biology, chemistry, and physics under the Board of Intermediate & Secondary Education, Gujranwala.',
  },
]

export const research = {
  project: {
    title: 'M. Phil Research Project (Computational Epidemiology focus)',
    description:
      "Designed and executed a controlled epidemiological study comparing biological and nutritional compositions of five distinct cryoprotective extender formulations. Managed large-scale longitudinal tracking of 30 pooled datasets from controlled cohorts over a 10-week period, using two-way ANOVA and Duncan's Multiple Range Test in SPSS.",
  },
  publications: [
    {
      title:
        'Evaluation of Duck Egg Yolk for the Cryopreservation of Nili-Ravi Buffalo Bull Semen',
      journal: 'Animal Reproduction Science',
      meta: '(2012) 131, 95–99 · Elsevier',
      tag: 'Peer-Reviewed',
    },
    {
      title:
        'Effects of Different Levels of Pigeon Egg Yolk in Extenders on the Post-Thaw Semen Quality of Sahiwal Bulls',
      journal: 'Pakistan Veterinary Journal',
      meta: 'ISSN: 0253-8318',
      tag: 'Peer-Reviewed',
    },
  ],
}