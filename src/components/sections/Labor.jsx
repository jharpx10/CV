import Experiences from 'components/Experiences';
import { laboralExperiences } from 'utils/data';
import SectionTitle from 'components/SectionTitle';

const Labor = () => (
  <div className='' id='labor'>
    <SectionTitle text='EXPERIENCIA PROFESIONAL' />
    <Experiences experiences={laboralExperiences} />
  </div>
);
export default Labor;
