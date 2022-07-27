import React from 'react';
import GeneralInfo from 'components/sections/GeneralInfo';
import Academic from 'components/sections/Academic';
import Laboral from 'components/sections/Laboral';
import Hobbies from 'components/sections/Hobbies';
import Languages from 'components/sections/Languages';
import Courses from 'components/sections/Courses';
const Home = () => (
  <main>
    <GeneralInfo />
    <Academic />
    <Laboral />
    <Hobbies />
    <Languages />
    <Courses/>
  </main>
);

export default Home;
