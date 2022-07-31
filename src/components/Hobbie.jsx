const Hobbie = ({ name, imgSrc, description }) => (
  <div className='flip card'>
    <div className='flip-content'>
      <div className='flip-front'>
        <img src={imgSrc} alt={name} className='' />
      </div>
      <div id='' className='flip-back card cardBack'>
        <div id='' className='cardBack-title'>
          <span>{name}</span>
        </div>
        <div id='' className='cardBack-description'>
          <span>{description}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Hobbie;
