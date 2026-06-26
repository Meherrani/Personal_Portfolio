export const profile = {
  name: 'Meher Rani Pusarla',
  title: 'Data Engineer',
  tagline:
    'Designing and supporting reliable ETL/ELT pipelines and BI dashboards that turn raw data into decisions.',
  location: 'Atlanta, GA',
  email: 'meherranipusarla@gmail.com',
  linkedin: 'https://www.linkedin.com/in/meherrani',
  github: 'https://github.com/Meherrani',
  resumeUrl: '#',
}

export const about = {
  summary:
    "I'm a Data Engineer with 2+ years of experience designing, building, and supporting batch-oriented ETL/ELT pipelines in cloud environments. I work extensively with Snowflake and AWS to move data from raw source systems into clean, analytics-ready stores, and I partner closely with business stakeholders and analysts to turn reporting requirements into well-structured data models and KPI dashboards in Power BI and Tableau.",
  highlights: [
    { label: 'Years of experience', value: '2+' },
    { label: 'Certifications', value: '2' },
    { label: 'Core platform', value: 'Snowflake' },
  ],
}

export const experience = [
  {
    role: 'Data Analytics Engineer',
    company: 'RootIT Services',
    period: 'Aug 2025 — Present',
    location: 'Atlanta, GA',
    points: [
      'Designed, built, and maintained scalable batch and streaming data pipelines supporting analytics and reporting across multiple business domains.',
      'Developed and optimized SQL and Python-based ELT transformations to curate analytics-ready datasets using Snowflake and AWS (S3, EC2, IAM).',
      'Partnered with multi-functional data and analytics teams to translate business requirements into well-structured data models and pipeline architectures.',
      'Implemented data quality checks, audit controls, and error-handling mechanisms to ensure data accuracy and high availability in production.',
      'Implemented automated deployment pipelines and workflow monitoring to reduce manual intervention and improve deployment efficiency.',
    ],
  },
  {
    role: 'Intern Data Analyst',
    company: 'ER Data Solutions',
    period: 'Jul 2024 — Jul 2025',
    location: 'Chicago, IL (Remote)',
    points: [
      'Collaborated with business stakeholders to translate reporting needs into structured datasets, ad-hoc queries, and BI reports.',
      'Developed and maintained interactive Tableau dashboards with drill-down, drop-down, and parameterized features for leadership teams.',
      'Built leadership dashboards using SSRS to surface predictive insights and enable timely, data-driven action.',
      'Ran integrity checks comparing data, SQL, and visualization layers prior to migrations and upgrades.',
      'Automated Tableau report refresh schedules and monitored workflows to improve data availability.',
    ],
  },
]

export const education = [
  {
    degree: "Master's in Data Science",
    school: 'DePaul University',
    period: '',
    details: '',
  },
]

export const certifications = [
  'AWS Certified Cloud Practitioner',
  'SnowPro Core Certification (COF-C02)',
]

export const skills = [
  {
    category: 'Programming & Querying',
    items: ['SQL', 'Python', 'C', 'JavaScript'],
  },
  {
    category: 'Data Warehousing',
    items: ['Snowflake', 'Data Staging', 'COPY INTO', 'Snowpipe'],
  },
  {
    category: 'Databases',
    items: ['Snowflake', 'SQL Server', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'ETL / Data Integration',
    items: ['ETL/ELT Pipelines', 'Informatica PowerCenter', 'SSIS', 'SSAS', 'SSRS'],
  },
  {
    category: 'Cloud Platforms',
    items: ['AWS (S3, IAM, EC2, Glue)', 'Azure'],
  },
  {
    category: 'Business Intelligence',
    items: ['Tableau', 'Power BI', 'Calculated Fields', 'LOD Expressions'],
  },
  {
    category: 'Data Modeling',
    items: ['Dimensional Modeling', 'Star Schema', 'Snowflake Schema', 'Fact & Dimension Tables'],
  },
  {
    category: 'Analytics & Reporting',
    items: ['KPI Development', 'Ad-hoc Analysis', 'Data Validation', 'Reporting Automation'],
  },
  {
    category: 'Machine Learning & Data Science',
    items: ['Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow/Keras', 'Feature Engineering'],
  },
]

export const projects = [
  {
    title: 'Autonomous Driving with Deep Reinforcement Learning',
    description:
      'Built and trained RL agents (DQN, PPO, A2C) in highway-env to navigate complex driving scenarios like highways, intersections, and roundabouts. Tuned hyperparameters (γ, learning rate) and evaluated agents using mean reward and success rate metrics, achieving 100% success in highway tasks and strong performance in roundabouts using optimal configurations. Gained hands-on experience with model stability and decision-making under uncertainty in safety-critical environments.',
    tags: ['DQN', 'PPO', 'A2C', 'highway-env', 'Reinforcement Learning', 'Python'],
    link: '',
    repo: '',
  },
  {
    title: 'LinkedIn Job Postings Analysis',
    description:
      'Analyzed 124K+ LinkedIn job postings by merging multi-table datasets (Companies, Jobs, Skills, Postings) and performing extensive EDA to uncover industry, company, and state-level hiring patterns. Built regression models to estimate salary drivers and visualized industry growth, skills demand, and location trends through rich visual analytics — market-share charts, top-company hiring distributions, and salary trend plots. Recommended the top co-anchor client using a multi-factor evaluation (industry dominance, hiring volume, state distribution, ATS usage, and stock-growth analysis), directly informing the startup\'s strategic client targeting.',
    tags: ['Python', 'EDA', 'Regression', 'Data Visualization', 'SQL'],
    link: '',
    repo: '',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
