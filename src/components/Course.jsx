const Course = ({ name, imgSrc, date }) => 

(
   
  <div>
   <img
        src={imgSrc}
        alt={name}
      />
    <span>{name}</span>
    <span>{date}</span>
  </div>
);

export default Course;
