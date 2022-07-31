const Course = ({ name, imgSrc, date }) => (
  <div className='flip card'>
    <div className='flip-content'>
      <div className='flip-front'>
        <img src={imgSrc} alt={name} className='' />
        <span>{name}</span>
      </div>
      <div id='' className='flip-back card cardBack'>
        <span className='cardBack-title'>Fecha de realización: {date}</span>
      </div>
    </div>
  </div>
);

export default Course;
