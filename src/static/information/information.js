import CV from '../files/VirenCv.pdf';

// List of technologies
const technologies = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Redux',
  'Typescript',
  ' Node.js',
  ' Express.js',
  ' Mongoose.js',
  'MongoDB',
  'Amazon Web Services',
  'REST APIs',
];

// List of tools
const tools = ['Webpack', 'Git', 'Github', 'NPM', 'Postman', 'VSCode'];

// List of work experiences
const workExperience = [
  {
    companyName: 'Strive School Gmbh',
    position: 'Full Stack Developer',
    duration: 'Feb 2021 - Nov 2021',
  },
  {
    companyName: 'MIKROBIT Sp. z o.o.',
    position: 'INTERN',
    duration: 'Feb 2020 - Apr 2020',
  },
  {
    companyName: 'J&C Group Sp. z o.o.',
    position: 'INTERN',
    duration: 'Jan 2019 - Mar 2019',
  },
];

// List of education details
const education = [
  {
    university: 'Wyższa Szkoła Ekonomii i Innowacji',
    course: 'Bachelor of Computer Science',
    duration: 'Oct 2018 - Feb 2021',
  },
];

// List of soft skills
const softSkills = [
  'Experience working in an international environment',
  'Independent and quick learner',
  'Experience working in dedicated teams Proactive',
  'Strong verbal and logical reasoning skills',
  'Professional Ethics',
];

// List of projects
const projects = [
  {
    projectName: 'Applicant Tracking System (ATS)',
    description:
      'Web application that enables the electronic handling of recruitment and hiring needs. An all in one solution for posting jobs and carrying out their complete recruitment processes.',
    liveURL: 'https://joblify-frontend.vercel.app/',
    codeURL: 'https://github.com/Virusviren/Joblify-Frontend',
  },
  {
    projectName: 'Github Finder',
    description:
      ' Web application which helps people to find any github user and any details associated with their profile such as repositories, contribution, job preferences etc.',
    liveURL: 'https://flamboyant-benz-19e28b.netlify.app/',
    codeURL: 'https://github.com/Virusviren/GitHub-Finder',
  },
  {
    projectName: 'Note Keeper',
    description:
      'Web application which is similar to google notes. It allows users to create, view, update and delete their everyday notes, so that they can organise their work efficiently.',
    liveURL: 'https://blissful-hopper-8a9a25.netlify.app/',
    codeURL: 'https://github.com/Virusviren/NoteKeeper',
  },
  {
    projectName: 'Weather App',
    description:
      'Web application which shows weather forecast with a nice image of the searched city.',
    liveURL: 'https://elegant-knuth-48e4d8.netlify.app/   ',
    codeURL: 'https://github.com/Virusviren/Weather-Application',
  },
];

// List of contact details
const contact = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/viren-patil-b52393125/',
    urlTarget: '__blank',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Virusviren',
    urlTarget: '__blank',
  },
  {
    name: '+48 579 209 416',
    url: '/',
    urlTarget: '',
  },
  {
    name: 'virenpatil1@outlook.com',
    url: 'mailto:virenpatil1@outlook.com',
    urlTarget: '',
  },
  { name: 'CV', url: CV, urlTarget: '' },
  {
    name: 'Lublin, Poland',
    url: '/',
    urlTarget: '',
  },
];

// Export all information
export {
  technologies,
  tools,
  workExperience,
  education,
  softSkills,
  projects,
  contact,
};
