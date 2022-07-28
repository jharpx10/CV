import { courses } from 'utils/data';
import Course from 'components/Course';
import SectionTitle from 'components/SectionTitle';
import { coursesSection } from 'utils/homeSections';

const Courses = () => (
  <div id={coursesSection.id}>
    <SectionTitle text={coursesSection.title} id={coursesSection.id} />
    {courses.map((course) => (
      <Course name={course.name} imgSrc={course.imgSrc} date={course.date} />
    ))}
  </div>
);

export default Courses;
