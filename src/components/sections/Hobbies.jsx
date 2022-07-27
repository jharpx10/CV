import { hobbies } from 'utils/constants';
import Hobbie from 'components/Hobbie';
import SectionTitle from 'components/SectionTitle';

const Hobbies = () => (
  <div>
    <SectionTitle text='HOBBIES' />
    {hobbies.map((hobbie) => (
      <Hobbie name={hobbie.name} imgSrc={hobbie.imgSrc} />
    ))}
  </div>
);

export default Hobbies;
