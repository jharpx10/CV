import { languages } from 'utils/data';
import Language from 'components/Language';
import SectionTitle from 'components/SectionTitle';
import { languagesSection } from 'utils/homeSections';

const Languages = () => (
  <div id={languagesSection.id} className='container'>
    <SectionTitle text={languagesSection.title} />
    {languages.map((language) => (
      <Language name={language.name} proficiency={language.proficiency} />
    ))}
  </div>
);

export default Languages;
