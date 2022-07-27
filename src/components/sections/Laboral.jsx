import Experiences from 'components/Experiences';
import  { laboralExperiences} from 'utils/constants'
import SectionTitle from 'components/SectionTitle';

const Laboral = () => (
  <div className=''>
    <SectionTitle
    text="EXPERIENCIA PROFESIONAL"
    />
    <Experiences experiences={laboralExperiences} />
  </div>
);
export default Laboral;
