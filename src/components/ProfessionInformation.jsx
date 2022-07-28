const ProfessionInformation = ({ profession, description }) => (
  <div className='flex flex-col'>
    <span>{profession}</span>
    <span>{description}</span>
  </div>
);

export default ProfessionInformation;
