import { MyExperiences } from "../../../../data/AboutMe";
import CardExperiences from "./components/CardExperiences";

function Experience() {
  return (
    <>
      <div className="flex items-start space-x-4 self-stretch card-experience-responsive gap-[16px]">
        {MyExperiences.map((item) => (
          <CardExperiences
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            logo={item.img}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Experience;
