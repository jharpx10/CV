import { hobbies } from 'utils/data';
import Hobbie from 'components/Hobbie';
import SectionTitle from 'components/SectionTitle';

const Hobbies = () => (
  <div id='hobbies'>
    <SectionTitle text='HOBBIES' id='hobbies' />
    {hobbies.map((hobbie) => (
      <Hobbie name={hobbie.name} imgSrc={hobbie.imgSrc} />
    ))}
  </div>
);

export default Hobbies;
