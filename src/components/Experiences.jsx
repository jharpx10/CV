import Experience from 'components/Experience';

const Experiences = ({ experiences }) => (
  <div id='experiencesContainer' className='container'>
    {experiences.map((experience) => (
      <Experience
        initialDate={experience.initialDate}
        endDate={experience.endDate}
        title={experience.title}
        entity={experience.entity}
        description={experience.description}
      />
    ))}
  </div>
);
export default Experiences;
