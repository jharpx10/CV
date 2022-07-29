const Hobbie = ({ name, imgSrc }) => (
  <div className='flip card'>
    <div className='flip-content'>
      <div className='flip-front'>
        <img src={imgSrc} alt={name} className='' />
      </div>
      <div id='' className='flip-back card cardBack'>
        <span>{name}</span>
      </div>
    </div>
  </div>
);

export default Hobbie;
