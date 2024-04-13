import { MyEducations } from "../../../../data/AboutMe";
import CardEducation from "./components/CardEducation";

function Education() {
  return (
    <>
      <div className="flex flex-col gap-16">
        {MyEducations.map((education) => (
          <CardEducation
            key={education.title}
            title={education.title}
            subtitle={education.subtitle}
            logo={education.img}
          />
        ))}
      </div>
    </>
  );
}

export default Education;
