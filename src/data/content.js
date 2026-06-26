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
    title: 'Cloud ETL/ELT Pipeline Platform',
    description:
      'Designed and maintained scalable batch and streaming data pipelines on Snowflake and AWS (S3, EC2, IAM), with SQL/Python-based ELT transformations to curate analytics-ready datasets across multiple business domains.',
    tags: ['Snowflake', 'AWS', 'Python', 'SQL'],
    link: '',
    repo: '',
  },
  {
    title: 'Production Data Quality & Monitoring Framework',
    description:
      'Built data quality checks, audit controls, and error-handling mechanisms alongside automated deployment pipelines and workflow monitoring, reducing manual intervention and improving reliability in production.',
    tags: ['Data Quality', 'Automation', 'Snowpipe', 'Git'],
    link: '',
    repo: '',
  },
  {
    title: 'Leadership KPI Dashboards',
    description:
      'Developed interactive Power BI and Tableau dashboards — with drilldowns, parameters, and calculated fields — giving senior leadership real-time visibility into operational and business KPIs.',
    tags: ['Power BI', 'Tableau', 'SSRS', 'KPI Design'],
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
