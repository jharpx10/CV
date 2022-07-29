import { hobbies } from 'utils/data';
import Hobbie from 'components/Hobbie';
import SectionTitle from 'components/SectionTitle';
import { hobbiesSection } from 'utils/homeSections';

const Hobbies = () => (
  <div id={hobbiesSection.id} className='container'>
    <SectionTitle text={hobbiesSection.title} id={hobbiesSection.id} />
    {hobbies.map((hobbie) => (
      <Hobbie name={hobbie.name} imgSrc={hobbie.imgSrc} />
    ))}
  </div>
);

export default Hobbies;
