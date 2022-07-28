import React from 'react';
import Academic from 'components/sections/Academic';
import Work from 'components/sections/Work';
import Hobbies from 'components/sections/Hobbies';
import Languages from 'components/sections/Languages';
import Courses from 'components/sections/Courses';

const Home = () => (
  <main>
    <Academic />
    <Work />
    <Hobbies />
    <Languages />
    <Courses />
  </main>
);

export default Home;
