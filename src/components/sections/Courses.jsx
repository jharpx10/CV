import  { courses} from 'utils/constants'
import Course from 'components/Course';
import SectionTitle from 'components/SectionTitle';



const Courses = () => (
  <div>
      <SectionTitle
    text="HOBBIES"
    />
    {courses.map((course) => (
      <Course 
      name={course.name} 
      imgSrc={course.imgSrc} 
      date={course.date} 
      />
    ))}
  </div>
);

export default Courses;