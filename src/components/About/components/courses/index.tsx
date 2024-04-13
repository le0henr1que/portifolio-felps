import { MyCourses } from "../../../../data/AboutMe";
import CardCourses from "./components/CardCourses";

function Courses() {
  return (
    <>
      <div className="flex flex-wrap gap-[16px] card-experience-responsive">
        {MyCourses.map((course) => (
          <CardCourses
            key={course.title}
            title={course.title}
            subtitle={course.subtitle}
            logo={course.img}
          />
        ))}
      </div>
    </>
  );
}

export default Courses;
