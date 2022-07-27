const Hobbie = ({ name, imgSrc }) => 

(
   
  <div>
   <img
        src={imgSrc}
        alt={name}
      />
    <span>{name}</span>
  </div>
);

export default Hobbie;
