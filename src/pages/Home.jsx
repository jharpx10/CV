import React from 'react';
import Academic from 'components/sections/Academic';
import Labor from 'components/sections/Labor';
import Hobbies from 'components/sections/Hobbies';
import Languages from 'components/sections/Languages';
import Courses from 'components/sections/Courses';

const Home = () => (
  <main>
    <Academic />
    <Labor />
    <Hobbies />
    <Languages />
    <Courses />
  </main>
);

export default Home;
