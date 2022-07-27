import { languages } from 'utils/constants';
import Language from 'components/Language';
import SectionTitle from 'components/SectionTitle';

const Languages = () => (
  <div>
    <SectionTitle text='LENGUAJES' />
    {languages.map((language) => (
      <Language name={language.name} proficiency={language.proficiency} />
    ))}
  </div>
);

export default Languages;
