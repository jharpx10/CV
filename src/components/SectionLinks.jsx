import {
  formation,
  work,
  hobbies,
  courses,
  languages,
} from 'utils/homeSections';
import SectionLink from 'components/SectionLink';

const sections = [formation, work, hobbies, courses, languages];

const SectionsLinks = () => (
  <div className='text-center'>
    {sections.map((section) => (
      <SectionLink text={section.linkText} id={section.id} />
    ))}
  </div>
);

export default SectionsLinks;
