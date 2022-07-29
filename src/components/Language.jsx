const Language = ({ name, proficiency }) => (
  <div id='languageCard'>
    <span className='font-bold'>{name}</span>
    <span>{proficiency}</span>
  </div>
);

export default Language;
