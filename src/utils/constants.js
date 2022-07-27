const crypto = require('assets/img/hobbies/crypto.png');
const chess = require('assets/img/hobbies/chess.png');
const beatles = require('assets/img/hobbies/beatles.png');
const development = require('assets/img/hobbies/development.png');
const physics = require('assets/img/hobbies/physics.png');

const databaseCourse = require('assets/img/courses/database.png');
const lenguagesCourse = require('assets/img/courses/languages.png');
const designCourse = require('assets/img/courses/design.png');
const arquitectureCourse = require('assets/img/courses/arquitecture.png');
const communicationsCourse = require('assets/img/courses/communications.png');
const testCourse = require('assets/img/courses/test.png');

const laboralExperiences = [
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

const academicExperiences = [
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

const hobbies = [
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

const languages = [
  { name: 'Español', proficiency: 'Nativo' },
  { name: 'Inglés', proficiency: 'B2' },
];

const courses = [
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

const socialLinks = [
  { name: 'Correo', link: 'mailto:jharpx10@gmail.com' },
  { name: 'Github', link: 'https://github.com/jharpx10' },
  {
    name: 'Linkedin',
    link: 'https://co.linkedin.com/in/juan-alejandro-rios-perez-226383150?trk=people-guest_people_search-card',
  },
];

module.exports = {
  crypto,
  chess,
  beatles,
  development,
  physics,
  laboralExperiences,
  academicExperiences,
  hobbies,
  languages,
  courses,
  socialLinks,
};
