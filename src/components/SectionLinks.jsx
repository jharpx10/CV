import {
  formationSection,
  workSection,
  hobbiesSection,
  coursesSection,
  languagesSection,
} from 'utils/homeSections';
import SectionLink from 'components/SectionLink';

const sections = [
  formationSection,
  workSection,
  hobbiesSection,
  coursesSection,
  languagesSection,
];

const SectionsLinks = () => (
  <div id='sectionsLinks' className=''>
    {sections.map((section) => (
      <SectionLink text={section.linkText} id={section.id} />
    ))}
  </div>
);

export default SectionsLinks;
