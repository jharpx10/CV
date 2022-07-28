const SectionLink = ({ text, id }) => (
  <div className=''>
    <a href={`#${id}`}>{text}</a>
  </div>
);

export default SectionLink;
