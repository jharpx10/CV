import Experiences from 'components/Experiences';
import SectionTitle from 'components/SectionTitle';
import { formationSection } from 'utils/homeSections';
import { academicExperiences } from 'utils/data';

const Academic = () => (
  <div className='container first-content' id={formationSection.id}>
    <SectionTitle text={formationSection.title} />
    <Experiences experiences={academicExperiences} />
  </div>
);
export default Academic;
