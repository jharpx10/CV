import Experiences from 'components/Experiences';
import SectionTitle from 'components/SectionTitle';
import { academicExperiences } from 'utils/constants';

const Academic = () => (
  <div className=''>
    <SectionTitle text='FORMACIÓN' />
    <Experiences experiences={academicExperiences} />
  </div>
);
export default Academic;
