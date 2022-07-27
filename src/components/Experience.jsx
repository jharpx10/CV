const Experience = ({ initialDate, endDate, title, entity, description }) => (
  <div className='rounded-md bg-white shadow-xs'>
    <div>{initialDate}</div>
    <div>{endDate}</div>
    <div>{title}</div>

    <div>{entity}</div>
    <div>{description}</div>
  </div>
);
export default Experience;
