import {
  crypto,
  chess,
  beatles,
  development,
  physics,
  databaseCourse,
  lenguagesCourse,
  designCourse,
  arquitectureCourse,
  communicationsCourse,
  testCourse,
} from 'utils/images';

export const generalInformation = {
  fullName: 'JUAN ALEJANDRO RIOS PEREZ',
  profession: 'Analista de calidad',
  description:
    'Analista de calidad con conocimientos de pruebas automatizadas, habilidades desarrollo de software y trabajo en metodología ágil Scrum',
  location: 'Medellín, Antioquia',
  cellphone: '+573127095081',
};

export const laboralExperiences = [
  {
    initialDate: 'Mayo 2021',
    endDate: 'Abril 2022',
    title: 'Analista de calidad',
    entity: 'Tata Consultacy Services',
    description: 'elaboración',
  },
  {
    initialDate: 'Abril 2022',
    endDate: 'Presente',
    title: 'Analista de calidad',
    entity: 'Choucair Testing S.A.',
  },
];

export const academicExperiences = [
  {
    initialDate: '',
    endDate: '2016',
    title: 'Bachiller',
    entity: 'Colegio Parroquial Emaús',
  },
  {
    initialDate: '2017',
    endDate: '2023',
    title: 'Ingeniero de sistemas',
    entity: 'Universidad de antioquia',
  },
];

export const hobbies = [
  { name: 'Desarrollo', imgSrc: development },
  {
    name: 'Criptomonedas',
    imgSrc: crypto,
  },
  {
    name: 'Ajedrez',
    imgSrc: chess,
  },
  {
    name: 'Beatles',
    imgSrc: beatles,
  },
  {
    name: 'Física',
    imgSrc: physics,
  },
];

export const languages = [
  { name: 'Español', proficiency: 'Nativo' },
  { name: 'Inglés', proficiency: 'B2' },
];

export const courses = [
  { name: 'Bases de datos', imgSrc: databaseCourse, date: '2021' },
  { name: 'Teoría de lenguajes', imgSrc: lenguagesCourse, date: '2020' },
  { name: 'Análisis y diseño de software', imgSrc: designCourse, date: '2019' },
  {
    name: 'Arquitectura de computadores',
    imgSrc: arquitectureCourse,
    date: '2017',
  },
  {
    name: 'Comunicaciones y laboratorio',
    imgSrc: communicationsCourse,
    date: '2018',
  },
  { name: 'Pruebas de software', imgSrc: testCourse, date: '2022' },
];

export const socialLinks = [
  { name: 'Correo', link: 'mailto:jharpx10@gmail.com' },
  { name: 'Github', link: 'https://github.com/jharpx10' },
  {
    name: 'Linkedin',
    link: 'https://co.linkedin.com/in/juan-alejandro-rios-perez-226383150?trk=people-guest_people_search-card',
  },
];
