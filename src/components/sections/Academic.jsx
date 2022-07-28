import Experiences from 'components/Experiences';
import SectionTitle from 'components/SectionTitle';
import { formation } from 'utils/homeSections';
import { academicExperiences } from 'utils/data';

const Academic = () => (
  <div className='' id={formation.id}>
    <SectionTitle text={formation.title} />
    <Experiences experiences={academicExperiences} />
  </div>
);
export default Academic;
