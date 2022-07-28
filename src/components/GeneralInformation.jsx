import InformationItem from 'components/InformationItem';

const GeneralInformation = ({ data }) => (
  <div id='generalInformation'>
    {data.map((information) => (
      <InformationItem text={information.text} svg={information.svg} />
    ))}
  </div>
);
export default GeneralInformation;
