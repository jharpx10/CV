const SectionLink = ({ text, id }) => (
  <div className='section-btn'>
    <a href={`#${id}`}>{text}</a>
  </div>
);

export default SectionLink;
