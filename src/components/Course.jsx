const Course = ({ name, imgSrc, date }) => (
  <div id='courseCard'>
    <img src={imgSrc} alt={name} />
    <span>{name}</span>
    <span>{date}</span>
  </div>
);

export default Course;
