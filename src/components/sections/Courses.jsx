import { courses } from 'utils/data';
import Course from 'components/Course';
import SectionTitle from 'components/SectionTitle';

const Courses = () => (
  <div id='courses'>
    <SectionTitle text='Cursos afín' />
    {courses.map((course) => (
      <Course name={course.name} imgSrc={course.imgSrc} date={course.date} />
    ))}
  </div>
);

export default Courses;
