import { languages } from 'utils/data';
import Language from 'components/Language';
import SectionTitle from 'components/SectionTitle';

const Languages = () => (
  <div id='languages'>
    <SectionTitle text='LENGUAJES' />
    {languages.map((language) => (
      <Language name={language.name} proficiency={language.proficiency} />
    ))}
  </div>
);

export default Languages;
