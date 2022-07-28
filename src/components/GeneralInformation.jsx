import InformationItem from 'components/InformationItem';

const GeneralInformation = ({ data }) => (
  <div className=''>
    {data.map((information) => (
      <InformationItem text={information.text} svg={information.svg} />
    ))}
  </div>
);
export default GeneralInformation;
