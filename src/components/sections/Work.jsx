import Experiences from 'components/Experiences';
import { laboralExperiences } from 'utils/data';
import SectionTitle from 'components/SectionTitle';
import { workSection } from 'utils/homeSections';

const Work = () => (
  <div className='container' id={workSection.id}>
    <SectionTitle text={workSection.title} />
    <Experiences experiences={laboralExperiences} />
  </div>
);
export default Work;
