const InformationItem = ({ text, svg }) => (
  <div className='information-item normal-text'>
    {svg}
    <div>{text}</div>
  </div>
);

export default InformationItem;
