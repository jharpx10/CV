const SectionLink = ({ text, id }) => (
  <a className='section-btn' href={`#${id}`}>
    {text}
  </a>
);

export default SectionLink;
