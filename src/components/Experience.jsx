const Experience = ({ initialDate, endDate, title, entity, description }) => (
  <div id='experienceCard'>
    <div id='experienceInfo'>
      <span id='title'>{title}</span>
      <span id='entity'>{entity}</span>
      <span id='description'>{description}</span>
    </div>
    <div id='experienceDate'>
      <span id='initialDate'>{initialDate} </span>
      {initialDate !== '' && <span>-</span>}
      <span id='endDate'>{endDate}</span>
    </div>
  </div>
);
export default Experience;
