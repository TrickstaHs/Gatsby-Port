import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pedro Ricardo',
  subtitle: 'Futuro Dev na Social Bank!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Landing Page - Banco Mesa',
    info: 'Landing Page simples',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'To do ! ( Super Criativo )',
    info: 'Simples app para gerar uma lista de afazeres.',
    info2: '',
    url: 'https://snack.expo.io/@trickstahs/to-do-app',
    repo: 'https://snack.expo.io/@trickstahs/to-do-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Add Produto ( comunicacao com Firebase )',
    info: 'Aplicativo que cadastra produtos no objeto products do Realtime Database',
    info2: '', 
    url: 'https://snack.expo.io/@trickstahs/adicionar',
    repo: 'https://snack.expo.io/@trickstahs/adicionar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Pedra papel tesoura lagarto e Spock',
    info: 'Pedra Papel Tesoura so que mais interessante!!',
    info2: 'Um dos primeiros app em React-Native que fiz',
    url: 'https://snack.expo.io/@trickstahs/pedra-papel-tesoura-lagarto-e-spock',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pedro-ricardo-5893241bb/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TrickstaHs',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
