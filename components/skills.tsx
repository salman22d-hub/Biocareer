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
      'Python (Pandas/NumPy)', // <-- Bas yeh change kiya hai, layout bilkul original hai!
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