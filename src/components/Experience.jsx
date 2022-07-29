const Experience = ({ initialDate, endDate, title, entity, description }) => (
  <div id='experienceCard'>
    <span id='title'>{title}</span>
    <span id='entity'>{entity}</span>
    <span id='description'>{description}</span>

    <div id='experienceDate'>
      <span id='initialDate'>{initialDate}</span>
      <span id='endDate'>{endDate}</span>
    </div>
  </div>
);
export default Experience;
