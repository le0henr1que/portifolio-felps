import { MyExperiences } from "../../../../data/AboutMe";
import CardExperiences from "./components/CardExperiences";

function Experience() {
  return (
    <>
      <div className="flex gap-[16px] card-experience-responsive">
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
