const Hobbie = ({ name, imgSrc }) => (
  <div id="hobbieCard">
    <img src={imgSrc} alt={name} />
    <span>{name}</span>
  </div>
);

export default Hobbie;
